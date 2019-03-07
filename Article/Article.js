// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
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

