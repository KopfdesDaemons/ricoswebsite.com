import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: any;
  content: any;
  image: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private postS: PostService,
    private metaS: Meta,
    private router: Router
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
          { name: 'og:title', content: this.post.title },
          { name: 'og:image', content: absoluteImageUrl },
          { name: 'og:author', content: this.post.author },
          { name: 'og:description', content: this.post.description },
          { name: 'og:keywords', content: this.post.keywords },
          { name: 'og:type', content: 'article' },
          { name: 'og:url', content: window.location },
          { name: 'og:robots', content: 'index, follow' }
          
        ]);
      } catch (error: any) {
        console.error('Fehler beim Laden des Beitrags:', error.message);
        this.router.navigate(['']);
      }
    }
  }
}
