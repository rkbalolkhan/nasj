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
const Student = require("./models/student.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const passwordGenerator=require('generate-password')
const { studentSchema } = require("./schema.js");
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

app.post("/course-form-submit", async (req, res) => {
  try {
    const [day, month, year] = req.body.studentDetails.dob
      .split("/")
      .map(Number);
    req.body.studentDetails.dob = new Date(year, month - 1, day);
    req.body.studentDetails.phoneNo = Number(req.body.studentDetails.phoneNo);
    req.body.parentsDetails.phoneNo = Number(req.body.parentsDetails.phoneNo);
    req.body.studentDetails.previosStudies.hifz =
      req.body.studentDetails.previosStudies.hifz === "true";
    req.body.studentDetails.previosStudies.quranChaptersCompleted = Number(
      req.body.studentDetails.previosStudies.quranChaptersCompleted
    );
    let studentCount = await Student.countDocuments({});
    req.body.studentDetails.registrationNo = 100000 + studentCount + 1;
    req.body.studentDetails.registrationDate=Date.now();
    req.body.studentDetails.password = passwordGenerator.generate({
      length: 10,
      numbers: true,
    });
      let diff = Date.now() - req.body.studentDetails.dob.getTime();
      console.log(diff)
      let ageDate = new Date(diff);
      req.body.studentDetails.age= Math.abs(ageDate.getUTCFullYear() - 1970);
  } catch (e) {
    console.log(e);
  }

  console.log(req.body);

  let {error}=studentSchema.validate(req.body);
  if (error) {
    console.log(error.details);
    let errMsg = error.details.map((el) => el.message).join(",");
  } else {
    console.log("Successful")
  }

  res.redirect("/");
});

app.get("/fatawa",(req,res)=>{
  res.render("pages/fatawa")
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
