import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../models/article.model';
import {MatCardModule} from '@angular/material/card';
import {MatAnchor, MatIconButton} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIcon} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-article-item',
  imports: [MatCardModule, MatAnchor, MatIconButton, MatIcon, MatSnackBarModule, DatePipe],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent implements OnInit {

  @Input() article!: Article;
  constructor() {
  }
  ngOnInit(): void {
  }
}
