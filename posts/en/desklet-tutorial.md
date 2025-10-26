---
title: "Tutorial: Developing a Desklet for the Cinnamon Desktop"
author: Rico
image: /images/desklet-tutorial.avif
keywords:
  - Cinnamon
  - Linux
description: Documentation for developing a desklet for the Cinnamon desktop.
date: 2025-10-25
---

## Overview

1.  [File structure](/en/blogpost/desklet-tutorial/#file-structure)
2.  [Hello World Desklet](/en/blogpost/desklet-tutorial/#hello-world)
3.  [Debugging](/en/blogpost/desklet-tutorial/#debugging)
4.  [Icons](/en/blogpost/desklet-tutorial/#icons)
5.  [Box-Layout](/en/blogpost/desklet-tutorial/#box-layout)
6.  [Button](/en/blogpost/desklet-tutorial/#button)
7.  [Styling](/en/blogpost/desklet-tutorial/#styling)
8.  [Settings](/en/blogpost/desklet-tutorial/#settings)
9.  [Images](/en/blogpost/desklet-tutorial/#images)
10. [Mainloop](/en/blogpost/desklet-tutorial/#mainloop)
11. [Translation](/en/blogpost/desklet-tutorial/#translation)

<h2 id="file-structure" class="h2-underlined">File structure</h2>

The source code of all desklets can be found in this [GitHub repository](https://github.com/linuxmint/cinnamon-spices-desklets).

We create a fork from this repository and add our new desklet in a new folder.

The folder must be named after the desklet's UUID. This consists of the desklet name, an @, and the GitHub username. For this example, `tutorial-desklet@KopfdesDaemons`.

We set up the following file structure:

```
  tutorial-desklet@KopfdesDaemons
    └── files
    │    └── tutorial-desklet@KopfdesDaemons
    │        ├── desklet.js
    │        ├── icon.png
    │        ├── metadata.json
    │        ├── settings-schema.json
    │        └── stylesheet.css
    ├── info.json
    ├── README.md
    └── screenshot.png
```

In the `info.json` we only add the author:

```json
{
  "author": "KopfdesDaemons"
}
```

The `README.md` and `screenshot.png` are displayed on the [Cinnamon website](https://cinnamon-spices.linuxmint.com/desklets/popular).

The `metadata.json` looks like this:

```json
{
  "uuid": "tutorial-desklet@KopfdesDaemons",
  "name": "Tutorial Desklet",
  "description": "This is a tutorial desklet.",
  "version": "1.0",
  "max-instances": "50"
}
```

<h2 id="hello-world" class="h2-underlined">Hello World Desklet</h2>

To explain the structure of `desklet.js`, we start with a simple Hello World desklet.

![Hello World Desklet](/images/desklet-tutorial/hello-world.png "Hello World Desklet")

```ts
const Desklet = imports.ui.desklet;
const St = imports.gi.St;

class MyDesklet extends Desklet.Desklet {
  constructor(metadata, deskletId) {
    super(metadata, deskletId);

    this.setHeader("Tutorial Desklet");
    this._setupLayout();
  }

  _setupLayout() {
    const label = new St.Label({ text: "Hello World!" });
    this.setContent(label);
  }
}

function main(metadata, deskletId) {
  return new MyDesklet(metadata, deskletId);
}
```

We can test the desklet with this command:

```bash
./test-spice tutorial-desklet@KopfdesDaemons -s
```

The `-s` parameter skips desklet validation. This is useful if not all files, such as `screenshot.png`, are present yet.

<h2 id="debugging" class="h2-underlined">Debugging</h2>

We can log messages to the console:

```ts
global.log("test");
global.logError("error");
```

You can open the console by right-clicking on the taskbar, selecting "Troubleshoot" and then "Looking Glass".

<h2 id="icons" class="h2-underlined">Icons</h2>

So far, we don't have many imports. In addition to `Desklet`, we also import `St` for the label we display. `St` stands for [Shell Toolkit](https://gnome.pages.gitlab.gnome.org/gnome-shell/st/index.html) and provides UI elements. The Shell Toolkit is based on [Clutter](https://mutter.gnome.org/clutter/index.html), an OpenGL-based library for displaying UI elements on a canvas.

With the Shell Toolkit, we can display even more elements. Next, let's replace our label with an icon:

![Icon Desklet](/images/desklet-tutorial/icon.png "Icon Desklet")

```ts
const Desklet = imports.ui.desklet;
const St = imports.gi.St;

class MyDesklet extends Desklet.Desklet {
  constructor(metadata, deskletId) {
    super(metadata, deskletId);

    this.setHeader("Tutorial Desklet");
    this._setupLayout();
  }

  _setupLayout() {
    const icon = new St.Icon({
      icon_name: "face-smile-symbolic",
      icon_type: St.IconType.SYMBOLIC,
      icon_size: 32,
    });
    this.setContent(icon);
  }
}

function main(metadata, deskletId) {
  return new MyDesklet(metadata, deskletId);
}
```

The icon names can be found under /usr/share/icons/Adwaita/symbolic.

<h2 id="box-layout" class="h2-underlined">Box-Layout</h2>

So far, we've only set one element as the desklet's content. Next, let's display the label and icon together. To display more than one element, we need a box layout.

![Box Layout Desklet](/images/desklet-tutorial/box-layout.png "Box Layout Desklet")

```ts
const Desklet = imports.ui.desklet;
const St = imports.gi.St;

class MyDesklet extends Desklet.Desklet {
  constructor(metadata, deskletId) {
    super(metadata, deskletId);

    this.setHeader("Tutorial Desklet");
    this._setupLayout();
  }

  _setupLayout() {
    const box = new St.BoxLayout({ vertical: true });

    const label = new St.Label({ text: "Hello World!" });
    const icon = new St.Icon({
      icon_name: "face-smile-symbolic",
      icon_type: St.IconType.SYMBOLIC,
      icon_size: 32,
    });

    box.add_child(label);
    box.add_child(icon);

    this.setContent(box);
  }
}

function main(metadata, deskletId) {
  return new MyDesklet(metadata, deskletId);
}
```

<h2 id="button" class="h2-underlined">Button</h2>

Now let’s add some logic and change the displayed icon with a click on a button:

![Button Desklet](/images/desklet-tutorial/button.png "Button Desklet")

```ts
const Desklet = imports.ui.desklet;
const St = imports.gi.St;

class MyDesklet extends Desklet.Desklet {
  constructor(metadata, deskletId) {
    super(metadata, deskletId);

    this.iconName = "face-smile-symbolic";

    this.setHeader("Tutorial Desklet");
    this._setupLayout();
  }

  _setupLayout() {
    const box = new St.BoxLayout({ vertical: true });

    const label = new St.Label({ text: "Hello World!" });
    const icon = new St.Icon({
      icon_name: this.iconName,
      icon_type: St.IconType.SYMBOLIC,
      icon_size: 32,
    });

    const button = new St.Button({ label: "Change Icon" });
    button.connect("button-press-event", () => this._changeIcon());

    box.add_child(label);
    box.add_child(icon);
    box.add_child(button);

    this.setContent(box);
  }

  _changeIcon() {
    this.iconName = this.iconName === "face-smile-symbolic" ? "face-sad-symbolic" : "face-smile-symbolic";
    this._setupLayout();
  }
}

function main(metadata, deskletId) {
  return new MyDesklet(metadata, deskletId);
}
```

Now the smiley becomes sad when we press the "Change Icon" button.

<h2 id="styling" class="h2-underlined">Styling</h2>

![Styling Desklet](/images/desklet-tutorial/styling.png "Styling Desklet")

We can add a `style_class` to the elements from the [Shell Toolkit](https://gnome.pages.gitlab.gnome.org/gnome-shell/st/index.html).

```ts
const label = new St.Label({ text: "Hello World!", style_class: "tutorial-desklet-label" });
const button = new St.Button({ label: "Change Icon", style_class: "tutorial-desklet-button" });
```

We can then customize the elements in the `stylesheet.css` with CSS:

```css
.tutorial-desklet-label {
  font-size: 2em;
  color: green;
}

.tutorial-desklet-button {
  padding: 0.5em;
  border: solid 1px rgb(165, 161, 161);
  border-radius: 5px;
  margin-top: 1em;
}

.tutorial-desklet-button:hover {
  background-color: rgb(173, 173, 173);
}
```

Some changes in the `stylesheet.css` file will only become visible after restarting the Cinnamon desktop. To do this, right-click on the taskbar and select "Restart Cinnamon" under "Troubleshoot".

The style can also be adjusted using JavaScript:

```ts
label.style = `font-size: 2em; color: green;`;
label.set_style(`font-size: ${this.labelFontSize}px;`);
```

The CSS is only rudimentarily implemented. Only basic properties like margin, padding, color, border, and font-size work. Everything related to the layout is controlled via the [box layout](/en/blogpost/desklet-tutorial/#box-layout). Flexbox does not work.

### Hover Effects

Hover effects work for buttons. If other elements are to be given a hover effect, the Shell Toolkit element must be adapted with the `track_hover` and `reactive` parameters:

```ts
const box = new St.BoxLayout({ style_class: "tutorial-desklet-box", reactive: true, track_hover: true });
```

<h2 id="settings" class="h2-underlined">Settings</h2>

The desklet settings are defined in the `settings-schema.json`.

```json
{
  "head0": {
    "type": "header",
    "description": "Style"
  },
  "label-font-size": {
    "type": "scale",
    "default": 20,
    "min": 12,
    "max": 60,
    "step": 1,
    "description": "Font size",
    "tooltip": "The font size of the label."
  }
}
```

The Settings API is [documented](https://projects.linuxmint.com/reference/git/cinnamon-tutorials/xlet-settings-ref.html). Here are the most important settings types:

- entry
- checkbox
- scale
- combobox
- spinbutton
- filechooser
- colorchooser
- datechooser

A new import is required, and the settings must be bound.

Here's a simple Hello World desklet that allows you to change the font size:

```ts
const Desklet = imports.ui.desklet;
const St = imports.gi.St;
const Settings = imports.ui.settings;

class MyDesklet extends Desklet.Desklet {
  constructor(metadata, deskletId) {
    super(metadata, deskletId);

    const settings = new Settings.DeskletSettings(this, metadata["uuid"], deskletId);
    settings.bindProperty(Settings.BindingDirection.IN, "label-font-size", "labelFontSize", this._setupLayout.bind(this));

    this.setHeader("Tutorial Desklet");
    this._setupLayout();
  }

  _setupLayout() {
    const label = new St.Label({ text: "Hello World!", style_class: "tutorial-desklet-label" });
    label.set_style(`font-size: ${this.labelFontSize}px;`);

    this.setContent(label);
  }
}

function main(metadata, deskletId) {
  return new MyDesklet(metadata, deskletId);
}
```

<h2 id="images" class="h2-underlined">Images</h2>

![Image Desklet](/images/desklet-tutorial/image.png "Image Desklet")

To display images, we need helper functions and three additional imports.

Here's a desklet that displays only one image:

```ts
const Desklet = imports.ui.desklet;
const St = imports.gi.St;
const GdkPixbuf = imports.gi.GdkPixbuf;
const Clutter = imports.gi.Clutter;
const Cogl = imports.gi.Cogl;

class MyDesklet extends Desklet.Desklet {
  constructor(metadata, deskletId) {
    super(metadata, deskletId);

    this.setHeader("Tutorial Desklet");
    this._setupLayout();
  }

  _setupLayout() {
    const image = this._getImageAtScale(`${this.metadata.path}/images/cat.jpg`, 200, 300);
    this.setContent(image);
  }

  _createActorFromPixbuf(pixBuf) {
    const pixelFormat = pixBuf.get_has_alpha() ? Cogl.PixelFormat.RGBA_8888 : Cogl.PixelFormat.RGB_888;
    const image = new Clutter.Image();
    image.set_data(pixBuf.get_pixels(), pixelFormat, pixBuf.get_width(), pixBuf.get_height(), pixBuf.get_rowstride());

    return new Clutter.Actor({
      content: image,
      width: pixBuf.get_width(),
      height: pixBuf.get_height(),
    });
  }

  _getImageAtScale(imageFilePath, requestedWidth, requestedHeight) {
    try {
      const pixBuf = GdkPixbuf.Pixbuf.new_from_file_at_size(imageFilePath, requestedWidth, requestedHeight);
      return this._createActorFromPixbuf(pixBuf);
    } catch (e) {
      global.logError(`Error loading image ${imageFilePath}: ${e}`);
      return new St.Label({ text: "Error" });
    }
  }
}

function main(metadata, deskletId) {
  return new MyDesklet(metadata, deskletId);
}
```

<h2 id="mainloop" class="h2-underlined">Mainloop</h2>

![Counter Desklet](/images/desklet-tutorial/counter.png "Counter Desklet")

The main loop is used to call functions after a specific time period.
With this, we can set a timeout and pass a function that executes after the timeout.

Here's a simple desklet that increments a counter every 5 seconds:

```ts
const Desklet = imports.ui.desklet;
const St = imports.gi.St;
const Mainloop = imports.mainloop;

class MyDesklet extends Desklet.Desklet {
  constructor(metadata, deskletId) {
    super(metadata, deskletId);
    this.counter = 0;

    this.setHeader("Tutorial Desklet");
    this._updateCounter();
  }

  _updateCounter() {
    if (this.timeout) Mainloop.source_remove(this.timeout);
    this.timeout = Mainloop.timeout_add_seconds(5, () => this._updateCounter());
    this.counter++;
    this._setupLayout();
  }

  _setupLayout() {
    const label = new St.Label({ text: `Counter: ${this.counter}` });
    this.setContent(label);
  }

  on_desklet_removed() {
    if (this._timeout) Mainloop.source_remove(this._timeout);
  }
}

function main(metadata, deskletId) {
  return new MyDesklet(metadata, deskletId);
}
```

The timeout can also be set in milliseconds:

```ts
this.timeout = Mainloop.timeout_add(300, () => this._updateCounter());
```

<h2 id="translation" class="h2-underlined">Translation</h2>

For the translation we need some boilerplate:

```ts
const GLib = imports.gi.GLib;
const Gettext = imports.gettext;

const UUID = "tutorial-desklet@KopfdesDaemons";

Gettext.bindtextdomain(UUID, GLib.get_home_dir() + "/.local/share/locale");

function _(str) {
  return Gettext.dgettext(UUID, str);
}
```

With this code, we can use the translations with the `_()` function.

Here is an example call to a translation:

```ts
const label = new St.Label({ text: _("Hello World!") });
```

### Extract translation

The following command creates a `.pot` file in the `po` folder containing the text to be translated:

```bash
./cinnamon-spices-makepot tutorial-desklet@KopfdesDaemons

```

We can open this file with a program like [Poedit](https://poedit.net/) to add translations.

We'll save the translation as `de.po` for the German language, for example. The `.mo` file must be deleted.

We can install and test the translation with this command:

```bash
./cinnamon-spices-makepot tutorial-desklet@KopfdesDaemons --install
```

Here is a Hello World desklet with translation:

```ts
const Desklet = imports.ui.desklet;
const St = imports.gi.St;
const GLib = imports.gi.GLib;
const Gettext = imports.gettext;

const UUID = "tutorial-desklet@KopfdesDaemons";

Gettext.bindtextdomain(UUID, GLib.get_home_dir() + "/.local/share/locale");

function _(str) {
  return Gettext.dgettext(UUID, str);
}

class MyDesklet extends Desklet.Desklet {
  constructor(metadata, deskletId) {
    super(metadata, deskletId);

    this.setHeader("Tutorial Desklet");
    this._setupLayout();
  }

  _setupLayout() {
    const label = new St.Label({ text: _("Hello World!") });
    this.setContent(label);
  }
}

function main(metadata, deskletId) {
  return new MyDesklet(metadata, deskletId);
}
```
