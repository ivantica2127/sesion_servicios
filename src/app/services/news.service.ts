import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Article, NewsResponse} from '../models/article.model';
import {Observable, map} from 'rxjs';

const  apiKey=environment.apiKey

@Injectable({
  providedIn: 'root'
})
export class NewsService {
 //Lo inyectamos en el constructor
  constructor(private http: HttpClient) {
  }


 getTopHeadlines():Observable<Article[]>{
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&pageSize=50&category=business`,{
      params: {
        apiKey:apiKey
      }
    }).pipe(
      map( ({articles})=> articles ),
    );
  }
}
