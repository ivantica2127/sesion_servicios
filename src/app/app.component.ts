import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArticleItemComponent} from './components/article-item/article-item.component';
import {ArticleListComponent} from './components/article-list/article-list.component';
import {HeaderComponent} from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleListComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
