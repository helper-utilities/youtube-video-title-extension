let req;

function runCopyScript() {
	// if extension icon is clicked => inject copy script
	chrome.browserAction.onClicked.addListener((tab) => {
		console.log(tab.title, tab.url)
		chrome.tabs.executeScript(tab.id, { file: 'copy.js' });
	});
}

runCopyScript();