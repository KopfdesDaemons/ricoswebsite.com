import { AngularNodeAppEngine, createNodeRequestHandler, isMainModule, writeResponseToNodeResponse } from '@angular/ssr/node';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { generateConfigFiles } from 'server/services/config-files.service';
import { generatePostFiles } from 'server/services/posts.service';

export async function app(): Promise<express.Express> {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const angularNodeAppEngine = new AngularNodeAppEngine();

  await generateConfigFiles();
  await generatePostFiles();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  server.get(
    '**',
    express.static(browserDistFolder, {
      maxAge: '1y',
      index: 'index.html',
    })
  );

  // All regular routes use the Angular engine
  server.get('**', express.static(browserDistFolder, { maxAge: '1y', index: 'index.html' }));

  server.get('**', (req, res, next) => {
    console.log('request', req.url);

    angularNodeAppEngine
      .handle(req, { server: 'express' })
      .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
      .catch(next);
  });

  return server;
}

const server = await app();

if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
export const reqHandler = createNodeRequestHandler(server);
