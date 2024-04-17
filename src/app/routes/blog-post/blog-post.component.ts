import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogPostComponent implements OnInit {
  post: any;
  content: any;
  image: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private postS: PostService,
    private metaS: Meta,
    private router: Router,
  ) { }

  async ngOnInit(): Promise<void> {
    // Lese den Titel des Beitrags aus der URL
    const title = this.route.snapshot.paramMap.get('title');
    if (title) {
      console.log('Versuche Post mit folgendem Titel zu laden: ' + title);
      
      try {
        const data = await lastValueFrom(this.postS.getPost(title));

        this.post = data.post;
        this.content = data.content;
        this.image = data.image;

        // Generiere die vollständige URL des Bildes
        const absoluteImageUrl = window.location.origin + '/' + this.image;

        // Füge neue Meta-Tags hinzu
        this.metaS.addTags([
          { property: 'og:title', content: this.post.title },
          { property: 'og:image', content: absoluteImageUrl },
          { property: 'og:author', content: this.post.author },
          { property: 'og:description', content: this.post.description },
          { property: 'og:keywords', content: this.post.keywords },
          { property: 'og:type', content: 'article' },
          { property: 'og:url', content: window.location },
          { property: 'og:robots', content: 'index, follow' }
        ]);
      } catch (error: any) {
        console.error('Fehler beim Laden des Beitrags:', error.message);
        this.router.navigate(['']);
      }
    }
  }
}
