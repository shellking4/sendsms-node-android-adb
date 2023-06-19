const { spawn } = require("child_process");

let regex = /[.*+?^${}()|[\]\\' ]/g;

let message = "My friend's tongue says:  I love you !!!!!+++++"

// necessay because the special characters in the message string must escaped
var escapedStr = message.replace(regex, "\\$&"); 

const command = 'sendsms';
const args = [
  '-n', '123456789',
  '-b', escapedStr
];

const sendsms = spawn(command, args);

// Event listeners for stdout and stderr
sendsms.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

sendsms.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

// Event listener for process exit
sendsms.on('exit', (code) => {
  console.log(`child process exited with code ${code}`);
});