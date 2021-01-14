// check if window is loaded
if (window.location.href.includes('https://www.youtube.com/watch')) {
	if (document.readyState === 'complete') {
		let t;
		let title;

		// run an interval to make sure the title is loaded to avoid null for querySelectors.
		t = setInterval(async () => {
			title = document.querySelector("#columns #info h1.title")
				.textContent.trim()
				.replace(/ \([\s\S][^\-]*\)/gi, '') // remove parantheses text
				.replace(/ \[[\s\S][^\-]*\]/gi, '') // remove bracket text
				.replace(/&[\s\S][^\-]*/gi, '') // remove & artists;

			if (title) {
				// copy to clipboard if we have permission
				if (await navigator.permissions.query({ name: "clipboard-write" }) === 'granted' || 'prompt')
					window.navigator.clipboard.writeText(title);

				// like video if not liked already (support the creator :) )
				let likeButton = document.querySelector("#top-level-buttons > ytd-toggle-button-renderer.style-scope.ytd-menu-renderer.force-icon-button");

				if (!likeButton.classList.contains('style-default-active'))
					likeButton.click();

				clearInterval(t); // clear interval if title is found

			}

		}, 100)
	};
}