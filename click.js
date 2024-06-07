var robot = require("robotjs");
var format = require("date-fns/format");
var keypress = require("keypress");

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

const clickOnce = () => {
  robot.mouseClick();
  console.log("clicked at " + format(Date.now(), "HH:mm:ss"));
};

const lockLaptop = () => {
  console.log("laptop locked at " + format(Date.now(), "HH:mm:ss"));
  robot.keyTap("q", ["control", "command"]);
  process.exit();
};

const main = async () => {
  console.log("Running autoclicker...");

  // first click after 1 second
  setTimeout(clickOnce, 1111);

  // click every...couple mins?
  setInterval(() => {
    clickOnce();
  }, 222222);
};

main();
