import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HnNewsServiceService {

  constructor(private http: HttpClient) { }

  getCommentTree(commentId): Observable<any> {
    return this.http
      .get(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`)
      .pipe(map(data => data));
}
}
