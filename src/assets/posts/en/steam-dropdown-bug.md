---
title: "Linux: Fix Steam Dropdown Bug"
author: Rico
image: assets/images/steam-dropdown-bug.avif
keywords:
  - Steam Settings Bug
  - Steam Dropdown not selectable
  - Linux Steam Client Issue
  - Steam Settings Linux
description: Under Linux, the settings of the Steam Client can be bugged and settings in dropdowns cannot be selected. Here you can find out how to fix this bug.
date: 2024-06-17
---

## The problem: The Steam Client does not adopt settings from dropdowns

Under Linux, after installing Steam, it can quickly lead to frustration if, for example, you want to change the language in the settings. The dropdown menus do not respond to selection attempts and the selection made remains unchanged. This problem affects all dropdown fields in the Steam Client.

## Valve is aware of the problem of unselectable dropdowns

A quick internet search quickly shows that many users have the same problem. There are numerous reports of this error on [GitHub](https://github.com/ValveSoftware/steam-for-linux/issues/9273). The status of this issue is still "open", which means that Valve has not yet offered an official solution. The problem was reported in March 2023.

## The cause: Why the dropdowns in Steam cannot be selected

The error lies in the focusing behavior of the windows in the desktop environment. In Cinnamon, for example, there are various options for the focusing behavior. If the window focus is supposed to follow the mouse, this problem occurs.

## Solution: Fix the problem of unselectable dropdowns

To work around the error, the focusing behavior of the windows must be set so that they are only focused by a mouse click. In the Cinnamon desktop environment, this is done as follows:

1. Search for _"Window"_ in the start menu

2. Switch to the _"Behavior"_ tab

3. Change _"Window focus behavior"_ to _"Click"_

After this change, the problem should no longer occur.

## Steam: Bypass unselectable dropdowns

If you do not want to change the window focus behavior, there is a workaround to still be able to select the settings:

1. Hold down the right mouse button before opening the dropdown

2. With the right mouse button still pressed, left-click on the dropdown

3. Continue to hold down the right mouse button and select the desired option with the left mouse button

Steam should now have adopted the selection.
