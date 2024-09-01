import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./routes/home/home.component').then(m => m.HomeComponent) },
    { path: 'legal-notice/.', loadComponent: () => import('./routes/legal-notice/legal-notice.component').then(m => m.LegalNoticeComponent) },
    { path: 'legal-notice', loadComponent: () => import('./routes/legal-notice/legal-notice.component').then(m => m.LegalNoticeComponent) },

    { path: ':lang/.', loadComponent: () => import('./routes/home/home.component').then(m => m.HomeComponent) },
    { path: ':lang', loadComponent: () => import('./routes/home/home.component').then(m => m.HomeComponent) },

    { path: ':lang/blog/.', loadComponent: () => import('./routes/blog/blog.component').then(m => m.BlogComponent) },
    { path: ':lang/blog', loadComponent: () => import('./routes/blog/blog.component').then(m => m.BlogComponent) },

    { path: ':lang/blog/page/:page/.', loadComponent: () => import('./routes/blog/blog.component').then(m => m.BlogComponent) },
    { path: ':lang/blog/page/:page', loadComponent: () => import('./routes/blog/blog.component').then(m => m.BlogComponent) },

    { path: ':lang/projects/page/:page/:technologies', loadComponent: () => import('./routes/home/home.component').then(m => m.HomeComponent) },

    { path: ':lang/blogpost/:fileName/.', loadComponent: () => import('./routes/blog-post/blog-post.component').then(m => m.BlogPostComponent) },
    { path: ':lang/blogpost/:fileName', loadComponent: () => import('./routes/blog-post/blog-post.component').then(m => m.BlogPostComponent) },

    { path: ':lang/privacy-policy/.', loadComponent: () => import('./routes/blog-post/blog-post.component').then(m => m.BlogPostComponent), data: { fileName: 'privacy-policy' } },
    { path: ':lang/privacy-policy', loadComponent: () => import('./routes/blog-post/blog-post.component').then(m => m.BlogPostComponent), data: { fileName: 'privacy-policy' } },

    { path: '**', loadComponent: () => import('./routes/home/home.component').then(m => m.HomeComponent) },
];