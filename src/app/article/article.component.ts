import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Article } from '../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  arrowUp = faArrowUp;
  arrowDown = faArrowDown;

  constructor() {}

  ngOnInit(): void {}

  voteUp(e) {
    e.preventDefault();
    this.article.voteUp();
  }

  voteDown(e) {
    e.preventDefault();
    if (this.article.getVotes() <= 0) return;
    this.article.voteDown();
  }
}
