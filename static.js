class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

let articles = [
  new Article('HTML', new Date(2019,1,1)),
  new Article('CSS', new Date(2019,0,1)),
  new Article('JS', new Date(2019,11,1))
];

articles.sort(Article.compare);
for (let i = 0; i< articles.length; i++) {
  console.log(articles[i].title);
}
