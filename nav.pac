function FindProxyForURL(url, host) {
    var proxyDomains = [
        "icanhazip.com",
        "brex.com",
        "auth0.com",
        "wellsfargo.com",
        "stripe.com",
        "firstrepublic.com",
        "americanexpress.com",
        "homestreet.com",
        "mercury.com",
        "casepeer.com",
        "td.com",
        "bankofamerica.com",
        "chase.com",
        "capitalone.com",
        "paypal.com",
        "pnc.com",
        "td.com",
        "ftb.ca.gov",
        "id.me",
	      "sba.gov"
    ];

    var proxy = "PROXY localhost:3128";

    for (var i = 0; i < proxyDomains.length; i++) {
        if (shExpMatch(host, "*." + proxyDomains[i]) || host === proxyDomains[i]) {
            return proxy;
        }
    }
    
    return "DIRECT";
}
