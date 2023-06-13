const { spawn } = require("child_process");

let regex = /[.*+?^${}()|[\]\\' ]/g;

let message = "My friend's tongue says:  I love you !!!!!+++++"

var escapedStr = message.replace(regex, "\\$&"); 

const command = 'sendsms';
const args = [
  '-n', '62798845',
  '-b', escapedStr
];

const sendsms = spawn(command, args);

sendsms.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

