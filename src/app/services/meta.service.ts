import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { PostMeta } from '../models/post';
import { environment } from 'src/environment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private router = inject(Router);
  private meta = inject(Meta);
  private title = inject(Title);

  constructor() {
    // Abonniere das NavigationStart-Ereignis
    this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe(() => {
      this.removeMetaData();
    });
  }

  private removeMetaData(): void {
    // Entferne vorhandene Meta-Tags
    this.meta.removeTag('name="keywords"');
    this.meta.removeTag('property="og:description"');
    this.meta.removeTag('property="og:author"');
    this.meta.removeTag('property="og:robots"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:url"');
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:type"');
    this.meta.removeTag('property="article:published_time"');
    this.meta.removeTag('name="description"');
  }

  updateMetaTags(postMeta: PostMeta): void {
    const tagsToAdd: any = [
      { property: 'og:title', content: postMeta.title },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: environment.baseUrl + this.router.url },
    ];

    if (postMeta.author) {
      tagsToAdd.push({ property: 'og:author', content: postMeta.author });
    }

    if (postMeta.date) {
      tagsToAdd.push({
        property: 'article:published_time',
        content: postMeta.date,
      });
    }

    if (postMeta.description) {
      tagsToAdd.push({
        property: 'og:description',
        content: postMeta.description,
      });
      tagsToAdd.push({ name: 'description', content: postMeta.description });
    }

    if (postMeta.keywords) {
      tagsToAdd.push({ name: 'keywords', content: postMeta.keywords });
    }

    if (postMeta.image) {
      tagsToAdd.push({
        property: 'og:image',
        content: environment.baseUrl + '/' + postMeta.image,
      });
    }

    this.meta.addTags(tagsToAdd);
    this.title.setTitle(postMeta.title ?? 'Ricos Website');
  }
}
