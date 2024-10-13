const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const methodOverride = require("method-override");
const path = require("path");
const ejsMate = require("ejs-mate");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

app.engine("ejs", ejsMate);

app.get("/course-register", (req, res) => {
  res.render("pages/courseRegistration");
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
