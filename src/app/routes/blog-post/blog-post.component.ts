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

        // Entferne vorhandene Meta-Tags
        this.metaS.removeTag('name="keywords"');
        this.metaS.removeTag('name="description"');
        this.metaS.removeTag('name="author"');
        this.metaS.removeTag('name="robots"');

        // Füge neue Meta-Tags hinzu
        this.metaS.addTags([
          { name: 'keywords', content: this.post.keywords },
          { name: 'description', content: this.post.description },
          { name: 'author', content: this.post.author },
          { name: 'robots', content: 'index, follow' }
        ]);
      } catch (error: any) {
        console.error('Fehler beim Laden des Beitrags:', error.message);
        this.router.navigate(['']);
      }
    }
  }
}
