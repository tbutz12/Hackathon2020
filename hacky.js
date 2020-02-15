//jshint esversion:6

// Require the needed NPMs

import Radar from "radar-sdk-js";
import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html");

});
app.post("/", function(req, res){
  var userName = req.body.userName;
  var trackedName = req.body.trackedName;
  console.log(userName);
  console.log(trackedName);
  geoFindMe();

});
app.set('port', process.env.PORT || 3018);
app.listen(app.get('port'), function() {
  if(app.get('port') == 3018){
  console.log("Server started on port 3018");
}
else{
  console.log("Server started on port " + process.env.PORT);
}
});

function geoFindMe() {
  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

//document.querySelector('#find-me').addEventListener('click', geoFindMe);
