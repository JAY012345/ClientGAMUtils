const cors = require('cors');
const { spawn } = require('child_process');

exports.createLabel = (req, res) => {
    console.log("Create Label!");
    let email = req.body.email.emailBody;
      let labelName = req.body.label.labelBody;
      const command = spawn('gam', ['user', email, 'add', 'label', labelName]);
      command.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });
      command.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });
      command.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
      });
      res.send(`Label ${labelName} created for user ${email}`);
   
}

exports.updateSignature = (req, res) => {
    console.log("Update Signature!");
    let email = req.body.email.emailBody;
    let signature = req.body.signature.signatureBody;
    const command = spawn('gam', ['user', email, 'signature', signature]);
    command.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
    command.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    command.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
    res.send(`User ${email} created with signature ${signature}`);
}

exports.setVacation = (req, res) => {
    console.log("Set Vacation!");
    let email = req.body.email.emailBody;
    let signature = req.body.label.labelBody;
  let startDate = req.body.start_date;
  let endDate = req.body.end_date;
  const command = spawn('gam', ['user', email, 'vacation', 'on', 'subject', '"Out of Office"', 'message', `"${message}"`, 'start', startDate, 'end', endDate]);
  command.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  command.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  command.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  res.send(`Vacation message set for user ${email} from ${startDate} to ${endDate}`);
}

