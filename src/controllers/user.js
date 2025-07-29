import { User } from '../models/user.js';

export const registerApi = async (req, res) => {
  try {
    const { fullname, email, role, password, confirmpassword } = req.body

    const UserData = await User.create({
      fullName: fullname,
      email,
      role,
      password,
      confirmpassword
    })
    return res
      .status(200)
      .json({ status: 'sucess', message: 'User Register Sucessfully', UserData });


  } catch (error) {
    return res
      .status(500)
      .json({ status: 'error', message: 'Internal Server Error' });
  }
}