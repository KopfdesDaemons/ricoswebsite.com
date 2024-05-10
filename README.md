## Portfolio Website

My portfolio website as a hobby web developer.
[www.ricoswebsite.com](https://ricoswebsite.com)

## Development

start angular live server and start development
```bash
ng serve --host 0.0.0.0 --disable-host-check
```
prerender website

```bash
ng run ricoswebsite.com:prerender
```

start http-server to testing the prerendered website

```bash
cd ricoswebsite.com/browser/
http-server
```

deploy to github-pages
```bash
npx angular-cli-ghpages --dir=dist/ricoswebsite.com/browser --cname=ricoswebsite.com
```