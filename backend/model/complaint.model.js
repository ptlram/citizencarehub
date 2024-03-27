import mongoose from "mongoose";
import validator from "validator";
const complaintSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("invalid");
        }
      },
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    district: {
      type: String,
      require: true,
    },
    pincode: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      require: true,
    },
    contact: {
      type: String,
      require: true,
    },
    proff: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      default: "new",
    },
  },
  {
    collection: "Complaint",
  },
  {
    timestamps: true,
  }
);

const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;
