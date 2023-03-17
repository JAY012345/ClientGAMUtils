const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
var bodyParser = require("body-parser");
const app = express();

const createLabel = require('./Routes/createLabel');
const setVacation = require('./Routes/setVacation');
const updateSignature = require('./Routes/updateSignature');''

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: "true" })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: "application/vnd.api+json" })); // parse application/vnd.api+json as json
app.use(express.json());



//Routes
app.use('/', createLabel);
app.use('/', updateSignature);
app.use('/', setVacation);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// app.post('/update-sig', (req, res) => {
//   let email = req.body.email;
//   let signature = req.body.signature;
//   const command = spawn('gam', ['user', email, 'signature', signature]);
//   command.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
//   });
//   command.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
//   });
//   command.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
//   });
//   res.send(`User ${email} created with signature ${signature}`);
// });

// app.post('/create-label', (req, res) => {
//   let email = req.body.email;
//   let labelName = req.body.labelName;
//   const command = spawn('gam', ['user', email, 'add', 'label', labelName]);
//   command.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
//   });
//   command.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
//   });
//   command.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
//   });
//   res.send(`Label ${labelName} created for user ${email}`);
// });

// // app.post('/delete-label', (req, res) => {
// //   let email = req.body.email;
// //   let labelName = req.body.labelName;
// //   const command = spawn('gam', ['user', email, 'delete', 'label', labelName]);
// //   command.stdout.on('data', (data) => {
// //     console.log(`stdout: ${data}`);
// //   });
// //   command.stderr.on('data', (data) => {
// //     console.error(`stderr: ${data}`);
// //   });
// //   command.on('close', (code) => {
// //     console.log(`child process exited with code ${code}`);
// //   });
// //   res.send(`Label ${labelName} deleted for user ${email}`);
// // });

// app.post('/set-vacation', (req, res) => {
//   console.log("Is this reaching")
//   let email = req.body.email;
//   let message = req.body.message;
//   let startDate = req.body.start_date;
//   let endDate = req.body.end_date;
//   const command = spawn('gam', ['user', email, 'vacation', 'on', 'subject', '"Out of Office"', 'message', `"${message}"`, 'start', startDate, 'end', endDate]);
//   command.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
//   });
//   command.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
//   });
//   command.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
//   });
//   res.send(`Vacation message set for user ${email} from ${startDate} to ${endDate}`);
// });






app.listen(8080, () => {
  console.log('Server started on port 8080');
});
