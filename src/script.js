'use strict';
// window.onload(validateForm());

function validateForm() {
  const form = document.getElementById('messageForm');
  console.log(form)
  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const messageInput = document.getElementById('messageInput');

  form.onsubmit(validateForm());

  if (isWhitespaceOnly(nameInput.value)) {
    return false;
  }

  if (isWhitespaceOnly(messageInput.value)) {
    messageInput.value = '';
    console.log('no valid');

    return false;
  }

  nameInput.value = '';
  messageInput.value = '';
  emailInput.value = '';

  return true;
}

function isWhitespaceOnly(str) {
  return !str.trim();
}
