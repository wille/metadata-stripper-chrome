import WebRequestBodyDetails = chrome.webRequest.WebRequestBodyDetails;

chrome.webRequest.onBeforeRequest.addListener((details: WebRequestBodyDetails) => {
    // Create URL object to get properties like search, pathname etc
    let url = new URL(details.url);

    // Loop through GET parameters and remove fref etc...

    // Replace ? with & to not confuse split()
    let params = url.search.replace("?", "&").split("&");

    let redirect = false;
    let first = true;
    let newpath = url.pathname;

    for (let parameter of params) {
        // Get key of this parameter, might be keyless
        let key = parameter.indexOf("=") !== -1 ? parameter.split("=")[0] : parameter;

        // If we should block (redirect to site without any GET parameters)
        let block = false;

        for (let rule of block_params) {
            // Check if rule is valid for this URL
            // Supports wildcards
            // There is a global rule '*', so this should always be valid
            let hasRules = new RegExp("^" + rule.host.replace("*", ".*") + "$").test(url.hostname);

            if (hasRules) {
                for (let param of rule.params) {
                    if (key === param) {
                        block = true;
                        break;
                    }
                }
            }
        }

        // found a match, we'll rewrite this request
        // continue the loop to strip more unneeded parameters
        if (block) {
            redirect = true;
        } else if (parameter.length > 0) {
            // Keep rebuilding URL
            if (first) {
                first = false;
                newpath += "?";
            } else {
                newpath += "&";
            }

            newpath += parameter;
        }
    }

    if (redirect) {
        return {
            // url.protocol is always suffixed by ":"
            redirectUrl: url.protocol + "//" + url.host + newpath
        };
    }
},
    {
        types: [
            "main_frame",
            "sub_frame",
            "stylesheet",
            "script", "image",
            "object",
            "xmlhttprequest",
            "other"
        ],
        urls: [
            "<all_urls>"
        ]
    },
    ["blocking"]
);
