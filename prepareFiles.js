const fs = require('fs-extra');
const glob = require('glob');
const yamlFront = require('yaml-front-matter');
const path = require('path');

const postsDir = './src/assets/posts';
const sitemapPath = __dirname + '/src/sitemap.txt';
const DomainWithProtocol = 'https://ricoswebsite.com'
const blogpostRoute = '/blogpost';
const langFileNames = [];

function getLanguagesAndFileNames() {
    const languages = fs.readdirSync(postsDir).filter(dir => fs.statSync(path.join(postsDir, dir)).isDirectory());

    languages.forEach(lang => {
        const files = glob.sync(path.join(postsDir, lang, '*.md')).map(file => path.basename(file));
        langFileNames.push({ lang, fileNames: files });
    });
}

function createPostsJSON(lang) {
    try {
        const inputDir = path.join(postsDir, lang);
        const outputFile = path.join(postsDir, `posts.${lang}.json`);
        const langFiles = langFileNames.find(l => l.lang === lang).fileNames;
        const metadataList = langFiles.map(file => {
            const content = fs.readFileSync(path.join(inputDir, file), 'utf8');
            const { __content, ...metadata } = yamlFront.loadFront(content);
            metadata.fileName = path.parse(file).name;
            return metadata;
        });

        fs.ensureDirSync(path.dirname(outputFile));
        fs.writeJSONSync(outputFile, metadataList, { spaces: 2 });
    } catch (error) {
        console.error(`Fehler beim Erstellen der JSON für Sprache ${lang}:`, error);
    }
}

function generateRoutesTxt(lang) {

    lang.routes = lang.fileNames.map(fileName => {
        return lang.lang + blogpostRoute + '/' + path.parse(fileName).name;
    });

    const routesFilePath = path.join(__dirname, 'routes.txt');

    // Lies den Inhalt der routes.txt Datei
    fs.readFile(routesFilePath, 'utf8', (err, data) => {

        // Filtere die Zeilen, die '/blogpost/' enthalten
        const filteredData = data.split('\n').filter(line => !line.includes('/blogpost/')).join('\n');

        fs.writeFile(routesFilePath, filteredData, 'utf8', (err) => {
            if (err) {
                console.error('Fehler beim Schreiben der Datei:', err);
                return;
            }

            const routesString = lang.routes.join('\n');

            fs.appendFile(routesFilePath, '\n' + routesString, 'utf8', (err) => {
                if (err) {
                    console.error('Fehler beim Anhängen der Routen:', err);
                } else {
                    console.log('routes.txt erfolgreich aktualisiert.');
                }
            });
        });
    });
}

function generateSitemapTxt(lang) {

    lang.URLs = lang.fileNames.filter(fileName =>
        fileName != 'privacy-policy.md').map(fileName => {
            return DomainWithProtocol + '/' + lang.lang + blogpostRoute + '/' + path.parse(fileName).name;
        });

    fs.readFile(sitemapPath, 'utf8', (err, data) => {

        // Filtere die Zeilen, die '/blogpost/' enthalten
        const filteredData = data.split('\n').filter(line => !line.includes('/blogpost/')).join('\n');

        fs.writeFile(sitemapPath, filteredData, 'utf8', (err) => {
            if (err) {
                console.error('Fehler beim Schreiben der Datei:', err);
                return;
            }

            const routesString = lang.URLs.join('\n');

            fs.appendFile(sitemapPath, '\n' + routesString, 'utf8', (err) => {
                if (err) {
                    console.error('Fehler beim Anhängen der Routen:', err);
                } else {
                    console.log('sitemap.txt erfolgreich aktualisiert.');
                }
            });
        });
    });
}

getLanguagesAndFileNames();
langFileNames.forEach((lang) => {
    createPostsJSON(lang.lang);
    generateRoutesTxt(lang);
    generateSitemapTxt(lang);
});

console.log(langFileNames);
