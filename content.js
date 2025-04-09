let selection = ''

document.addEventListener('mouseup', () => {
  selection = window.getSelection().toString().trim()
})

chrome.runtime.onMessage.addListener((messenger, _sender, response) =>  {
  if (messenger.type === 'getSelection') {
    response({ text: selection })
  }
})