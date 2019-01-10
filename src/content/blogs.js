import React from 'react'
import { Link } from 'react-router-dom'
import {
  Image
} from 'semantic-ui-react'

function jumpToTop(){
  window.scrollTo(0, 0)
}

export default [{
  title: 'Protect Your Organization With A Security Risk Assessment',
  date: 'January 2019',
  author: 'Michael Wetherald',
  snippet: 'A security risk assessment is a crucial step for mitigating the cyber security risks in your organization. Without identifying and addressing the risks in your environment, you have no chance to prevent a catastrophic...',
  path: '/blog/protect-your-org-risk-assessment',
  content: (<div>
    
  </div>)
},{
  title: 'Hacking Explained: Man In The Middle Attacks',
  date: 'January 2019',
  author: 'Jose Barrientos',
  snippet: 'You may have heard that using public WiFi is dangerous. Security Engineer and Co-Founder Jose Barrientos explains how criminals can exploit victims...',
  path: '/blog/hacking-explained-man-in-the-middle',
  content: (<div>

  </div>)
},{
  title: 'Hacking Explained: URL Spoofing Trick',
  date: 'December 2018',
  author: 'Michael Wetherald',
  snippet: 'This simple but effective URL spoofing trick can fool even the most security conscious users into believing they are on a legitimate webiste...',
  path: '/blog/hacking-explained-url-spoofing-trick',
  content: (<div>
    <p>When a user loads an https link in Google Chrome, Mozilla Firefox, Microsoft Edge, or Internet Explorer it shows a nice green secure lock and protocol (https) in the url:</p>
    <img className="article-img" src="/images/blog/url-spoof/url-https.jpg" alt="https url in google chrome"/>
    <p>However when you load an http url it trims the protocol from the url bar:</p>
    <img className="article-img" src="/images/blog/url-spoof/url-http.jpg" alt="http url in google chrome"/>
    <p>This opens up the opportunity for a subtle trick for url spoofing in Chrome. What if we use https as the domain and put the domain we’re spoofing in the path like this?</p>
    <img className="article-img" src="/images/blog/url-spoof/url-spoofed.jpg" alt="http://https//www.google.com loaded in google chrome with http:// trimmed from the beginning"/>
    <p>We can have the browser render pages that include https in the url bar and may appear legitimate to the less security-conscious (or just less conscious) user.</p>
    <img className="article-img" src="/images/blog/url-spoof/google-loaded.jpg" alt="google.com loaded in our spoofed url http://https//www.google.com"/>
    <p>Check out my other articles describing <Link to="/blog/hacking-explained-arp-spoofing" onClick={jumpToTop}>ARP Spoofing</Link> and <Link to="/blog/hacking-explained-dns-spoofing" onClick={jumpToTop}>DNS Spoofing</Link> which demonstrate how one would be in a position to utilize this trick.</p>
    <p>Here’s a demonstration of how this trick can be used to generate a pretty convincing victim scenario:</p>
    <img className="article-img" src="/images/blog/url-spoof/copycat-demo.gif" alt="GIF demonstration of someone navigating through several different pages using this spoofed url trick"/>
    <p>I’ve utilized this trick in the development version of my universal MITM tool <a href="https://github.com/compewter/copycat" target="_blank" rel="noopener noreferrer">CopyCat</a>. Once that’s a little more stable I’ll be releasing the latest more powerful version as well as a full writeup on how it works.</p>
    <p>I haven’t thought of any legitimate reasons for these web browser developers not to show the protocol in the url bar as they do with https. But if they have good reasons to do so, they should be weighed against this potential attack.</p>
  </div>)
},{
  title: 'Hacking Explained: DNS Spoofing',
  date: 'November 2018',
  author: 'Michael Wetherald',
  snippet: 'What is DNS and DNS Spoofing? Security Engineer and Co-Founder Michael Wetherald gives a basic explanation of DNS and how it can be spoofed in order to...',
  path: '/blog/hacking-explained-dns-spoofing',
  content: (<div>
    <p>The <b>Domain Name System (DNS)</b> is generally used to map domain names and IP addresses. For example, let’s consider the following network configuration:</p>
    <Image centered className="article-img" src="/images/blog/dns-spoof/config.jpg" alt="example network configuration with two clients 'alice' and 'bob' connected to an access point which acts as a gateway to the internet"/>
    <p>If Alice wants to request the content of https://www.google.com in her web browser, the request needs to be sent to an IP address corresponding to one of Google’s web servers. If Alice hasn’t previously saved (cached) an IP address for Google.com’s web server, she will need to make a DNS query for the IP address assigned to Google.com. Which DNS server to use can be set manually on the client, but for our example let’s assume Alice hasn’t configured any. Most clients will use the DNS server as advertised by the Access Point that assigned them an IP address.</p>
    <p>Often times the Access Point will also act as a DNS server and cache IP addresses for the domains it has previously queried. If the Access Point doesn’t have a cached record of the IP address for Alice’s DNS query, then it will need to forward the DNS query to the DNS server it is configured to use. Unless otherwise specified manually on the Access Point it may use an upstream DNS as advertised perhaps by the ISP. This chain (pictured below) continues all the way up to what is commonly referred to as a Root Name Server.</p>
    <Image centered className="article-img" src="/images/blog/dns-spoof/dns-chain.jpg" alt="sample dns server chain from alice -> access point -> isp dns -> root name server -> top level domain for com -> google's dns"/>
    <p>A Root Name Server will direct the DNS query to the top level name server corresponding to the DNS request. For example in the domain name www.google.com, the top level domain is “com”. This top level name server knows which DNS servers to query for all domains registered as a “.com”. Assuming the domain name being queried by Alice’s DNS request is registered, it will eventually lead back down to one of Google’s DNS servers. If Google’s DNS server recognizes the domain being queried by Alice, it will respond with the IP address of a web server that her web browser can then use to fetch the contents of https://www.google.com.</p>
    <p>DNS queries and replies currently do not use any sort of authentication or validation which opens up the opportunity for an attacker to spoof DNS replies. For example, let’s assume Alice is acting as a man-in-the-middle between Bob and the Access Point (for an example of this see my article on <Link to="/blog/hacking-explained-arp-spoofing" onClick={jumpToTop}>ARP Spoofing</Link>). Assuming Bob hasn’t manually set his DNS servers, he will automatically use Alice for DNS queries, allowing Alice to spoof the DNS replies with fake IP addresses and redirecting Bob to web servers of her choice.</p>
    <p>Here’s a demonstration of how DNS Spoofing, <Link to="/blog/hacking-explained-arp-spoofing" onClick={jumpToTop}>ARP Spoofing</Link> and my <Link to="/blog/hacking-explained-url-spoof-chrome" onClick={jumpToTop}>URL Spoofing Trick for Chrome</Link> can be used to generate a pretty convincing victim scenario with my universal MITM tool <a href="https://github.com/compewter/copycat" target="_blank" rel="noopener noreferrer">CopyCat</a>. CopyCat is a proof of concept tool for attackers like Alice to circumvent the security provided by HTTPS and see/modify the traffic, and allow victims like Bob to continue to use the services provided by HTTPS web servers:</p>
    <img className="article-img" src="/images/blog/url-spoof/copycat-demo.gif" alt="GIF demonstration of someone navigating through several different pages using this spoofed url trick"/>
  </div>)
},{
  title: 'Hacking Explained: ARP Spoofing',
  date: 'October 2018',
  author: 'Michael Wetherald',
  snippet: 'What is ARP and ARP Spoofing? Security Engineer and Co-Founder Michael Wetherald gives a basic explanation of ARP and how it can be spoofed in order to...',
  path: '/blog/hacking-explained-arp-spoofing',
  content: (<div>
    <p>The <b>Address Resolution Protocol (ARP)</b> is generally used to map unique MAC addresses to their corresponding IP addresses on a network. For example, let’s consider the following network configuration:</p>
    <Image centered className="article-img" src="/images/blog/arp-spoof/config.jpg" alt="example network configuration with two clients 'alice' and 'bob' connected to an access point which acts as a gateway to the internet"/>
    <p>Each of these devices has a unique hardware MAC address (typically assigned by the manufacturer, but modifiable with software) which is used at one layer of the network, and an ideally unique IP address which is used at another layer. When Alice wants to send a packet to Bob, she needs to include Bob’s MAC address. If Alice does not have Bob’s MAC address she broadcasts a request to the entire network asking “who has 192.168.1.3“ (Bob’s IP address). If Bob receives this request he responds “I am 192.168.1.3” which includes his MAC address (CC:CC:CC:CC:CC:CC). Alice then stores this mapping of Bob’s MAC address (CC:CC:CC:CC:CC:CC) and his IP address (192.168.1.3) locally in an ARP Table.</p>
    <p>Devices will also automatically update their ARP table whenever an ARP reply (“I am xx.xx.xx.xx”) is received regardless of whether or not the client initiated the ARP request. ARP does not define any way of validating or authenticating these requests/responses and this allows an attacker to manipulate client ARP tables at will. </p>
    <p>In our example above, Alice and Bob have their clients configured to use the Access Point’s IP address (192.168.1.1) as their default gateway to the Internet. Using our knowledge of ARP, Alice can modify Bob’s ARP table to use Alice’s MAC address for the IP address of the default gateway by simply sending an ARP reply to Bob which says “I am 192.168.1.1”. Bob’s device will then update it’s ARP table and use this new mapping for subsequent requests as represented by the following image:</p>
    <Image centered className="article-img" src="/images/blog/arp-spoof/mitm-config.jpg" alt="modified version of the network configuration shown previously, except this time bobs traffic is flowing through alice"/>
    <p>Alice could then configure her client to forward all of the traffic from Bob to the Access Point, allowing Bob to still have access to the Internet, while she acts as a man in the middle. Keep in mind however, if Bob is encrypting his traffic with the other devices he’s communicating with Alice will only see the encrypted traffic. This is why using websites with HTTPS is incredibly important.</p>
    <p>I began developing <a href="https://github.com/compewter/copycat" target="_blank">CopyCat</a> as a proof of concept tool for attackers like Alice to circumvent the security provided by HTTPS and see/modify the traffic, and allow victims like Bob to continue to use the services provided by HTTPS web servers. Check out my articles on using <Link to="/blog/hacking-explained-dns-spoofing" onClick={jumpToTop}>DNS Spoofing</Link> and my <Link to="/blog/hacking-explained-url-spoof-chrome">URL Spoofing Trick for Chrome</Link> to see some examples of things you can do with ARP Spoofing!</p>
  </div>)
}]