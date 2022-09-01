class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    let p = document.createElement('p');
    p.textContent = 'This paragraph has been dynamically added by JavaScript!';
    this.mainContainerEl.append(p);
  }

  clearParagraphs() {
    const elementToRemove = document.querySelectorAll('p');

    elementToRemove.forEach((paragraph) => {
      paragraph.remove();
    });
  }
}

module.exports = View;