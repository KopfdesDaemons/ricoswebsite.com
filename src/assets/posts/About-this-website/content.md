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
Blog posts are loaded from a folder structure containing Markdown, JSON, and image files. Title, description, and meta tags are loaded from the corresponding JSON files.

    {
        "title": "About this Website",
        "author": "Rico",
        "hasImage": "false",
        "keywords": [
            "angular",
            "markdown"
        ],
        "description": "A quick insight into how this website works.",
        "date": "5/12/24"
    }

### Portfoliio

Portfolio project information is loaded dynamically from a JSON file.

    "projects": [
    {
        "name": "BlogTube",
        "description": "A WordPress theme that is based on the design scheme of YouTube",
        "image": "assets\\images\\blogtube.avif",
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