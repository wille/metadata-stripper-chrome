var urls = [
	"*://www.facebook.com/*",
];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
		var d = details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/);
		
		var x = document.createElement("a");
		x.href = details.url;

		// GET query string
		var path = x.pathname;
		
		// Loop through GET parameters and remove fref etc...
			
		// Replace ? with & to not confuse split()
		var params = x.search.replace("?", "&").split("&");
			
		var redirect = false;
		var first = true;
		var newpath = x.pathname;
			
		for (var i = 0; i < params.length; i++) {
			if (params[i].split("=")[0] == "fref") {
					redirect = true;
			} else if (params[i].length > 0) {
				if (first) {
						first = false;
						newpath += "?";
				} else {
					newpath += "&";
				}
					
				newpath += params[i];
			}
		}

		if (redirect) {
			return { redirectUrl: x.protocol + "//" + x.host + newpath };
		}
		
		// Return empty response, no action
        return { };
    },
    {
        urls,
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);