import { Component } from '@angular/core';
import { Article } from './models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: 'ngapp';
  newTitle: string = '';
  newLink: string = '';
  newVotes: number = 0;
  public article: Article = new Article();
  public articles: Article[] = [];

  constructor() {}

  addArticle(e) {
    e.preventDefault();
    this.newVotes = Number((Math.random() * 10).toFixed(0));
    this.article = new Article(this.newTitle, this.newLink, this.newVotes);
    this.articles.push(this.article);
    this.reset();
  }

  reset() {
    this.newTitle = '';
    this.newLink = '';
    this.newVotes = 0;
  }

  isEmpty() {
    return this.newTitle == '' || this.newLink == '';
  }

  sortedArticles(): Article[] {
    return this.articles.sort(
      (a: Article, b: Article) => b.getVotes() - a.getVotes()
    );
  }
}
