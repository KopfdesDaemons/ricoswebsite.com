import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: ':lang/blog/.',
    loadComponent: () => import('./blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: ':lang/blog',
    loadComponent: () => import('./blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: ':lang/blog/page/:page/.',
    loadComponent: () => import('./blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: ':lang/blog/page/:page',
    loadComponent: () => import('./blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: ':lang/projects/page/:page/.:technologies',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: ':lang/projects/page/:page/:technologies',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: ':lang/projects/page/:page/.',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: ':lang/projects/page/:page',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: ':lang/blogpost/:fileName/.',
    loadComponent: () => import('./blog-post/blog-post.component').then((m) => m.BlogPostComponent),
  },
  {
    path: ':lang/blogpost/:fileName',
    loadComponent: () => import('./blog-post/blog-post.component').then((m) => m.BlogPostComponent),
  },
  {
    path: ':lang/privacy-policy/.',
    loadComponent: () => import('./blog-post/blog-post.component').then((m) => m.BlogPostComponent),
    data: { fileName: 'privacy-policy' },
  },
  {
    path: ':lang/privacy-policy',
    loadComponent: () => import('./blog-post/blog-post.component').then((m) => m.BlogPostComponent),
    data: { fileName: 'privacy-policy' },
  },
  {
    path: 'legal-notice/.',
    loadComponent: () => import('./legal-notice/legal-notice.component').then((m) => m.LegalNoticeComponent),
  },
  {
    path: 'legal-notice',
    loadComponent: () => import('./legal-notice/legal-notice.component').then((m) => m.LegalNoticeComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
];
