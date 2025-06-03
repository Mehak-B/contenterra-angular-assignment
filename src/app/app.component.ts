import { Component } from '@angular/core';
import { RedditCardsComponent } from "./reddit-cards/reddit-cards.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RedditCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'contenterra-angular-assignment';
}
