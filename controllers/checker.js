Parallel = require("async-parallel");
const request = require('request');
const fetch = require("node-fetch");
var unirest = require("unirest");
const whoiser = require("whoiser");
var avail = [];
var avail_dom = [];
exports.checker =  async (req, res) => {
    
    username = req.body.username;
    await Parallel.invoke(
      [
        async () => {
          await fetch(`https://www.pinterest.com/${username}`).then((res) => {
            if (res.status == 404) {
              avail.push("pinterest");
            }
          });
        },
        async () => {
          await fetch(`https://www.instagram.com/${username}`).then((res) => {
            if (res.status == 404) {
              avail.push("instagram");
            }
          });
        },
        async () => {
          await fetch(`https://www.facebook.com/${username}`).then((res) => {
            if (res.status == 404) {
              avail.push("facebook");
            }
          });
        },
        async () => {
          await fetch(`https://${username}.tumblr.com/`).then((res) => {
            if (res.status == 404) {
              avail.push("tumblr");
            }
          });
        },
        async () => {
          await fetch(`https://www.linkedin.com/company/${username}`).then(
            (res) => {
              if (res.status == 404) {
                avail.push("Linkedin");
              }
            }
          );
        },
        async () => {
          await fetch(`https://www.reddit.com/user/${username}`).then((res) => {
            if (res.status == 404) {
              avail.push("reddit");
            }
          });
        },
        async () => {
          // WHOIS main database
          let domainInfo = await whoiser(`${username}.com`);

          if (
            domainInfo["whois.verisign-grs.com"]["Domain Status"].length == 0
          ) {
            avail_dom.push(`${username}.com`);
          }
        },

        async () => {
          // WHOIS main database
          let domainInfo = await whoiser(`${username}.co`);

          if (domainInfo["whois.nic.co"]["Domain Status"].length == 0) {
            avail_dom.push(`${username}.co`);
          }
        },
        async () => {
          // WHOIS main database
          let domainInfo = await whoiser(`${username}.online`);
          if (domainInfo["whois.nic.online"]["Domain Status"].length == 0) {
            avail_dom.push(`${username}.online`);
          }
        },
        async () => {
          // WHOIS main database
          let domainInfo = await whoiser(`${username}.info`);
          if (domainInfo["whois.afilias.net"]["Domain Status"].length == 0) {
            avail_dom.push(`${username}.info`);
          }
        },
        async () => {
          // WHOIS main database
          let domainInfo = await whoiser(`${username}.store`);
          if (domainInfo["whois.nic.store"]["Domain Status"].length == 0) {
            avail_dom.push(`${username}.store`);
          }
        },
        async () => {
          // WHOIS main database
          let domainInfo = await whoiser(`${username}.net`);
          if (
            domainInfo["whois.verisign-grs.com"]["Domain Status"].length == 0
          ) {
            avail_dom.push(`${username}.net`);
          }
        },
        async () => {
          // WHOIS main database
          let domainInfo = await whoiser(`${username}.org`);
          if (domainInfo["whois.pir.org"]["Domain Status"].length == 0) {
            avail_dom.push(`${username}.org`);
          }
        },
        async () => {
          // WHOIS main database
          let domainInfo = await whoiser(`${username}.app`);
          if (domainInfo["whois.nic.google"]["Domain Status"].length == 0) {
            avail_dom.push(`${username}.app`);
          }
        },
      ],
      20
    );

 res.json(`available domains are :${avail_dom}  AND social media username available are : ${avail}`);
 avail = [];
 avail_dom = [];
}