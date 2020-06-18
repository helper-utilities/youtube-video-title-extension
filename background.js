let req;

// if extension icon is clicked => inject copy script
chrome.browserAction.onClicked.addListener((tab) => {
	console.log(tab.title)
	chrome.tabs.executeScript(tab.id, { file: 'copy.js' });
});