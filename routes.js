const express = require('express')
const router = express.Router();
// Init users links
router.get('/teste', (req, res) => {
  return res.json({'t': 't'});
  const { google } = require ('googleapis')
  const credentials = require('./google.json');
  
  const scopes = [
    'https://www.googleapis.com/auth/drive'
  ];

  const auth = new google.auth.JWT(
    credentials.client_email, null,
    credentials.private_key, scopes
  );

  const drive = google.drive({ version: "v3", auth });

  const id = '1onUyeSZbcRT8Q6-2DM3UVjYJbFaRP4mz';
  const size = 2133314;

  const file = drive.files.get(
    { fileId: id, alt: 'media' },
    { responseType: 'stream' },
    (err, { data }) => {
      if (err) {
        console.log(err);
        return;
      }
      let buf = [];
      data.on("data", (e) => buf.push(e));
      data.on("end", () => {
        const buffer = Buffer.concat(buf);
      });

      return buf;
    }
  )

  return res.json(file);
});


module.exports = router
