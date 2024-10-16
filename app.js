if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const methodOverride = require("method-override");
const path = require("path");
const ejsMate = require("ejs-mate");
const mapboxgl = require("mapbox-gl");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const geocodingClient = mbxGeocoding({
  accessToken: `${process.env.MAPBOX_TOKEN}`,
});

const app = express();

const mongo_url = "mongodb://127.0.0.1:27017/NASJ";
main()
  .then(() => console.log("Connection to DB Successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongo_url);
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.engine("ejs", ejsMate);



app.get("/course-register", (req, res) => {
  res.render("pages/courseRegistration");
});

app.post("/course-form-submit",(req,res)=>{
  console.log(req.body);
  res.redirect("/");
})

app.get("/find/:place", (req, res) => {
  console.log(req.params);
  res.render("pages/find");
});

app.get("/alquran", (req, res) => {
  res.render("pages/quran.ejs");
});

app.get("/date", (req, res) => {
  res.render("components/datePicker.ejs");
});

app.get("/", (req, res) => {
  res.render("pages/index.ejs");
});


app.listen(3000, () => {
  console.log("Server is running and accessible locally");
});
