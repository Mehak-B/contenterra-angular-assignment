import { Component } from '@angular/core';
import { RedditServiceService } from '../reddit-service.service';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../safe-html.pipe';

@Component({
  selector: 'app-reddit-cards',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './reddit-cards.component.html',
  styleUrl: './reddit-cards.component.scss'
})
export class RedditCardsComponent {
    posts: any[] = [];

  constructor(private redditService: RedditServiceService,
  ) {}

  ngOnInit(): void {
    this.redditService.getRedditPosts().subscribe(response => {
      this.posts = response.data.children.map((item: any) => item.data);
    });
  }

}

