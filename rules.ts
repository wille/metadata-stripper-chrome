interface Rule {
    host: string;
    params: string[];
}

const rules: Rule[] = [
    {
        host: "www.reddit.com",
        params: [
            "ref",
            "source"
        ]
    },
    {
        host: "www.facebook.com",
        params: [
            "fref",
            "pnref",
            "ref",
            "__mref",
            "source",
            "hc_location"
        ]
    },
    {
        host: "http://www.theregister.co.uk/",
        params: [
            "mt"
        ]
    },
    {
        host: "www.youtube.com",
        params: [
            "feature",
            "app"
        ]
    },
    {
        host: "www.imdb.com",
        params: [
            "ref_",
            "pf_rd_m",
            "pf_rd_p",
            "pf_rd_r",
            "pf_rd_s",
            "pf_rd_i",
            "pf_rd_t"
        ]
    },
    {
        host: "twitter.com",
        params: [
            "src",
            "ref_src",
            "lang"]
    },
    {
        host: "*linkedin.com",
        params: [
            "trk"
        ]
    },
    {
        host: "www.bing.com",
        params: [
            "cc"
        ]
    },
    {
        host: "www.msn.com",
        params: [
            "ocid"
        ]
    },
    {
        host: "www.ebay.com",
        params: [
            "roken2",
            "_trksid",
            "_trkparms"]
    },
    {
        host: "www.yahoo.com",
        params: [
            "from",
            "account",
            "campaign",
            "post_id",
            "Paid_support",
            "linkId",
            "ref",
            "src"]
    },
    {
        host: "www.wired.com",
        params: [
            "mbid"
        ]
    },
    {
        host: "www.buzzfeed.com",
        params: [
            "utm_term",
            "bftw",
            "bffbmain"
        ]
    },
    {
        host: "www.bbc.com",
        params: [
            "ocid",
            "ns_mchannel",
            "ns_source",
            "ns_campaign",
            "ns_linkname"
        ]
    },
    {
        host: "www.nytimes.com",
        params: [
            "smid",
            "smtyp"
        ]
    },
    {
        host: "www.dailymail.co.uk",
        params: [
            "ito"
        ]
    },
    {
        host: "*adobe.com",
        params: [
            "scid",
            "adbpl",
            "adbpr",
            "adbid"
        ]
    },
    {
        host: "*",
        params: [
            "utm_source",
            "utm_campaign",
            "utm_medium",
            "utm_content"
        ]
    },
];
