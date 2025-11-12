function FindProxyForURL(url, host) {
    var proxyDomains = [
        "icanhazip.com",
        "chase.com",
        "wellsfargo.com",
        "bankofamerica.com",
        "capitalone.com",
        "americanexpress.com",
        "pnc.com",
        "citibank.com",
        "firstcitizens.com",
        "ppbi.com",
        "1cbank.com",
        "mercury.com",
        "mbfs.com",
        "homestreet.com",
        "usbank.com",
        "enterprisebank.com",
        "bluevine.com",
        "intuit.com",
        "ftb.ca.gov",
        "id.me",
        "irs.gov",
        "sba.gov",
        "cdtfa.ca.gov",
        "edd.ca.gov",
        "drs.ct.gov",
        "sos.ca.gov",
        "calsavers.com",
        "gusto.com",
        "practicepanther.com",
        "joinarc.com",
        "joinhandshake.com",
        "bitwarden.com",
        "lastpass.com",
        "proton.me",
        "adp.com",
        "clio.com",
        "tipalti.com",
        "paychex.com",
        "paypal.com",
        "stripe.com",
        "wctfcu.com",
        "lucid.app",
        "robinhood.com",
        "auth0.com",
        "simply-easier-payments.com",
        "mailchimp.com",
        "smallpdf.com"
    ];

    var proxy = "PROXY localhost:3128";

    for (var i = 0; i < proxyDomains.length; i++) {
        if (shExpMatch(host, "*." + proxyDomains[i]) || host === proxyDomains[i]) {
            return proxy;
        }
    }
    
    return "DIRECT";
}
