export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title?: string, link?: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes;
  }

  getTitle = (): string => this.title;

  getLink = (): string => this.link;

  getVotes = (): number => this.votes;

  setTitle = (title) => (this.title = title);
  setLink = (link) => (this.link = link);
  setVotes = (votes) => (this.votes = votes);

  voteUp = () => this.votes++;
  voteDown = () => this.votes--;
}
