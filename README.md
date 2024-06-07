# Autoclick

> For if you're AFK but need to appear online for... reasons.

This script will automatically register a click event on your mouse every few minutes for you. When you initially run the script, there's a 1 second delay so you can quickly position your mouse where it needs to be. Then it'll click away, logging the datetime for each time it clicked.

## Setup

Make sure you have git and node v12 installed.

> ⚠️ Very important to have Node.js **VERSION 12**. For some reason, the `robotjs` package I used doesn't work with newer versions.

## Startup

Once cloned, `cd` into the repo and follow these steps:

1. Run `npm install`

2. Run `node click.js`

That's literally it.

## Warning, fr

It's important to remember this script **will run forever**. When you come back, make sure to **stop the script** or you will be very confused when your computer starts glitching out from phantom clicks (I've been there).
