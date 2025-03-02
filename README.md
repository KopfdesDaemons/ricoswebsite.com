# Portfolio Website

My portfolio website as a hobby web developer.
[www.ricoswebsite.com](https://ricoswebsite.com)

## Rendering

This website was created and pre-rendered with Angular.
The initial page load is therefore static and the browser then takes over the rendering (SPA).
Server-side rendering does not take place so that the website can be deployed without a VPS.

## Hosting

This website is hosted on GitHub Pages.
The [GitHub repository](https://github.com/KopfdesDaemons/ricoswebsite.com) is public.
To deploy the website to GitHub Pages [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) is used.

## PageSpeed Insights

![PageSpeed Insights](/images/pagespeed-english.png "PageSpeed Insights")

Due to GitHub Pages, the total blocking time is higher and the overall rating of 100 for the "performance" point is unfortunately not achieved. When using a VPS, the total blocking time is not a problem.

## Scalability

### Blog posts

The blog posts are loaded from markdown files, which contain all metadata in the header. Here's an example:

```yaml
---
title: About this Website
author: Rico
keywords:
  - Angular
  - Markdown
  - YAML
  - Prerendering
  - GitHub Pages
description: A quick insight into how this website works.
date: 5/12/24
---
```

When the page is initially called up, it is already pre-rendered. When navigating subsequently, the data is loaded via HTTP requests. Only 1 - 2 kB are loaded for the Markdown file and, if necessary, data for images.

Only one Markdown file needs to be created for a new blog post. All other data is created automatically (sitemap, list of posts for the feed and list of route parameters for pre-rendering).

### Portfoliio

Portfolio project information is loaded dynamically from a JSON file.

```json
[
  {
    "title": "BlogTube - A WordPress YouTube clone",
    "author": "Rico",
    "image": "/images/blogtube-post-screenshot.avif",
    "keywords": ["YouTube", "WordPress", "WordPress Theme"],
    "description": "BlogTube is a WordPress theme that is based on the design scheme of YouTube",
    "date": "2024-05-18",
    "fileName": "blogtube"
  }
]
```

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
