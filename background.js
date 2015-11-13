chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
		var d = details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/);
		
		// GET query string
		var path = d[1];
		
		
		// protocol+hostname
		var url = details.url.slice(0, details.url.length - d[1].length);
		
		if (path.slice(0, 1) == "/" && url.slice(url.length - 1, url.length) == "/") {
			path = path.slice(1, path.length);
		}
		
		if (url === "https://www.facebook.com" && path.indexOf("?") != -1) {
			// Loop through GET parameters and remove fref etc...
			
			// Replace ? with & to not confuse split()
			var params = path.slice(path.indexOf("?")).replace("?", "&").split("&");
			
			
			var redirect = false;
			
			var newpath = path.slice(0, path.indexOf("?") + 1);
			for (var i = 0; i < params.length; i++) {
				if (params[i] == "fref=ts") {
					redirect = true;
				} else {
					newpath += params[i];
				}
			}
			
			if (redirect) {
				return {redirectUrl: url + newpath };
			}
		}
		
		
		// Return empty response, no action
        return { };
    },
    {
        urls: [
            "*://www.facebook.com/*",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);