import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditServiceService {

  private apiUrl = 'https://www.reddit.com/r/Angular2.json';

  constructor(private http: HttpClient) {}

  getRedditPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
