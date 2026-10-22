# golfingmilestones.com

Instant Golf Improvement landing page: "How to break 90 in 2027 (and 100, and 80)." A static one-page site on Cloudflare Pages with no form and no server code. Buy buttons go to the SureCart book pages, and the other buttons go to the IGI site and orlandogolfschool.com.

## What's in this folder

| File | What it does |
| --- | --- |
| `index.html` | The page, including the built-in scorecard graphic, the milestone strips and the search markup (HowTo and FAQ) |
| `styles.css` | IGI brand styling (same base as golfimprovement.com) |
| `app.js` | "Find your milestone," the seasonal banner, and hiding optional photos that haven't been added |
| `_headers`, `robots.txt`, `sitemap.xml`, `favicon.svg` | Security headers, search files, placeholder icon |
| `images/` | See `images/README.txt`. book-cover.png and john-headshot.jpg are required; putting.jpg and chipping.jpg are optional |
| `redirects.csv` | The 5 milestone domains plus www, for Cloudflare Bulk Redirects |

## Deploy

Same as the other landing pages: push to the GitHub repo, create a Cloudflare Pages project (no build command, output `/` or this folder), add `golfingmilestones.com` and `www.golfingmilestones.com` as custom domains. No environment variables. Turn on Cloudflare Web Analytics.

## Seasonal banner (automatic)

| Period | Banner |
| --- | --- |
| Until December 24, 2026 | "Give a golfer their 2027 goal: the book that shows them how, $19.99." |
| December 25, 2026, to January 31, 2027 | "Make 2027 the year you break 90." |
| From February 1, 2027 | No banner |

Edit `SEASONS` at the top of `app.js` to change these.

## Find your milestone

Golfers type their average score (55 to 160) and get their next milestone, the first thing to fix and a link to that section. Nothing is sent anywhere. The score bands are in `LEVELS` in `app.js`.

## Redirects

Add the domains in `redirects.csv` to Cloudflare, switch nameservers at GoDaddy, add proxied `AAAA @ 100::` records, import the CSV into Bulk Redirects and create the rule.
