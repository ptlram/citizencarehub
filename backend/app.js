import express from "express";
import mongoose from "mongoose";
import db from "./model/registermodel.js";
import Complaint from "./model/complaint.model.js";
import cors from "cors";
import multer from "multer";
import imagemodel from "./model/imagemodel.js";

const app = express();
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/src/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.post("/upload-image", upload.single("solveImage"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const { useremail, facultyemail, compalintId } = req.body;
  const imageName = req.file.filename;

  const newImage = new imagemodel({
    useremail: useremail,
    facultyemail: facultyemail,
    complaintId: compalintId,
    image: imageName,
  });

  newImage
    .save()
    .then(() => res.status(200).send("Successfully uploaded."))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error uploading file.");
    });
});

app.get("/getimg/:id", async (req, res) => {
  const complaintId = req.params.id;
  console.log(complaintId);
  try {
    const data = await imagemodel.findOne({ complaintId: complaintId });
    console.log(data);
    res.json(data); // Ensure the response format is correct
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.post("/api/complaint", async (req, res) => {
  const response = await Complaint.create(req.body);
  res.json(response);
});
app.post("/api/citizen", async (req, res) => {
  const response = await db.create(req.body);
  res.json(response);
});

app.post("/api/login", async (req, res) => {
  const { email, role, password } = req.body;
  const response = await db.findOne({
    email: email,
    role: role,
    password: password,
  });
  res.json(response);
});

// admin get api
app.get("/api/newcomplaint", async (req, res) => {
  try {
    const result = await Complaint.find({ status: "new" });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/pendingcomplaint", async (req, res) => {
  try {
    const result = await Complaint.find({ status: "pending" });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/solvecomplaint", async (req, res) => {
  try {
    const result = await Complaint.find({ status: "completed" });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/citizen", async (req, res) => {
  try {
    const result = await db.find();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

// for display user complaint in user

app.get("/api/details/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const data = await db.findOne(email, email);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

// Define a new GET API endpoint that accepts email as a parameter
app.get("/api/complaints/:email", async (req, res) => {
  const userEmail = req.params.email;
  try {
    // Query the database to find data where the email matches
    const userComplaints = await Complaint.find({ email: userEmail });
    res.json(userComplaints);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.put("/api/complaint/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const up = await Complaint.findByIdAndUpdate(_id, req.body);
    res.send(up);
  } catch (error) {
    res.send(error);
  }
});

app.put("/api/complaint/:_id", async (req, res) => {
  const id = req.params._id;
  const { status } = req.body;

  const user = await Register.findOneAndUpdate({ id: id }, { status: status });
  const response = await Register.findOne({
    id: id,
  });

  res.json(response);
});

app.delete("/api/citizen/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const del = await db.findByIdAndDelete(_id);
    res.send(del);
  } catch (err) {
    res.send(err);
  }
});

const mongo = mongoose
  .connect("mongodb+srv://ramvijaypatel96:ram@cluster0.vvyksiw.mongodb.net/")
  .then(() => {
    console.log("connected");
    app.listen(5000, () => {
      console.log("port 5000");
    });
  })
  .catch((err) => {
    console.log("not working", err);
  });
