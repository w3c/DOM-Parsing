// Configuration for the Editor's Draft of DOM Parsing and Serialization

var respecConfig = {
  subtitle: "DOMParser, XMLSerializer, innerHTML, and similar APIs",
  specStatus: "ED",
  editors: [
    { name: "Travis Leithead", company: "Microsoft", mailto: "travis.leithead@microsoft.com", companyURL: "http://www.microsoft.com", w3cid: "40117" }
  ],
  edDraftURI: "https://w3c.github.io/DOM-Parsing/",
  xref: "web-platform",
  //format: "markdown",
  shortName:  "DOM-Parsing",
  wg:         ["Web Platform Working Group"],
  group: "wg/webapps",
  wgURI:    ["https://www.w3.org/WebPlatform/WG/"],
  license: "w3c-software-doc",
  wgPublicList: "www-dom",
  wgPatentURI:  ["https://www.w3.org/2004/01/pp-impl/83482/status"],
  subjectPrefix: "DOM-Parsing",
  github: "w3c/DOM-Parsing",
  otherLinks: [{
    key: "Test Suites", data: [
      { href: "http://wpt.live/domparsing/" },
      { href: "http://wpt.live/html/syntax/" }
    ]}, {
    key: "Participate", data: [
      { value: 'Bugzilla Bug list.', href: 'https://www.w3.org/Bugs/Public/buglist.cgi?component=DOM%20Parsing%20and%20Serialization&list_id=44989&product=WebAppsWG&resolution=---' },
      { value: 'Mailing list.',      href: 'http://lists.w3.org/Archives/Public/www-dom/' }
    ]}
  ]
};
