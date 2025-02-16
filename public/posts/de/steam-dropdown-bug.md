---
title: "Linux: Fix Steam Dropdown Bug"
author: Rico
image: /images/steam-dropdown-bug.avif
keywords:
  - Steam Settings Bug
  - Steam Dropdown nicht auswählbar
  - Linux Steam Client Fehler
  - Steam Einstellungen Linux
description: Unter Linux können die Einstellungen des Steam Clients verbugt sein und Einstellungen in Dropdowns lassen sich nicht auswählen. Hier erfährst du, wie du den Bug beheben kannst.
date: 2024-06-17
---

## Das Problem: Der Steam Client übernimmt keine Einstellungen aus Dropdowns

Unter Linux kann es nach der Installation von Steam schnell zu Frustration führen, wenn man beispielsweise die Sprache in den Einstellungen ändern möchte. Die Dropdown-Menüs reagieren nicht auf Auswahlversuche und die getroffene Auswahl bleibt unverändert. Dieses Problem betrifft alle Dropdown-Felder im Steam Client.

## Valve ist das Problem der nicht auswählbaren Dropdowns bekannt

Eine kurze Internetrecherche zeigt schnell, dass viele Nutzer das gleiche Problem haben. Auf [GitHub](https://github.com/ValveSoftware/steam-for-linux/issues/9273) gibt es zahlreiche Meldungen zu diesem Fehler. Der Status dieses Issues ist weiterhin "open", was bedeutet, dass Valve noch keine offizielle Lösung angeboten hat. Das Problem wurde bereits im März 2023 gemeldet.

## Die Ursache: Warum sich die Dropdowns in Steam nicht auswählen lassen

Der Fehler liegt im Fokussierungsverhalten der Fenster der Desktopumgebung. Unter Cinnamon beispielsweise gibt es verschiedene Optionen für das Fokussierungsverhalten. Wenn der Fensterfokus der Maus folgen soll, tritt dieses Problem auf.

## Lösung: Problem der nicht auswählbaren Dropdowns beheben

Um den Fehler zu umgehen, muss das Fokussierungsverhalten der Fenster so eingestellt werden, dass sie erst durch einen Mausklick fokussiert werden. Unter der Desktopumgebung Cinnamon geht das wie folgt:

1. Im Startmenü nach _"Fenster"_ suchen
2. Zum Reiter _"Verhalten"_ wechseln
3. _"Fokussierungsverhalten der Fenster"_ auf _"Klick"_ umstellen

Nach dieser Änderung sollte das Problem nicht mehr auftreten.

## Steam: Nicht auswählbare Dropdowns umgehen

Falls du das Fokussierungsverhalten der Fenster nicht ändern möchtest, gibt es einen Workaround, um die Einstellungen dennoch auswählen zu können:

1. Rechte Maustaste gedrückt halten, bevor du das Dropdown öffnest
2. Mit immer noch gedrückter rechter Maustaste einen Linksklick auf das Dropdown machen
3. Rechte Maustaste weiter halten und mit der linken Maustaste die gewünschte Option auswählen

Steam sollte nun die Auswahl übernommen haben.
