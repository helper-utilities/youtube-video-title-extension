// check if window is loaded
if (document.readyState === 'complete') {
	let t;
	let title;

	// run an interval to make sure the title is loaded to avoid null for querySelectors.
	t = setInterval(async () => {
		console.log('interval')
		title = document.querySelector("#columns #info h1.title").textContent.trim().replace('(lyrics)', '');

		if (title) {
			let permission = await navigator.permissions.query({ name: "clipboard-write" }) === 'granted' || 'prompt' ?
				window.navigator.clipboard.writeText(title) : undefined;

			clearInterval(t); // clear interval if title is found

		}

	}, 100)
};