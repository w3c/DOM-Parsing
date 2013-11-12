// Configuration for the Editor's Draft of DOM Parsing and Serialization

var respecConfig = {
    subtitle: "DOMParser, XMLSerializer, innerHTML, and similar APIs",
	specStatus: "ED",
    editors: [
	    {
			name: "Travis Leithead", 
            company: "Microsoft",
            mailto: "travis.leithead@microsoft.com",
            companyURL: "http://www.microsoft.com"
		},
        {
            name: "Ms2ger",
            company: "Mozilla",
            companyURL: "http://www.mozilla.org",
            note: "WHATWG Living Standard version"
        }
	],
    //publishDate:  "2012-09-20",
	edDraftURI: "http://dvcs.w3.org/hg/innerhtml/raw-file/tip/index.html",
	previousPublishDate: "2012-09-20",
    previousMaturity: "2012-09-20",
    otherLinks: [
        {
            key: "WHATWG Living Standard",
            data: [{ value: "http://domparsing.spec.whatwg.org/", href: "http://domparsing.spec.whatwg.org/"}]
        }
    ],
    noIDLIn:  true,
    inlineCSS:  true,
    //noRecTrack:  true,
    shortName:  "DOM-Parsing",
    wg:         ["Web Applications Working Group"],
    wgURI:    ["http://www.w3.org/2008/webapps/"],
    wgPublicList: "www-dom",
    wgPatentURI:  ["http://www.w3.org/2004/01/pp-impl/42538/status"],
    subjectPrefix: "DOM-Parsing",
    testSuiteURI: "https://github.com/whatwg/domparsing/tree/master/tests"
};