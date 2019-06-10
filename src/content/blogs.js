import React from 'react'
import { Link } from 'react-router-dom'
import {
  Image
} from 'semantic-ui-react'

function jumpToTop(){
  window.scrollTo(0, 0)
}

export default [
{
  title: 'Preventive Security Is Not Enough',
  date: 'June 2019',
  author: 'Michael Wetherald',
  snippet: 'Preventive security solutions like, anti-virus and firewalls are not enough. Without detection, you won\'t know how or when your security controls are failing...',
  path: '/blog/preventive-security-not-enough',
  content: (<div>
    <p>Companies focus nearly all of their security efforts on preventive measures, which are important, but not enough. Without detection, you won’t know when or how your security controls are failing. Many people recognize this when they buy security cameras for their homes. The preventive security controls (e.g. locks on doors and windows) are prone to failure when faced with a sufficiently motivated adversary. This is no different with the cybersecurity controls (e.g. antivirus and firewalls) at your organization.</p>
    <h2>Most Companies Are Flying Blind</h2>
    <p>Companies continue to operate under the paradigm that prevention alone is enough despite overwhelming evidence to the contrary. A recent <a rel="noopener noreferrer" target="_blank" href="https://www.ibm.com/security/data-breach">study</a> from IBM found the average US company takes 206 days to detect when they have a security breach. The infamous Equifax breach was detected only because the criminals were downloading so much data it was degrading their network performance, not because of any detection mechanisms.</p>
    <h2>Mistakes Happen</h2>
    <p>In some cases security incidents are caused by mistakes by authorized users operating within the scope of their organization’s preventive security controls. An example of this is the recent verifications.io data breach of 800+ million emails, names, phone numbers, addresses, dates of birth, and more personally identifiable information. This massive data breach was caused by an administrator who mistakenly configured the publicly accessible database without a password.</p>
    <h2>Detection Is A Must</h2>
    <p>Effective detection mechanisms will quickly alert you when something has gone wrong, allowing your staff to respond before serious damage can be done. Instead of solely focusing on prevention, your security operations should be optimized for the ability to monitor and control what is happening in your environment. We recommend a defense-in-depth approach with mechanisms to detect, alert, and respond when each layer fails.</p>
    <p>An effective monitoring strategy involves only generating enough logs and alerts as you have the staff and budget to review in a timely manner. Timely log auditing facilitates a quick response, which can be the difference between a security breach being contained versus regressing into a disaster. To get the most out of your security budget, focus on monitoring the most critical systems and data in your organization, and limit alerts to only as many of the most severe events your staff can process.</p>
    <h2>Take Steps To Protect Your Organization</h2>
    <p>No security controls are 100% effective, and it’s time we stop pretending they are. Viam Technologies is here to help you navigate the challenges associated with securing your organization. We can help you determine what types of detection mechanisms would be best for your organization, or if you already have some, if they are sufficient. <Link to='/contact' onClick={jumpToTop}>Contact us</Link> today for a free consultation.</p>
  </div>)
},
{
  title: 'What is Phishing?',
  date: 'May 2019',
  author: 'Michael Wetherald',
  snippet: 'Phishing is widely considered the largest threat to companies in 2019. What is it? And how can we mitigate the risk...',
  path: '/blog/what-is-phishing',
  content: (<div>
    <p>Phishing is a cyber attack wherein an adversary sends a message to a victim intending to deceive the victim into disclosing sensitive information. Frequently this tactic is used by criminals to fool victims into disclosing financial information, or credentials for services which might hold valuable information.</p>
    <h2>Phishing Is An Increasing Threat</h2>
    <p>Recent reports indicate phishing attacks have become <a rel="noopener noreferrer" target="_blank" href="https://www.cpomagazine.com/cyber-security/phishing-attacks-now-more-common-than-malware/">more common than malware</a>. As companies invest millions of dollars in expensive technical solutions to prevent security breaches, the underlying risk of users mistakenly granting access remains.</p>
    <p>In February 2015, the health insurance provider Anthem suffered a major data breach caused by a <a rel="noopener noreferrer" target="_blank" href="https://www.csoonline.com/article/2880352/anthem-confirms-data-breach-but-full-extent-remains-unknown.html">successful phishing attack</a>. This involved the theft of Personally Identifiable Information (PII) of up to 78.8 million current and former customers, and a total cost estimated to exceed $100 million.</p>
    <h2>How Is It Done?</h2>
    <p>The goal of a phishing attack is to deceive the recipient into believing the contents of the phishing message include something they want or need. It may be a time sensitive warning from their bank, or important information regarding their responsibilities at work. Something they desire is hidden behind a link to click, or file to download.</p>
    <h2>How Can You Address The Threat?</h2>
    <p>Because companies need to balance security restrictions and the freedom users need to efficiently perform their duties, users often need the ability to download and open files without interruption. For the same reasons, there are typically no automated technical solutions in place to prevent the users from opening a web page and typing in their credentials.</p>
    <p>The good news is, there are strategies available to find a proper balance of security and functionality. This includes:</p>
      <ul>
        <li>Implement contingencies to mitigate the damage when a user inevitability falls prey to a phishing attack.</li>
        <li>Have your employees take part in Security Awareness Training.</li>
        <li>Run simulated phishing campaigns against your users to help determine how likely a phishing attack is to succeed, and who might need additional training.</li>
      </ul>
    <h2>Viam Technologies Can Help</h2>
    <p>We can help you explore strategies for protecting your organization from phishing attacks. We offer an entertaining Security Awareness Training program, and can run automated phishing campaigns to keep your users on their toes. We’re also happy to sit down with you to make sure you are doing what you can to mitigate all of the common cybersecurity risks facing your organization. Finding the right balance between security and functionality is key. <Link to='/contact' onClick={jumpToTop}>Contact us</Link> today for a free consultation.</p>
  </div>)
},
{
  title: 'Securing Your Company From Hackers - Where to Start?',
  date: 'April 2019',
  author: 'Michael Wetherald',
  snippet: 'Cut through the endless amount of information and snake oil and read how you can prioritize where to start securing your organization from...',
  path: '/blog/where-to-start',
  content: (<div>
    <p>You’ve heard about another security breach, maybe this time it’s one of your suppliers or distributors, or another massive breach in the news. It’s another stressful reminder that it could happen to your organization.</p>
    <h2>Information Overload</h2>
    <p>So you decide to address the problem, and the first thing you find is… there’s a lot of information. Take a look at these industry standard security controls.</p>
    <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">POSTER | SANS 20 CRITICAL SECURITY CONTROLS - DL &amp; Print crucial info for defending your org. <a href="http://t.co/MbpeDjiwRz">http://t.co/MbpeDjiwRz</a> <a href="http://t.co/nqWx9oRl5t">pic.twitter.com/nqWx9oRl5t</a></p>&mdash; SANS Institute (@SANSInstitute) <a href="https://twitter.com/SANSInstitute/status/617049110533775360?ref_src=twsrc%5Etfw">July 3, 2015</a></blockquote>
    <p>Just looking at the chart is daunting. You’ll find 20 broad categories that each break out into several action items. Trying to implement all of these at once, even with a massive security budget, would likely be a catastrophic failure or inefficient at best.</p>
    <p>Don’t get me wrong, I’m not knocking these security controls. They’re industry standards for good reason. But we’re exploring where to start.</p>
    <h2>The Solution: Prioritize with Risk Assessments</h2>
    <p>Risk assessments involve analyzing your organization’s unique mission and infrastructure.</p>
    <p>A risk assessment allows your organization to determine:</p>
    <ul>
      <li>What information and systems are most valuable to your operations?</li>
      <li>What could go wrong with those systems and information?</li>
      <li>How likely is it that something could go wrong?</li>
      <li>What would it cost if it does go wrong?</li>
      <li>What would it cost to reduce the risks involved to an acceptable level?</li>
    </ul>
    <p>The result of this assessment is a <b>roadmap of prioritized actions</b> to take high impact steps of reducing the likelihood and impact of a security event. By assessing what these security events would cost, you can <b>budget</b> what amount is worth investing to <b>reduce risk to an acceptable level.</b></p>
    <p>Without this prioritization process you can’t be sure you are effectively mitigating the risks facing your organization. You could spend a fortune trying to secure everything all at once, but not only is it an endless pit of time and money, it’s ineffective.</p>
    <p><Link to='/contact' onClick={jumpToTop}>Contact us</Link> today to schedule a risk assessment to provide you with a security roadmap and a justifiable security budget to ensure you are taking the steps necessary to mitigate risk.</p>
  </div>)
},
{
  title: 'Lessons From Major Security Breaches',
  date: 'March 2019',
  author: 'Michael Wetherald',
  snippet: 'Carefully analyzing major security breaches provides insight on where things commonly go wrong. These three factors are always present...',
  path: '/blog/lessons-learned-security-breaches',
  content: (<div>
    <p>Every few months we hear of yet another large organization being involved in a costly security incident.</p>
    <ul>
      <li>In 2016 it was disclosed that all 3 billion Yahoo accounts were hacked in the 2013 breach. (<a rel="noopener noreferrer" href='https://www.oath.com/press/yahoo-provides-notice-to-additional-users-affected-by-previously/' target='_blank'>Oath.com</a>)</li>
      <li>In 2017 147.9 million consumers data was stolen in the Equifax Breach. (<a rel="noopener noreferrer" href='https://www.equifaxsecurity2017.com/2018/03/01/equifax-releases-updated-information-2017-cybersecurity-incident/' target='_blank'>Equifax</a>)</li>
      <li>In the 2013 holiday season, Target reported hackers stole data from up to 41 million credit and debit cards from shoppers. (<a rel="noopener noreferrer" href='https://www.nbcnews.com/business/business-news/target-settles-2013-hacked-customer-data-breach-18-5-million-n764031' target='_blank'>NBC</a>)</li>
      <li>On February 2019 Verifications.io had 763,117,241 emails leaked, many of these records also included personal information such as names, phone numbers, dates of birth, genders, and IP addresses. (<a rel="noopener noreferrer" href='https://securitydiscovery.com/800-million-emails-leaked-online-by-email-verification-service/' target='_blank'>SecurityDiscovery.com</a>)</li>
    </ul>
    <p>Can we analyze these major breaches for what went wrong and learn from them?</p>
    
    <h2>What Do Major Breaches Have In Common?</h2>
    <p>An analysis of major breaches leads us to find 3 main preconditions for a major security breach. Adversaries find and exploit systems with all three of these attributes:</p>
    <ol>
      <b><li>The exploited system is available from the Internet</li></b>
      <b><li>The exploited system has access to sensitive data</li></b>
      <b><li>The exploited system is running an unpatched and vulnerable service</li></b>
    </ol>
    
    <h2>Why are systems available from the Internet?</h2>
    <p>This is kind of a silly question, but let’s think this through. Why would a system be accessible from the Internet?</p>
    <p>Any company which hosts services such as web sites, VPNs, APIs which need to be accessible from outside of their physical office must expose the systems hosting these services to the Internet. For example, companies which allow their staff to work out of office must host some kind of service facing the Internet if they want the remote staff to be able to access internal services, generally using a VPN.</p>
    <p>This is a classic example of the balance between security and convenience. The risk of opening these services up to the Internet is generally worth the added productivity, and companies choose take on the risk.</p>
    
    <h2>Why would systems have access to sensitive data?</h2>
    <p>It’s likely the services you decide to host on the Internet will need to serve some sensitive data. What good is a service that doesn’t have access to the data you are looking for? Imagine logging into your email from home only to find all of the data in your emails is inaccessible. It would be useless to host an email service like that.</p>
    <p>But this doesn’t mean you should allow this publicly facing system to have unlimited access to the source of that sensitive data, which we unfortunately see far too often. Instead, these systems should be restricted as much as possible to reduce the impact of those systems being compromised.</p>
    <p>These publicly facing systems should be requesting the sensitive data from an entirely different system which is not accessible from the Internet. In the event the public system is compromised, it restricts compromised data to that which is loaded on on the public system during normal operations. While this is still a bad situation, it is preferable to immediately exposing all of your sensitive data to the adversary.</p>
    <p>It also allows your security staff and monitoring systems a stricter set of data to analyze and recognize attempts to compromise the internal system serving the sensitive data.</p>
    <p>If you can’t get away from hosting a system on the Internet, and serving sensitive data from that system, then you should take a defense in depth approach and limit the amount of data you are exposing with your public systems.</p>

    <h2>Why would systems have unpatched vulnerabilities?</h2>
    <p>How many times have you hit the “Update Later” option when your OS or software tells you there’s a new update? It’s a big interruption to productivity to install the updates and restart your system. Now think about doing this with your servers which provide functionality to not just you, but everyone else who uses that service.</p>
    <p>Worse yet, lots of servers are configured with software that has not been thoroughly tested on the software being updated. Blindly applying updates is a risky move as often times the patch has unintended consequences and now your system has gone from functioning just fine to completely broken down.</p>
    <p>We constantly work with companies that continue running old and vulnerable versions of Java on their systems because software they use every day to be productive does not work on the newer versions.</p>
    <p>Combine all that with the fact that staff resources are limited and we have long delays from when patches are released to when they are applied.</p>

    <h2>What can be done about this?</h2>
    <p>It’s no wonder these breaches continue to happen. Companies are focused on the bottom line, and impacts to company productivity have immediate financial impact. Meanwhile the looming risk of a data breach is in the back of the minds of company leaders as they roll the dice on being the next headline.</p>
    <p>Balancing the security risks and business productivity is a complicated process which requires time and effort to analyze, but it must be done. Starting off with a <i>Risk Assessment</i> will allow your company to intelligently determine how much and where resources should be invested in security.</p>
    <p>Frequent <i>Vulnerability Assessments</i> and <i>Penetration Tests</i> will increase the likelihood your company will find these accessible and vulnerable systems before criminals do. Appropriate investments in <i>Security Monitoring</i> and <i>Incident Response</i> will allow your company to recognize and respond to indicators of compromise and limit the damage caused by the security breach.</p>
    <p>Viam Technologies can help you understand the security risks facing your organization and provide you with the insight necessary to effectively mitigate them. <Link to='/contact' onClick={jumpToTop}>Contact Us</Link> today for a free consultation.</p>
  </div>)
},
{
  title: 'Hacking Explained: Advanced Phishing Attacks and Defense',
  date: 'February 2019',
  author: 'Michael Wetherald',
  snippet: 'A new phishing tool was released which allows hackers to monitor victims as they shop or send emails. Here\'s how it works, and how you can protect users who visit your...',
  path: '/blog/hacking-explained-advanced-phishing-attacks-defense',
  content: (<div>
    <h2>There's A New Threat In Town</h2>
    <p>Security engineer Piotr Duszyński (<a href='https://www.twitter.com/drk1wi' target='_blank' rel='noopener noreferrer'>@drk1wi</a>) has developed and released a new phishing tool called <a href="https://github.com/drk1wi/Modlishka" target='_blank'>Modlishka</a> which is being positively received by the information security community. It boasts the capability of bypassing multi factor authentication which is the current best practice of protecting accounts from phishing attacks.</p>
    <p>Here is a video demonstration of Modlishka, notice the domain is not Google domain, and that it’s even loaded over HTTPS:</p>
    <iframe title="Modlishka Demo Video" className="article-img" src="https://player.vimeo.com/video/308709275" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{display: 'block', margin: '10px auto'}}></iframe>
    <p>Traditional phishing attacks are done by cloning a target website’s content and presenting that to victims. This generally involves a login page that looks similar or identical to the real login page, with which an adversary can then collect a victim's credentials as they attempt to log in. However, because the phishing page isn’t the real website, a user that has “logged-in” cannot be presented with their content and the adversary will often redirect them to the real website.</p>
    <p>What Piotr has done is utilize what's called a reverse proxy. As you can see, reverse proxy phishing attacks have the possibility of being much more devastating than typical phishing attacks. Instead of hosting a cloned look-a-like of the website, a reverse proxy allows the adversary to act as a man-in-the-middle between their victims and the real web server. Account logins, multi-factor authentication methods, and the user’s content are all presented to the user just as if they were connected directly to the real website. All the while an adversary is sitting in the middle, able to monitor and even manipulate the traffic if they wished.</p>
    <p>The adversary is able to read all of a phishing victim’s messages and emails, and even present them with fake messages and emails. If the website is one where credit card transactions are conducted, the adversary is able to see all of the credit card information. They could even present a victim with a fake incoming video chat from someone in their contacts list to prompt the user into allowing the adversary access to their microphone and camera. The list goes on, and it’s a terrifying reality.</p>
    <p>Pair this with the url spoofing trick outlined in our other <Link to='/blog/hacking-explained-url-spoofing-trick' onClick={jumpToTop}>article</Link> it could even deceive more security consicous users who aren’t paying close attention:</p>
    <img className="article-img" src="/images/blog/url-spoof/google-loaded.jpg" alt="http://https//www.google.com loaded in google chrome with http:// trimmed from the beginning"/>
    <h2>How Does It Work?</h2>
    <p>A typical phishing attack follows this general outline:</p>
      <ol>
        <li style={{marginTop: 10}}>Register a domain similar to that which is being impersonated (e.g. <i>www.instgram.com</i> vs. <i>www.instagram.com</i>)</li>
        <li style={{marginTop: 10}}>Host a page on that domain with a login form that looks like that of the website being impersonated</li>
        <li style={{marginTop: 10}}>Trick victims into going to the phishing domain when they think they are going to the real website</li>
        <li style={{marginTop: 10}}>Collect user credentials as they attempt to login</li>
        <li style={{marginTop: 10}}>Upon credential collection redirect to the user to the real domain</li>
      </ol>
    <p>From here the adversary has one or many victim credentials which they can then use to access the accounts of those phishing victims. This is why it's important to utilize multi-factor authentication. If the adversary only phishes credentials they are out of luck when they try to login as the victim and are prompted for a second factor authentication code.</p>
    <p>So how do reverse proxy phishing tools like Modlishka work? Instead of serving a static clone of the website they are phishing, the adversary acts as a middleman between victims and the web servers they are trying to use. When the victim requests the phishing page, their request goes to the adversary’s reverse proxy server, which then passes this request on to the web server as if the victim were making the request. When the web server responds to the reverse proxy server, the proxy server sends that content back to the victim as the response to the victim’s original request:</p>
    <img className="article-img" style={{display: 'block', margin: '20px auto'}} src="/images/blog/advanced-phishing/reverse-proxy.png" alt="Depiction of how a reverse proxy works"/>
    <p>This is an oversimplified explanation as the reverse proxy has to make modifications to the content in order for content to render and operate properly. But if those modifications are done properly, the result can be a fully functional instance of any website.</p>
    <h2>Can This Threat Be Mitigated?</h2>
    <p>Web developers can add instructions to ask the browser what domain the page is currently on, and respond accordingly if the current page is not an approved domain. For example, something like this check can be added to the response content:</p>
    <img className="article-img" style={{display: 'block', margin: '20px auto'}} src="/images/blog/advanced-phishing/domain-check.jpg" alt="if(window.location !== 'https://www.instagram.com')"/>
    <p>This snippet of code will check if the currently loaded page is the approved domain. If this check fails it could be followed by additional instructions to notify the web server, refuse loading additional content, terminating authenticated sessions, etc.</p>
    <p>Problem solved? Unfortunately, no. When the proxy server is making modifications to the responses coming from the real web server, those modifications will replace instances of instagram.com with instgram.com. This is done so that future requests continue to go through the proxy and not directly to instagram.com. If this check were added to the response, the proxy would replace instagram.com with instgram.com and the check would fail to detect any problems.</p>
    <p>At first glance, this threat appears nearly impossible to detect or prevent. All of the content coming from instagram.com is passed through the reverse proxy, and any instructions for the phishing victim’s browser to detect if it is on the correct domain can be removed or modified by the adversary.</p>
    <h2>Is There A Point Of Weakness?</h2>
    <p>In order for these reverse proxies to present functioning websites to their victims, every instance of the domains being proxied (e.g. instagram.com) need to be detected and modified to go back through the reverse proxy (e.g. instgram.com). Additionally, any domain checking instructions need to be detected and modified or removed. These detection methods are a point of weakness in the entire system as it only takes missing one instance of the real domain to initiate a request to alert the server that something has gone wrong.</p>
    <h2>How Can This Weakness Be Exploited For Defense?</h2>
    <p>Utilizing different obfuscation techniques can make it very difficult for an automated system to detect and modify these domains and instructions. Defeating these detection methods will allow web developers to send instructions through to the client’s browser and determine if the domain they have loaded is an approved domain, and notify the web server if not.</p>
    <p>The key to this defense method is adding enough complexity that automating the detection process is unfeasible, and would be too much work for a sophisticated adversary to find reverse engineering worth the effort.</p>
    <p>Once these instructions are successfully sent past the detection methods and to the client’s browser, notifying the web server can either be done by initiating a request directly to a real domain, or by initiating a request back through the proxy:</p>
    <img className="article-img" style={{display: 'block', margin: '20px auto'}} src="/images/blog/advanced-phishing/contacting-server-alternatives.png" alt="Two ways of contacting the web server"/>
    <p>In the case where the request is not sent back through the proxy, it can be sent to the real domain, or to any domain which the proxy is not actively modifying and rerouting back through itself. Alternatively if the request is sent back through the proxy, the content needs to be obfuscated in a manner which would bypass the proxy’s detection methods before it forwards the content to the web server.</p>
    <p>I’m privy to the former method as it only requires bypassing the detection methods on the way to the client. If a request can be generated directly from the client’s browser to the web server there is no opportunity for the proxy to detect or tamper with the information.</p>
    <h2>How Can This Defense Be Implemented?</h2>
    <p>There are many methods, and choices for degrees of complexity to be used in implementing this defense, but it will always include these three steps:</p>
    <ol>
      <li>Send instructions past proxy detection methods</li>
      <li>Execute those instructions on the client's browser</li>
      <li>Send information back to web server without the proxy detecting or tampering with the content</li>
    </ol>
    <p>One method I've developed involves utilizing the browser's cookie jar:</p>
    <ol>
      <li>Obfuscate and send the following line past proxy detection methods:
        <img className="article-img" style={{display: 'block', margin: '20px auto'}} src="/images/blog/advanced-phishing/set-cookie.jpg" alt="document.cookie = 'domain_check_token=random_token; domain=.instagram.com;';"/>
      </li>
      <li>Execute that line in the client's browser early in the page loading process</li>
      <li>Check for this cookie and confirm its value on future requests received by the web server</li>
    </ol>
    <p>When the web browser executes this line, it will try to add the cookie <i>domain_check_token</i> to the cookie jar for the domain <i>instagram.com</i>. If the user is actually on instagram.com, the browser will have no problem setting this cookie. However if the user is on the adversary's domain setting the cookie will fail silently and the web server will never see the cookie value in future requests.</p>
    <p>There are a couple of nice things about this method to point out. The instructions needing to bypass the proxy detection methods are short. There's no need include instructions to initiate requests back to the domain, which would make it easier for an adversary to reverse engineer and find.</p>
    <p>I recommend naming the <i>domain_check_token</i> cookie something less obvious, and <i>random_token</i> is a token your web server will generate and associate with the session of the current user. It should be randomly generated for each session to prevent token reuse.</p>
    <p>The session management logic running on your web server can then check for the existence of this cookie on future requests and ensure the value is of the correct token. In the case where the cookie never arrives, you have an indication that the user may have fallen victim to one of these reverse proxies. If the cookie does arrive appropriately then you know that the user does in fact have your domain loaded.</p>
    <p>One way to obfuscate these instructions is by chopping up their contents and assigning them to different variables. This makes it incredibly difficult for the proxy to automatically detect. It would require the adversary to be sophisticated and persistent enough to reverse engineer where in the code these instructions are executed. See the example below:</p>
    <img className="article-img" style={{display: 'block', margin: '20px auto'}} src="/images/blog/advanced-phishing/obfuscation.jpg" alt="const a=document, b='coo', c='kie, d='domain_check_token', ... a[b+c] = `${d+..."/>
    <p>Sprinkling each of those variable declarations somewhere in the code, randomizing where they are put, and passing them through callbacks would all make it even more difficult to reverse engineer, and near impossible to automate detecting and modifying.</p>
    <p>Another thing to consider is the use of decoy cookie instructions to trick any attempts to automate the recognition of cookies being set. These decoy cookies could be put in places that would never be executed on the client, and if set indicate to the web server that someone is probably tampering with the content.</p>
    <p>So while these attacks have the potential to be devastating to users, owners of websites have options to make it extremely difficult for adversaries to use this kind of attack on their users. If your organization would like help strategizing ways to protect your users from this threat and others, we’re here to help. Check out our <Link to='/services' onClick={jumpToTop}>Services</Link> page, and <Link to='/contact' onClick={jumpToTop}>Contact Us</Link> if you’re ready to take steps to protect your organization and clients.</p>
  </div>)
},{
  title: 'Protect Your Organization With A Security Risk Assessment',
  date: 'January 2019',
  author: 'Michael Wetherald',
  snippet: 'A security risk assessment is a crucial step for mitigating the cyber security risks in your organization. Without identifying and addressing the risks in your environment, you have no chance to prevent a catastrophic...',
  path: '/blog/protect-your-org-risk-assessment',
  content: (<div>
    <h2>It's Dangerous Out There</h2>
    <p>Cyber security threats are facing your organization at all times. As technology advances, so does the complexity. As complexity grows, so do mistakes, bugs, and unexpected side-effects. Each of these mistakes is a crack waiting for an adversary to come along and compromise your organization. Individuals and hacking groups continuously scan the internet looking for vulnerable systems to exploit.</p>
    <p>All it takes is one mistake, one crack in the infrastructure for these adversaries to compromise an organization. From there they perform actions based on their individual motivations. Political hacktivists may target their political enemies in order to leak information, or they may desire to bring down the infrastructure and disrupt operations. Cyber thieves have increasingly been using ransomware, a type of software which renders systems inoperable until the criminals receive a ransom payment.</p>
    <p>Every few months we hear of another large organization being involved in a costly security incident.</p>
    <ul>
      <li>In 2016 it was disclosed that all 3 billion Yahoo accounts were hacked in the 2013 breach. (<a rel="noopener noreferrer" href='https://www.oath.com/press/yahoo-provides-notice-to-additional-users-affected-by-previously/' target='_blank'>Oath.com</a>)</li>
      <li>In 2017 147.9 million consumers data was stolen in the Equifax Breach. (<a rel="noopener noreferrer" href='https://www.equifaxsecurity2017.com/2018/03/01/equifax-releases-updated-information-2017-cybersecurity-incident/' target='_blank'>Equifax</a>)</li>
      <li>In the 2013 holiday season, Target reported hackers stole data from up to 41 million credit and debit cards from shoppers. (<a rel="noopener noreferrer" href='https://www.nbcnews.com/business/business-news/target-settles-2013-hacked-customer-data-breach-18-5-million-n764031' target='_blank'>NBC</a>)</li>
    </ul>
    <p>But smaller organizations are constantly involved in security incidents as well. Reports suggest <b>one of every five</b> small to medium size businesses annually becomes a victim to a cyber security incident and a staggering <b>60 percent</b> of those business go under within six months of the attack. (<a href='https://www.bizjournals.com/bizjournals/how-to/growth-strategies/2017/05/does-your-business-need-cyber-liability-insurance.html' target='_blank'>BizJournals.com</a>)</p>
    <h2>How Do I Protect My Organization?</h2>
    <p>One of the first steps to protecting your organization is with the use of a security risk assessment. A risk assessment determines what threats are most relevant and impactful to your organization. This allows your organization to intelligently and effectively determine where to apply the resources necessary for protection. No organization can protect itself from all possible threats, but a risk assessment provides your organization with the information it needs to focus its efforts and effectively add protective measures to mitigate the risk your organization faces.</p>
    <h2>What Does a Risk Assessment Look Like?</h2>
    <p>During a risk assessment we determine which cyber security threats are relevant, and the likelihood and impact those threats could have on your organization. We do this by first establishing the key assets of your organization. Are there hardware assets which are crucial to business operations? What information would be catastrophic to lose? Is there information you are legally required to protect, and how are you doing so? From there we determine who the likely adversaries might be. What are their motivations and capabilities? Once we have defined those threat sources and security events they are capable of, we determine the likelihood and impact those security events would have on your organization. With this threat model we can prioritize and recommend how to effectively apply resources to the threats which are of highest likelihood and impact to your organization.</p>
    <p>A good risk assessment provides you with the information necessary to intelligently and effectively invest in protecting your organization. If you operate a small business, defending yourself from threats only capable by nation-state attacks does not make sense because the likelihood of such an attack is very low. However, threats from hacking groups and individuals are attempted on smaller organizations constantly. With a clear picture of the threats and impacts facing your organization, you can calculate the amount of risk your organization is willing to tolerate and apply an appropriate amount of resources to mitigate risk your organization is unwilling to tolerate. Prioritizing your security expenditures on high impact remediations is only possible with a risk assessment.</p>
    <h2>Is Your Risk Appropriately Managed?</h2>
    <p>Risk is an inherent part of any operation. As the leader of your organization, it is your responsibility to recognize where the risks to the organization lie and to mitigate those risks. Fortunately, most adversaries look for low hanging fruit. A risk assessment can determine where your organization is exposing low hanging fruit to these criminals, a first step toward mitigating the risk of a security incident.</p>
    <p>If your organization would benefit from a risk assessment we’re here to help. <Link to='/contact' onClick={jumpToTop}>Contact us</Link> today for a free consultation.</p>
  </div>)
},/*{
  title: 'Hacking Explained: Man In The Middle Attacks',
  date: 'January 2019',
  author: 'Jose Barrientos',
  snippet: 'You may have heard that using public WiFi is dangerous. Security Engineer and Co-Founder Jose Barrientos explains how criminals can exploit victims...',
  path: '/blog/hacking-explained-man-in-the-middle',
  content: (<div>

  </div>)
},*/{
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
    <p>I’ve utilized this trick in the development version of my universal man-in-the-middle tool <a href="https://github.com/compewter/copycat" target="_blank">CopyCat</a>. Once that’s a little more stable I’ll be releasing the latest more powerful version as well as a full writeup on how it works.</p>
    <p>I haven’t thought of any legitimate reasons for these web browsers not to show the protocol in the url bar as they do with https. But if they have good reasons to do so, they should be weighed against this potential attack.</p>
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
    <p>Here’s a demonstration of how DNS Spoofing, <Link to="/blog/hacking-explained-arp-spoofing" onClick={jumpToTop}>ARP Spoofing</Link> and my <Link to="/blog/hacking-explained-url-spoofing-trick" onClick={jumpToTop}>URL Spoofing Trick for Chrome</Link> can be used to generate a pretty convincing victim scenario with my universal man-in-the-middle tool <a href="https://github.com/compewter/copycat" target="_blank">CopyCat</a>. CopyCat is a proof of concept tool for attackers like Alice to circumvent the security provided by HTTPS and see/modify the traffic, and allow victims like Bob to continue to use the services provided by HTTPS web servers:</p>
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
    <p>I began developing <a href="https://github.com/compewter/copycat" target="_blank">CopyCat</a> as a proof of concept tool for attackers like Alice to circumvent the security provided by HTTPS and see/modify the traffic, and allow victims like Bob to continue to use the services provided by HTTPS web servers. Check out my articles on using <Link to="/blog/hacking-explained-dns-spoofing" onClick={jumpToTop}>DNS Spoofing</Link> and my <Link to="/blog/hacking-explained-url-spoofing-trick" onClick={jumpToTop}>URL Spoofing Trick for Chrome</Link> to see some examples of things you can do with ARP Spoofing!</p>
  </div>)
}]