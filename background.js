var block_params = [
	{
		params: [ "ref", "source" ],
		host: "www.reddit.com"
	},
	{
		params: [ "fref", "pnref", "ref", "__mref", "source", "hc_location" ],
		host: "www.facebook.com"
	},
		{
		params: [ "mt" ],
		host: "http://www.theregister.co.uk/"
	},
	{
		params: [ "feature", "app" ],
		host: "www.youtube.com"
	},
	{
		params: [ "ref_", "pf_rd_m", "pf_rd_p", "pf_rd_r", "pf_rd_s", "pf_rd_i", "pf_rd_t" ],
		host: "www.imdb.com"
	},
	{
		params: [ "src", "ref_src", "lang" ],
		host: "twitter.com"
	},
	{
		params: [ "trk" ],
		host: "*linkedin.com"
	},
	{
		params: [ "cc" ],
		host: "www.bing.com"
	},
	{
		params: [ "ocid" ],
		host: "www.msn.com"
	},
	{
		params: [ "roken2", "_trksid", "_trkparms" ],
		host: "www.ebay.com"
	},
	{
		params: [ "from", "account", "campaign", "post_id", "Paid_support", "linkId", "ref", "src" ],
		host: "www.yahoo.com"
	},
		{
		params: [ "mbid" ],
		host: "www.wired.com"
	},
	{
		params: [ "utm_term", "bftw", "bffbmain" ],
		host: "www.buzzfeed.com"
	},
	{
		params: [ "ocid", "ns_mchannel", "ns_source", "ns_campaign", "ns_linkname" ],
		host: "www.bbc.com"
	},
	{
		params: [ "smid", "smtyp" ],
		host: "www.nytimes.com"
	},
	{
		params: [ "ito" ],
		host: "www.dailymail.co.uk"
	},
	{
		params: [ "scid", "adbpl", "adbpr", "adbid" ],
		host: "*adobe.com"
	},
	{
		params: [ "utm_source", "utm_campaign", "utm_medium", "utm_content" ],
		host: "*"
	},
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
				var host_allowed = new RegExp("^" + block_params[l].host.replace("*", ".*") + "$").test(x.hostname);
				
				if (host_allowed) {
					for (var j = 0; j < block_params[l].params.length; j++) {
						if (key == block_params[l].params[j]) {
							block = true;
							break;
						}
					}
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
