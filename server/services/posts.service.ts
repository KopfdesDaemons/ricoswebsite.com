import path from 'path';
import * as fs from 'fs';
import { POSTS_FOLDER_PATH } from 'server/config/paths.config';
import { MarkdownHelper } from 'src/app/helpers/markdown.helper';

let languageFileNameList: { lang: string; fileNames: string[] }[] | undefined = undefined;
const postsPerPage = 5;

/**
 * Gets the list of all posts for each language
 * @returns {Promise<{ lang: string, fileNames: string[] }[]>}
 **/
const loadLanguagesFileNamesList = async (): Promise<{ lang: string; fileNames: string[] }[]> => {
  // Get language folders
  const postsFolderContent = await fs.promises.readdir(POSTS_FOLDER_PATH);
  const languageFolders = postsFolderContent.filter((dir: string) => fs.statSync(path.join(POSTS_FOLDER_PATH, dir)).isDirectory());

  const langFileNames: { lang: string; fileNames: string[] }[] = [];

  // Get file names
  for (const langFolder of languageFolders) {
    const folderPath = path.join(POSTS_FOLDER_PATH, langFolder);
    const langFolderContent = await fs.promises.readdir(folderPath);
    const markdownFiles = langFolderContent.filter((file: string) => path.extname(file) === '.md');
    langFileNames.push({ lang: langFolder, fileNames: markdownFiles });
  }

  return langFileNames;
};

/**
 * Gets the list of all posts for each language (cached)
 * @returns {Promise<{ lang: string, fileNames: string[] }[]>}
 **/
export const getLanguagesFileNamesList = async (): Promise<{ lang: string; fileNames: string[] }[]> => {
  if (!languageFileNameList) {
    languageFileNameList = await loadLanguagesFileNamesList();
  }
  return languageFileNameList;
};

/**
 * Creates a JSON file with all posts for each language
 * @returns {Promise<void>}
 **/
export const generatePostFiles = async (): Promise<void> => {
  const langFileNamesList = await getLanguagesFileNamesList();

  for (const lang of langFileNamesList) {
    await Promise.all([createPostsJSON(lang.lang, lang.fileNames)]);
  }
};

/**
 * Creates a JSON file with all posts for a given language
 * the posts are read from the language folder
 * @param {string} lang - The language to create the JSON file for
 **/
const createPostsJSON = async (lang: string, fileNames: string[]): Promise<void> => {
  try {
    // Paths
    const langFolderPath = path.join(POSTS_FOLDER_PATH, lang);
    const outputFilePath = path.join(POSTS_FOLDER_PATH, `posts.${lang}.json`);

    // Read metadata from markdownfiles
    const metadataPromises = fileNames.map(async (markdownFile) => {
      const content = await fs.promises.readFile(path.join(langFolderPath, markdownFile), 'utf8');
      const metadata = MarkdownHelper.extractYamlHeader(content);
      const modifiedMetadata = {
        ...metadata,
        fileName: path.parse(markdownFile).name,
      };
      return modifiedMetadata;
    });

    const metadataList = await Promise.all(metadataPromises);

    // Write JSON
    await fs.promises.writeFile(outputFilePath, JSON.stringify(metadataList, null, 2), 'utf8');

    console.log(`JSON-File successfully created for the language ${lang}`);
  } catch (error) {
    console.error(`Error creating JSON-File for the language ${lang}:`, error);
  }
};

/**
 * Gets the total number of pages for a given language
 * @param {string} lang - The language to get the total number of pages for
 * @returns {Promise<number>} The total number of pages
 **/
export const getTotalPages = async (lang: string): Promise<number> => {
  const langFileNames = await getLanguagesFileNamesList();
  const langFile = langFileNames.find((langFile) => langFile.lang === lang);
  return Math.ceil(langFile!.fileNames.length / postsPerPage);
};

/**
 * Get the route params for all posts
 * @returns {Promise<{ lang: string, fileName: string }[]>}
 **/
export const getPostsRouteParams = async (): Promise<{ lang: string; fileName: string }[]> => {
  const langFileNamesList = await getLanguagesFileNamesList();

  const languageFileNameList = langFileNamesList.flatMap(({ lang, fileNames }) =>
    fileNames.map((fileName) => ({
      lang,
      fileName: path.basename(fileName, path.extname(fileName)),
    }))
  );

  return languageFileNameList;
};

export const getPostsListRouteParams = async (): Promise<{ lang: string; page: string }[]> => {
  const langFileNamesList = await getLanguagesFileNamesList();
  const routes: { lang: string; page: string }[] = [];

  for (const { lang } of langFileNamesList) {
    const totalPages = await getTotalPages(lang);
    for (let page = 1; page <= totalPages; page++) {
      routes.push({ lang, page: page.toString() });
    }
  }

  return routes;
};
