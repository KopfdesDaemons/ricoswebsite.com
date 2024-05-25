const fs = require('fs-extra');
const glob = require('glob');
const yamlFront = require('yaml-front-matter');
const path = require('path');

const baseDir = './src/assets/posts'; // Basisverzeichnis für die Sprachordner

async function extractMetadataForAllLanguages() {
    try {
        const languages = await fs.readdir(baseDir); // Lese alle Sprachordner im Basisverzeichnis

        for (const language of languages) {
            const languagePath = path.join(baseDir, language);
            if (await fs.stat(languagePath).then(stat => stat.isDirectory())) {
                await extractMetadataForLanguage(language);
            }
        }
    } catch (error) {
        console.error('Fehler beim Extrahieren der Metadaten für alle Sprachen:', error);
    }
}

async function extractMetadataForLanguage(language) {
    try {
        const inputDir = path.join(baseDir, language);
        const outputFile = path.join(baseDir, `posts.${language}.json`);
        const files = glob.sync(`${inputDir}/*.md`); // Lese alle Markdown-Dateien im Sprachverzeichnis
        const metadataList = [];

        for (const file of files) {
            const content = await fs.readFile(file, 'utf8');
            const data = yamlFront.loadFront(content);
            const { __content, ...metadata } = data; // Entferne den Inhalt, behalte nur die Metadaten

            // Dateiname mit Endung
            const fileNameWithExt = path.basename(file);

            // Dateiname ohne Endung
            const fileNameWithoutExt = path.parse(fileNameWithExt).name;

            metadata.fileName = fileNameWithoutExt;
            metadataList.push(metadata);
        }

        await fs.ensureFile(outputFile); // Stelle sicher, dass die Ausgabedatei existiert
        await fs.writeJson(outputFile, metadataList, { spaces: 2 }); // Schreibe die Metadaten in die JSON-Datei

        console.log(`Liste der Blogbeiträge erfolgreich in ${outputFile} geschrieben.`);
    } catch (error) {
        console.error(`Fehler beim Extrahieren der Metadaten für Sprache ${language}:`, error);
    }
}

extractMetadataForAllLanguages();

