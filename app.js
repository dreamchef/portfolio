const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
const fs = require('fs');
const https = require("https");
const axios = require('axios');

app
  .use(express.static(path.join(__dirname)))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));


app.get('/', (req, res) => res.render('pages/index'));

app.get('/video', (req, res) => {
  var apiKey = "AIzaSyDBI4bXfbhdwQTe4as5g7kPCGCNMCY2-b0";
  var channelId = "UCrN1yxZoYwAlkzKSFysRMLw";
  var youtubeQuery = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + 
    "&channelId=" + channelId + "&part=id&order=date&maxResults=20";
  axios({
    url: youtubeQuery,
      method: 'GET',
      dataType:'json',
    })
      .then(apiRes => {
        console.log(apiRes.data.items);
        res.render('pages/video', {
          videos: apiRes.data.items,
          numVideos: apiRes.data.items.length
        });
      })
});

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

