const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
const fs = require('fs');

app
  .use(express.static(path.join(__dirname)))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));


app.get('/', (req, res) => res.render('pages/index'));

app.get('/video', (req, res) => res.render('pages/video'));

app.get('/music', (req, res) => {
  contentDir = path.join(__dirname, 'content/music/');
  var fileNames = fs.readdirSync(contentDir).filter(el => path.extname(el) === '.mp3');
  console.log(fileNames[0]);
  res.render('pages/music', {
    fileNames: fileNames,
    numFiles: fileNames.length
  });
});


// Routes

