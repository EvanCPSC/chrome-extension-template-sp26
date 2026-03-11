// Open popup for ech new chrome window
chrome.windows.onCreated.addListener((window) => {
  chrome.action.openPopup();
})

