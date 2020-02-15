//jshint esversion:6

// Require the needed NPMs

import Radar from "radar-sdk-js";
import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

module.exports = function (api) {
  api.cache(true);

  const presets = [ ... ];
  const plugins = [ ... ];

  return {
    presets,
    plugins
  };
}
require.resolve("@babel/core")
browserify().transform("babelify", {
  global: true,
  ignore: /\/node_modules\/(?!app\/)/
});
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());
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

});
app.set('port', process.env.PORT || 3033);
app.listen(app.get('port'), function() {
  if(app.get('port') == 3033){
  console.log("Server started on port 3033");
}
else{
  console.log("Server started on port " + process.env.PORT);
}
});

var mysql = require('mysql');
