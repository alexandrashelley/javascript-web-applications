/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('clicks the button', () => {
    const view = new MessageView();

    const inputEl = document.querySelector('#message-input');
    inputEl.value = 'Test'

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').textContent).toBe('Test');
  });

  it('hides click message', () => {
    const view = new MessageView();

    const showButtonEl = document.querySelector('#show-message-button');
    showButtonEl.click();
    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});