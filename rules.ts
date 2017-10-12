interface Rule {
    host: string;
    params: string[];
}

var block_params: Rule[] = [
    {
        params: ["ref", "source"],
        host: "www.reddit.com"
    },
    {
        params: ["fref", "pnref", "ref", "__mref", "source", "hc_location"],
        host: "www.facebook.com"
    },
    {
        params: ["mt"],
        host: "http://www.theregister.co.uk/"
    },
    {
        params: ["feature", "app"],
        host: "www.youtube.com"
    },
    {
        params: ["ref_", "pf_rd_m", "pf_rd_p", "pf_rd_r", "pf_rd_s", "pf_rd_i", "pf_rd_t"],
        host: "www.imdb.com"
    },
    {
        params: ["src", "ref_src", "lang"],
        host: "twitter.com"
    },
    {
        params: ["trk"],
        host: "*linkedin.com"
    },
    {
        params: ["cc"],
        host: "www.bing.com"
    },
    {
        params: ["ocid"],
        host: "www.msn.com"
    },
    {
        params: ["roken2", "_trksid", "_trkparms"],
        host: "www.ebay.com"
    },
    {
        params: ["from", "account", "campaign", "post_id", "Paid_support", "linkId", "ref", "src"],
        host: "www.yahoo.com"
    },
    {
        params: ["mbid"],
        host: "www.wired.com"
    },
    {
        params: ["utm_term", "bftw", "bffbmain"],
        host: "www.buzzfeed.com"
    },
    {
        params: ["ocid", "ns_mchannel", "ns_source", "ns_campaign", "ns_linkname"],
        host: "www.bbc.com"
    },
    {
        params: ["smid", "smtyp"],
        host: "www.nytimes.com"
    },
    {
        params: ["ito"],
        host: "www.dailymail.co.uk"
    },
    {
        params: ["scid", "adbpl", "adbpr", "adbid"],
        host: "*adobe.com"
    },
    {
        params: ["utm_source", "utm_campaign", "utm_medium", "utm_content"],
        host: "*"
    },
];
