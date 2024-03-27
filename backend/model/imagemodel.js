import mongoose from "mongoose";
import validator from "validator";

const imageschema = new mongoose.Schema({
  useremail: {
    type: String,
    require: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid");
      }
    },
  },
  facultyemail: {
    type: String,
    require: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid");
      }
    },
  },
  complaintId: {
    type: String,
    required: true,
  },
  image: { type: String, required: true },
});
const imagemodel = mongoose.model("imagemodel", imageschema);

export default imagemodel;
