// Configuration for the Editor's Draft of DOM Parsing and Serialization

var respecConfig = {
    subtitle: "DOMParser, XMLSerializer, innerHTML, and similar APIs",
	specStatus: "ED",
    publishDate: "2014-06-05",
    editors: [
	    {
			name: "Travis Leithead", 
            company: "Microsoft",
            mailto: "travis.leithead@microsoft.com",
            companyURL: "http://www.microsoft.com"
		}
	],
	edDraftURI: "https://dvcs.w3.org/hg/innerhtml/raw-file/tip/index.html",
	previousPublishDate: "2013-12-10",
    previousMaturity: "LC",
    noIDLIn:  true,
    inlineCSS:  true,
    //noRecTrack:  true,
    shortName:  "DOM-Parsing",
    wg:         ["Web Applications Working Group"],
    wgURI:    ["http://www.w3.org/2008/webapps/"],
    wgPublicList: "www-dom",
    wgPatentURI:  ["http://www.w3.org/2004/01/pp-impl/42538/status"],
    subjectPrefix: "DOM-Parsing",
    testSuiteURI: "http://w3c-test.org/domparsing/",

    otherLinks: [{
        key: 'Participate',
        data: [{
                value: 'We are on Hg.',
                href: 'https://dvcs.w3.org/hg/innerhtml/'
            }, {
                value: 'Bug list.',
                href: 'https://www.w3.org/Bugs/Public/buglist.cgi?component=DOM%20Parsing%20and%20Serialization&list_id=44989&product=WebAppsWG&resolution=---'
            }, {
                value: 'File a bug.',
                href: 'https://www.w3.org/Bugs/Public/enter_bug.cgi?product=WebAppsWG&component=DOM%20Parsing%20and%20Serialization'
            }, {
                value: 'Commit history.',
                href: 'https://dvcs.w3.org/hg/innerhtml/shortlog/'
            }, {
                value: 'Mailing list.',
                href: 'http://lists.w3.org/Archives/Public/www-dom/'
        }]
    }],
};
