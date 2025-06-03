import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../models/article.model';
import {NewsService} from '../../services/news.service';
import {ArticleItemComponent} from '../article-item/article-item.component';

@Component({
  selector: 'app-article-list',
  imports: [ ArticleItemComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {

  @Input() articles!: Article[];

  constructor(private newsService: NewsService) {
  }
  ngOnInit(): void {
    this.newsService.getTopHeadlines().subscribe(articles => {
      this.articles = articles;
    });
  }
}
