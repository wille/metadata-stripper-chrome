var host = "https://destination.com/";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
		var d = details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/);
		var path = d[1];
		
		if (path.slice(0, 1) == "/") {
			path = path.slice(1, path.length);
		}
		
        return {redirectUrl: host + path};
    },
    {
        urls: [
            "*://origin.com/*",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);