import path from 'path';
import fs from 'fs';
import { getLanguagesFileNamesList } from './posts.service';
import { BLOGPOST_ROUTE, PUBLIC_FOLDER_PATH } from 'server/config/paths.config';
import { BASE_URL } from 'src/app/environment/enviroment';

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
    // generate blogpost routes
    const urls = fileNames.filter((fileName) => fileName !== 'privacy-policy.md').map((fileName) => `${BASE_URL}/${lang}${BLOGPOST_ROUTE}/${path.parse(fileName).name}/`);

    const sitemapFilePath = path.join(PUBLIC_FOLDER_PATH, 'sitemap.txt');

    // read existing content
    let data = '';
    try {
      data = await fs.promises.readFile(sitemapFilePath, 'utf8');
    } catch (readError: any) {
      if (readError.code !== 'ENOENT') {
        throw readError;
      }
    }

    // remove all existing /blogpost routes
    const filteredData = data
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && !line.includes(`${lang}/blogpost/`))
      .join('\n');

    // add new blogpost routes
    const newContent = [filteredData, ...urls].filter(Boolean).join('\n');

    // write new content
    await fs.promises.writeFile(sitemapFilePath, newContent + '\n', 'utf8');

    console.log(`sitemap.txt successfully updated for the language ${lang}`);
  } catch (err) {
    console.error('Error updating sitemap.txt:', err);
  }
};
