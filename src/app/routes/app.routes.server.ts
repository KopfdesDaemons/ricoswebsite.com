import { RenderMode, ServerRoute } from '@angular/ssr';
import { LanguageService } from '../services/language.service';
import { inject } from '@angular/core';
import { getPostsListRouteParams, getPostsRouteParams } from 'server/services/posts.service';
import { ProjectService } from '../services/project.service';

const getAllLangParams = async (): Promise<Record<string, string>[]> => {
  return new Promise((resolve) => {
    const languageS = inject(LanguageService);
    const languages = languageS.supportedLanguages;
    resolve(languages.map((lang) => ({ lang })));
  });
};

const getProjectsRouteParams = async (): Promise<Record<string, string>[]> => {
  const projectsPerPage = 5;
  const languageS = inject(LanguageService);
  const projectS = inject(ProjectService);
  const languages = languageS.supportedLanguages;

  const routes: { lang: string; page: string }[] = [];

  for (const lang of languages) {
    const projects = await projectS.loadProjectsFromJson(lang);
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    for (let page = 1; page <= totalPages; page++) {
      routes.push({ lang, page: page.toString() });
    }
  }

  return routes;
};

export const serverRoutes: ServerRoute[] = [
  {
    path: ':lang/blog',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getAllLangParams,
  },
  {
    path: ':lang/blog/.',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getAllLangParams,
  },
  {
    path: ':lang/blog/page/:page',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getPostsListRouteParams,
  },
  {
    path: ':lang/blog/page/:page/.',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getPostsListRouteParams,
  },
  {
    path: ':lang/blogpost/:fileName',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getPostsRouteParams,
  },
  {
    path: ':lang/blogpost/:fileName/.',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getPostsRouteParams,
  },
  {
    path: ':lang/projects/page/:page',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getProjectsRouteParams,
  },
  {
    path: ':lang/projects/page/:page/.',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getProjectsRouteParams,
  },
  {
    path: ':lang/privacy-policy/',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getAllLangParams,
  },
  {
    path: ':lang/privacy-policy/.',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: getAllLangParams,
  },
  { path: '**', renderMode: RenderMode.Prerender },
];
