
import mongoose from "mongoose";

const empSchema = new mongoose.Schema({
  
    name: { type: String, required: true },
    id: { type: String, required: true },
    profilePic: { type: String, required: false },
    contact: { type: String, required: true },
    department: { type: String, required: true },
  })
  
const Employee = mongoose.models.emp || mongoose.model("emp", empSchema)

export default Employee;