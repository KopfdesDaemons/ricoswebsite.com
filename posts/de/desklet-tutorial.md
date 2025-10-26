---
title: "Tutorial: Entwicklung eines Desklets für den Cinnamon Desktop"
author: Rico
image: /images/desklet-tutorial.avif
keywords:
  - Cinnamon
  - Linux
description: Eine Dokumentation für die Entwicklung eines Desklets für den Cinnamon Desktop.
date: 2025-10-25
---

## Übersicht

1.  [Dateistruktur](/de/blogpost/desklet-tutorial/#file-structure)
2.  [Hello World Desklet](/de/blogpost/desklet-tutorial/#hello-world)
3.  [Debugging](/de/blogpost/desklet-tutorial/#debugging)
4.  [Icons](/de/blogpost/desklet-tutorial/#icons)
5.  [Box-Layout](/de/blogpost/desklet-tutorial/#box-layout)
6.  [Button](/de/blogpost/desklet-tutorial/#button)
7.  [Styling](/de/blogpost/desklet-tutorial/#styling)
8.  [Settings](/de/blogpost/desklet-tutorial/#settings)
9.  [Images](/de/blogpost/desklet-tutorial/#images)
10. [Mainloop](/de/blogpost/desklet-tutorial/#mainloop)
11. [Übersetzung](/de/blogpost/desklet-tutorial/#translation)

<h2 id="file-structure" class="h2-underlined">Dateistruktur</h2>

Der Quellcode aller Desklets befindet sich in diesem [GitHub Repository](https://github.com/linuxmint/cinnamon-spices-desklets).

Von diesem Repository erstellen wir einen Fork und fügen unser neues Desklet in einem neuen Ordner hinzu.

Der Ordner muss nach der UUID des Desklets benannt werden. Diese besteht aus dem Namen des Desklets, einem @ und dem GitHub-Usernamen. Für dieses Beispiel `tutorial-desklet@KopfdesDaemons`.

Wir richten die folgende Dateistruktur ein:

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

In die `info.json` fügen wir nur den Autor hinzu:

```json
{
  "author": "KopfdesDaemons"
}
```

Die `README.md` und `screenshot.png` werden auf der [Cinnamon Webseite](https://cinnamon-spices.linuxmint.com/desklets/popular) angezeigt.

Die `metadata.json` sieht wie folgt aus:

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

Um den Aufbau der `desklet.js` zu erklären, beginnen wir mit einem einfachen Hello World-Desklet.

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

Mit diesem Befehl können wir das Desklet testen:

```bash
./test-spice tutorial-desklet@KopfdesDaemons -s
```

Der Parameter `-s` überspringt die Validierung des Desklets. Das ist hilfreich, wenn noch nicht alle Dateien, wie z.B. die `screenshot.png`, vorhanden sind.

<h2 id="debugging" class="h2-underlined">Debugging</h2>

Wir können Meldungen in die Konsole loggen:

```ts
global.log("test");
global.logError("error");
```

Die Konsole öffnet man mit einem Rechtsklick auf die Taskleiste unter "Fehler suchen" und dann "Looking Glass".

<h2 id="icons" class="h2-underlined">Icons</h2>

Bisher haben wir nicht viele Importe. Neben `Desklet` importieren wir noch `St` für das Label, welches wir anzeigen. `St` steht für [Shell Toolkit](https://gnome.pages.gitlab.gnome.org/gnome-shell/st/index.html) und stellt UI-Elemente bereit. Das Shell Toolkit baut auf [Clutter](https://mutter.gnome.org/clutter/index.html) auf, eine OpenGl basierte Library zum anzeigen von UI-Elementen auf einem Canvas.

Mit dem Shell Toolkit können wir noch weitere Elemente anzeigen lassen. Tauschen wir als nächstes unser Label mit einem Icon:

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

Die Icon-Namen findet Ihr unter /usr/share/icons/Adwaita/symbolic.

<h2 id="box-layout" class="h2-underlined">Box-Layout</h2>

Bisher haben wir nur ein Element als Content des Desklets gesetzt. Zeigen wir als nächsten das Label und das Icon zusammen an. Um mehr als ein Element anzuzeigen, brauchen wir ein Box-Layout.

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

Fügen wir nun etwas Logik hinzu und ändern das angezeigte Icon mit einem Klick auf einem Button:

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

Nun wird der Smiley traurig, wenn wir den Button "Change Icon" drücken.

<h2 id="styling" class="h2-underlined">Styling</h2>

![Styling Desklet](/images/desklet-tutorial/styling.png "Styling Desklet")

Den Elementen aus dem [Shell Toolkit](https://gnome.pages.gitlab.gnome.org/gnome-shell/st/index.html) können wir eine `style_class` hinzufügen.

```ts
const label = new St.Label({ text: "Hello World!", style_class: "tutorial-desklet-label" });
const button = new St.Button({ label: "Change Icon", style_class: "tutorial-desklet-button" });
```

Anschließend können wir die Elemente in der `stylesheet.css` mit CSS anpassen:

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

Einige Änderungen in der `stylesheet.css` werden erst nach einem Neustart des Cinnamon Desktops sichtbar. Dazu auf der Taskleiste mit der rechten Maustaste klicken und unter "Fehler suchen" "Cinnamon neustarten" auswählen.

Der Style kann auch per JavaScript angepasst werden:

```ts
label.style = `font-size: 2em; color: green;`;
label.set_style(`font-size: ${this.labelFontSize}px;`);
```

Das CSS ist nur rudimentär implementiert. Es funktionieren nur grundlegende Dinge, wie margin, padding, color, border oder font-size. Alles was das Layout betrifft wird über das [Box-Layout](/de/blogpost/desklet-tutorial/#box-layout) gesteuert. Flexbox funktioniert nicht.

### Hover-Effekte

Hover-Effekte funktionieren für Buttons. Wenn andere Elemente mit einem Hover-Effekt versehen werden sollen, muss das Shell Toolkit Element angepasst werden mit dem Parameter `track_hover` und `reactive`:

```ts
const box = new St.BoxLayout({ style_class: "tutorial-desklet-box", reactive: true, track_hover: true });
```

<h2 id="settings" class="h2-underlined">Settings</h2>

Die Einstellungen des Desklets werden in der `settings-schema.json` definiert.

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

Die Settings API ist [dokumentiert](https://projects.linuxmint.com/reference/git/cinnamon-tutorials/xlet-settings-ref.html). Hier die wichtigsten Typen der Settings:

- entry
- checkbox
- scale
- combobox
- spinbutton
- filechooser
- colorchooser
- datechooser

Es wird ein neuer Import benötigt und die Einstellungen müssen gebunden werden.

Hier ein einfaches Hello World-Desklet, bei dem die Schriftgröße geändert werden kann:

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

Um Bilder anzuzeigen brauchen wir Hilfsfunktionen und drei weitere Importe.

Hier eine Desklet, welches nur ein Bild anzeigt:

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

Für den Aufruf von Funktionen nach einer bestimmten Zeitspanne gibt es die Mainloop.
Mit dieser können wir einen Timeout setzen und eine Funktion übergeben, die nach dem Timeout ausgeführt wird.

Hier ein einfaches Desklet, welches alle 5 Sekunden einen Counter hochzählt:

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

Der Timeout kann auch in Millisekunden gesetzt werden:

```ts
this.timeout = Mainloop.timeout_add(300, () => this._updateCounter());
```

<h2 id="translation" class="h2-underlined">Übersetzung</h2>

Für die Übersetzung brauchen wir etwas Boilerplate:

```ts
const GLib = imports.gi.GLib;
const Gettext = imports.gettext;

const UUID = "tutorial-desklet@KopfdesDaemons";

Gettext.bindtextdomain(UUID, GLib.get_home_dir() + "/.local/share/locale");

function _(str) {
  return Gettext.dgettext(UUID, str);
}
```

Mit diesem Code können wir die Übersetzungen mit der Funktion `_()` verwenden.

Hier ein Beispielaufruf einer Übersetzung:

```ts
const label = new St.Label({ text: _("Hello World!") });
```

### Übersetzung extrahieren

Mit dem folgendem Befehl wird eine `.pot`-Datei im Ordner `po` erstellt, welche die zu übersetzenden Texte enthält:

```bash
./cinnamon-spices-makepot tutorial-desklet@KopfdesDaemons

```

Diese Datei können wir mit einem Programm wie [Poedit](https://poedit.net/) öffnen, um Übersetzungen hinzuzufügen.

Die Übersetzung speichern wir z.B. als `de.po` für die deutsche Sprache. Die `.mo`-Datei muss gelöscht werden.

Mit diesem Befehl können wir die Übersetzung installieren und testen:

```bash
./cinnamon-spices-makepot tutorial-desklet@KopfdesDaemons --install
```

Hier ein Hello World-Desklet mit Übersetzung:

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
