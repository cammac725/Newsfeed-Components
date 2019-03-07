
class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.textContent = "expand";
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }
  expandArticle() {
    this.domElement.classList.toggle('article-open');
    this.domElement.classList.toggle('order-top');
  }
}

let articles = document.querySelectorAll('.article');
articles.forEach(function (article) {
  return new Article(article);
})

const chosenArticle = document.querySelectorAll('.article');
chosenArticle.forEach(function (item) {
  item.addEventListener('mouseover', () => {
    TweenMax.to(item, 0.5, { scale: 1.05 });
  });
});
chosenArticle.forEach(function (item) {
  item.addEventListener('mouseleave', () => {
    TweenMax.to(item, 0.5, { scale: 1 });
  });
});

