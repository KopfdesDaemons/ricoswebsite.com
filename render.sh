#!/bin/bash

# Generiere alle Datein für den Blog: posts.json, sitemap.txt, routes.txt
ts-node prepareFiles.ts


# Rendere die Webseite vor
echo "Starte ng build..."
ng build


# Wechsle in das Verzeichnis
cd dist/ricoswebsite.com/browser


# Erstelle manuell eine 404.html, weil der Prerenderer das nicht mehr macht
cp index.html 404.html


PORT=8080

# Prüfen, ob der Port bereits belegt ist
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
    echo "HTTP-Server läuft bereits auf Port $PORT"
else
    echo "HTTP-Server wird gestartet auf Port $PORT"
    http-server
fi