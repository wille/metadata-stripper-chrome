chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
		var d = details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/);
		
		// GET query string
		var path = d[1];
		
		if (path.slice(0, 1) == "/") {
			path = path.slice(1, path.length);
		}
		
		// protocol+hostname
		var url = details.url.slice(0, details.url.length - d[1].length);
		
		if (url === "https://www.facebook.com") {
			// Loop through GET parameters and remove fref etc...
		}
		
        return {redirectUrl: url + path};
    },
    {
        urls: [
            "*://www.facebook.com/*",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);