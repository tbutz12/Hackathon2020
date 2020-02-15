//jshint esversion:6

// Require the needed NPMs

import Radar from "radar-sdk-js";
import express from "express";
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html");

});


app.listen(process.env.PORT || 3052, function() {
  console.log("Server started on port 3052");
});
