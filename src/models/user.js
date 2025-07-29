import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
   fullName: String,
  email: String,
  role: {
    type: String,
    enum: ["tenant", "landlord", "admin"],
    default: "tenant"
  },
  password: String,
  confirmpassword: String,
});
export const User = mongoose.model('User', userSchema);