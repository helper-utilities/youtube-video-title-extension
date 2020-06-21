// check if window is loaded
if (window.location.href.includes('https://www.youtube.com/watch')) {
	if (document.readyState === 'complete') {
		let t;
		let title;

		// run an interval to make sure the title is loaded to avoid null for querySelectors.
		t = setInterval(async () => {
			console.log('interval')
			title = document.querySelector("#columns #info h1.title").textContent.trim().replace('(lyrics)', '');

			if (title) {
				// copy to clipboard if we have permission
				let permission = await navigator.permissions.query({ name: "clipboard-write" }) === 'granted' || 'prompt' ?
					window.navigator.clipboard.writeText(title) : undefined;

				// like video if not liked already (support the creator :) )
				let likeButton = document.querySelector("#top-level-buttons > ytd-toggle-button-renderer.style-scope.ytd-menu-renderer.force-icon-button");

				if (!likeButton.classList.contains('style-default-active'))
					likeButton.click();

				clearInterval(t); // clear interval if title is found

			}

		}, 100)
	};
}