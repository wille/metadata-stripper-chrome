var block_params = [
	// facebook
	"fref",
	"ref",
	
	// youtube
	"feature",

	// imdb
	"ref_", 
	"pf_rd_m",
	"pf_rd_p",
	"pf_rd_r",
	"pf_rd_s",
	"pf_rd_i",
	"pf_rd_t",
	
	// twitter
	"src",
	
	// urchen tracking module
	"utm_source",
	"utm_campaign",
	"utm_medium",
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
			var key = params[i].split("=")[0];
			var block = false;
			
			for (var l = 0; l < block_params.length; l++) {
				if (key == block_params[l]) {
					block = true;
					break;
				}
			}
			
			if (block) {
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
        urls: [
			"<all_urls>"
		],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
