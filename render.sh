#!/bin/bash

# Führe den Befehl ng run ricoswebsite.com:prerender aus
ng run ricoswebsite.com:prerender

node generateBlogpostList.js

# Wechsle in das Verzeichnis dist/ricoswebsite.com/browser
cd dist/ricoswebsite.com/browser

# Erstelle die .nojekyll-Datei
touch .nojekyll

PORT=8080

# Prüfen, ob der Port bereits belegt ist
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
    echo "HTTP-Server läuft bereits auf Port $PORT"
else
    echo "HTTP-Server wird gestartet auf Port $PORT"
    http-server
fi