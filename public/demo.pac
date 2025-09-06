function FindProxyForURL(url, host) {
    var proxyDomains = [
        "icanhazip.com",
	      "smallpdf.com"
    ];

    var proxy = "PROXY 127.0.0.1:3128";

    for (var i = 0; i < proxyDomains.length; i++) {
        if (shExpMatch(host, "*." + proxyDomains[i]) || host === proxyDomains[i]) {
            return proxy;
        }
    }
    
    return "DIRECT";
}
