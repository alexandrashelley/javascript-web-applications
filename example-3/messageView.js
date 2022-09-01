class MessageView {
  constructor() {
    // Assign elements on page
    this.mainContainerEl = document.querySelector('#main-container');
    this.messageInputEl = document.querySelector('#message-input');
    this.showButtonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

    // Creating div
    this.div = document.createElement('div');
    this.div.id = 'message';

    // Creating buttons
    this.showButtonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    
    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
   });
  }

  displayMessage() {
    this.div.textContent = this.messageInputEl.value;
    this.mainContainerEl.append(this.div);
    console.log('Thanks for clicking me!');
  }

  hideMessage() {
    const removeMessage = document.querySelector('#message');

    removeMessage.remove();
  }
}

module.exports = MessageView;