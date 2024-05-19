---
title: Linux Mint Cinnamon tested as a desktop
author: Rico
image: assets/images/linux-mint-desktop.avif
keywords:
  - linux
  - desktop
description: As a hobby web developer, I tested Linux Mint Cinnamon as a desktop. Here I list my positive experiences and problems.
date: 2024-04-12
---

## Positive

- native development with Apache, MySQL and PHP
- pretty and feature-rich file explorer (Nemo)
- many customization options for the start bar
- very nice GUI (Cinnamon Adapta-Nokto, ePapirus, Nemo)
- Software Manager
- good partition manager
- beautiful wallpapers
- useful disk usage analyzer
- updates only in the background
- integration for the google account

## Negative

- standard theme and icons are ugly
- no autoscroll in Google Chrome
  - There is a [Chrome plugin](https://chromewebstore.google.com/detail/autoscroll/occjjkgifpmdgodlplnacmkejpdionan?hl=de) that adds this function, but it is very buggy and I cannot recommend it
  - There is a [chrome flag](https://medium.com/@1nikolas/linux-enable-middle-mouse-button-scrolling-on-chrome-ium-and-electron-apps-discord-etc-ab2d0a213505), but it has an annoying warning message as a side effect. The flag is often removed automatically.
- exif data view in explorer is poor
  - video resolution and bitrate cannot be displayed
- default audio output cannot be set easily and reliably
  - the application PulseAudio helps limited
- video editing not really possible
  - DaVinci Resolve does not have H.264, H.265 and AAC codec support
  - other codes are a solution
- only a few supported games
  - Steam settings are bugged
- Graphics glitch in cinnamon after starting from standby mode
  - Restarting cinnamon helps: Press "Alt" + "F2", Type "r", Press "Enter"
- LibreOffice icons are not clearly visible with a dark Cinnamon theme
  - Icons can be exchanged
