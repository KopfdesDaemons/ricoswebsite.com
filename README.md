# Portfolio Website

My portfolio website as a hobby web developer.
[www.ricoswebsite.com](https://ricoswebsite.com)

## Rendering

This website was built using Angular and pre-rendered using Angular Prerenderer.
The initial page view is static and then the website functions like a single-page application.
Static Site Generation (SSG) with hydration is used.

## Hosting

This website is hosted on GitHub Pages.
The [GitHub repository](https://github.com/KopfdesDaemons/ricoswebsite.com) is public.
To deploy the website to GitHub Pages [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) is used.

## Scalability

### Blog posts

The blog posts are loaded from markdown files, which contain all metadata in the header. Here's an example:

```yaml
---
title: About this Website
author: Rico
keywords:
  - angular
  - markdown
  - YAML
description: A quick insight into how this website works.
date: 5/12/24
---
```

When the page is initially accessed, the data has already been pre-rendered. When navigating after the initial page view, the data is loaded via http requests.

### Portfoliio

Portfolio project information is loaded dynamically from a JSON file.

    "projects": [
    {
        "name": "BlogTube",
        "description": "A WordPress theme that is based on the design scheme of YouTube",
        "image": "\\images\\blogtube.avif",
        "features": [
            "infinite scroll feed",
            "custom sidemenu",
            "custom primary color",
            "custom font"
        ],
        "projectURL": "https://wordpress.org/themes/blogtube/",
        "githubURL": "https://github.com/KopfdesDaemons/blogtube",
        "technologies": [
            "WordPress",
            "PHP",
            "JavaScript"
        ]
    },]

## Development

start angular dev server and start development

```bash
ng serve
```

## Deployment

optionally build the project before deployment for testing (ng deploy also builds the project)

```bash
ng build
```

deploy prerendered website

```bash
ng deploy
```
