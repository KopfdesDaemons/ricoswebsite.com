import path from 'path';
import { environment } from 'src/app/environment/enviroment';
import * as fs from 'fs-extra';
import { getLanguagesFileNamesList } from './posts.service';
import { BLOGPOST_ROUTE, PUBLIC_FOLDER_PATH } from 'server/config/paths.config';

/**
 * Generates routes.txt and sitemap.txt for each language
 **/
export const generateConfigFiles = async () => {
  const langFileNamesList = await getLanguagesFileNamesList();

  for (const lang of langFileNamesList) {
    await generateSitemapTxt(lang.lang, lang.fileNames);
  }
};

/**
 * Generates a sitemap.txt file with all blogpost URLs for each language
 * This file is important for SEO
 **/
const generateSitemapTxt = async (lang: string, fileNames: string[]) => {
  try {
    // Generiere die URLs
    const urls = fileNames.filter((fileName) => fileName !== 'privacy-policy.md').map((fileName) => environment.baseUrl + '/' + lang + BLOGPOST_ROUTE + '/' + path.parse(fileName).name + '/');
    const sitemapFilePath = path.join(PUBLIC_FOLDER_PATH, 'sitemap.txt');
    // Lese die bestehende Sitemap-Datei
    const data = await fs.readFile(sitemapFilePath, 'utf8');

    // Filtere die Zeilen, die '/blogpost/' enthalten
    const filteredData = data
      .split('\n')
      .filter((line) => !line.includes(lang + '/blogpost/'))
      .join('\n');

    // Füge die neuen Routen hinzu
    const routesString = urls.join('\n');
    const newContent = filteredData + '\n' + routesString;

    // Schreibe den gesamten neuen Inhalt in die Datei
    await fs.writeFile(sitemapFilePath, newContent, 'utf8');

    console.log(`sitemap.txt erfolgreich für die Sprache ${lang} aktualisiert.`);
  } catch (err) {
    console.error('Fehler beim Verarbeiten der Datei:', err);
  }
};
