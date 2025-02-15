import * as fs from 'fs-extra';
import path from 'path';
import { environment } from './src/environment/enviroment';
import { loadFront } from 'yaml-front-matter';

prepareFiles();

/*
 * Prepares postss,json, routes.txt and sitemap.txt for each language
 */
async function prepareFiles() {
  const langFileNamesList = await getLanguagesFileNamesList();

  for (const lang of langFileNamesList) {
    await createPostsJSON(lang.lang, lang.fileNames);
    await generateRoutesTxt(lang.lang, lang.fileNames);
    await generateSitemapTxt(lang.lang, lang.fileNames);
  }
}

/**
 * Gets the list of all posts for each language
 * @returns {Promise<{ lang: string, fileNames: string[] }[]>}
 **/
async function getLanguagesFileNamesList(): Promise<{ lang: string; fileNames: string[] }[]> {
  // Get language folders
  const postsFolderContent = await fs.promises.readdir(environment.postsDir);
  const languageFolders = postsFolderContent.filter((dir: string) => fs.statSync(path.join(environment.postsDir, dir)).isDirectory());

  const langFileNames: { lang: string; fileNames: string[] }[] = [];

  // Get file names
  for (const langFolder of languageFolders) {
    const folderPath = path.join(environment.postsDir, langFolder);
    const langFolderContent = await fs.promises.readdir(folderPath);
    const markdownFiles = langFolderContent.filter((file: string) => path.extname(file) === '.md');
    langFileNames.push({ lang: langFolder, fileNames: markdownFiles });
  }

  console.log(langFileNames);
  return langFileNames;
}

/**
 * Creates a JSON file with all posts for each language
 * @param {string} lang - The language to create the JSON file for
 **/
async function createPostsJSON(lang: string, fileNames: string[]): Promise<void> {
  try {
    // Paths
    const langFolderPath = path.join(environment.postsDir, lang);
    const outputFilePath = path.join(environment.postsDir, `posts.${lang}.json`);

    // Read metadata from markdownfiles
    const metadataPromises = fileNames.map(async (markdownFile) => {
      const content = await fs.promises.readFile(path.join(langFolderPath, markdownFile), 'utf8');
      const { __content, ...metadata } = loadFront(content);
      const modifiedMetadata = {
        ...metadata,
        fileName: path.parse(markdownFile).name,
      };
      return modifiedMetadata;
    });

    // Warten, bis alle Promises aufgelöst sind
    const metadataList = await Promise.all(metadataPromises);

    // Schreibe die JSON-Datei
    await fs.promises.writeFile(outputFilePath, JSON.stringify(metadataList, null, 2), 'utf8');

    console.log(`JSON-Datei erfolgreich erstellt: ${outputFilePath}`);
  } catch (error) {
    console.error(`Fehler beim Erstellen der JSON für Sprache ${lang}:`, error);
  }
}

/**
 * Generates a routes.txt file with all blogpost routes for each language
 * This file is used by the angular pre-renderer to prerender the dynamic routes
 **/
async function generateRoutesTxt(lang: string, fileNames: string[]) {
  try {
    // Generiere relative Blogpost-Routen
    const routes = fileNames.map((fileName) => {
      return '/' + lang + environment.blogpostRoute + '/' + path.parse(fileName).name;
    });

    const routesFilePath = path.join(__dirname, 'routes.txt');

    // Lese den Inhalt der routes.txt Datei
    const data = await fs.readFile(routesFilePath, 'utf8');

    // Anderen Blogpost-Routen
    const nonBlogPostRoutes = data.split('\n').filter((line) => !line.includes(lang + '/blogpost/'));

    // Zusammenführen der Blogpost-Routen mit den anderen Routen
    const combinedRoutes = nonBlogPostRoutes.concat(routes);

    await fs.writeFile(routesFilePath, combinedRoutes.join('\n'), 'utf8');
    console.log(`routes.txt erfolgreich für die Sprache ${lang} aktualisiert.`);
  } catch (err) {
    console.error('Fehler beim Bearbeiten der Routes.txt Datei:', err);
  }
}

/**
 * Generates a sitemap.txt file with all blogpost URLs for each language
 * This file is important for SEO
 **/
async function generateSitemapTxt(lang: string, fileNames: string[]) {
  try {
    // Generiere die URLs
    const urls = fileNames
      .filter((fileName) => fileName !== 'privacy-policy.md')
      .map((fileName) => environment.baseUrl + '/' + lang + environment.blogpostRoute + '/' + path.parse(fileName).name + '/');

    // Lese die bestehende Sitemap-Datei
    const data = await fs.readFile(environment.sitemapPath, 'utf8');

    // Filtere die Zeilen, die '/blogpost/' enthalten
    const filteredData = data
      .split('\n')
      .filter((line) => !line.includes(lang + '/blogpost/'))
      .join('\n');

    // Füge die neuen Routen hinzu
    const routesString = urls.join('\n');
    const newContent = filteredData + '\n' + routesString;

    // Schreibe den gesamten neuen Inhalt in die Datei
    await fs.writeFile(environment.sitemapPath, newContent, 'utf8');

    console.log(`sitemap.txt erfolgreich für die Sprache ${lang} aktualisiert.`);
  } catch (err) {
    console.error('Fehler beim Verarbeiten der Datei:', err);
  }
}
