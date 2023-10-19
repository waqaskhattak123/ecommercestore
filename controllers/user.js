const userModel = require('../models/User');
const { hashPassword } = require('../utils/passwordUtils');
// @ desc Register User
// @ route POST/api/v1/auth
// @ access Public
exports.registerUser = async (req, res) => {
    try {
        //destructure 
        const { name, email, password } = req.body;
        console.log('here is req.body', req.body);
        //validation
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }
        //check if the user already exist
        const existerUser = await userModel.findOne({ email });
        if (existerUser) {
            return res.status(409).json({
                success: false,
                message: 'User already Existed, please Login',
            });
        };
        // to hash a password
        const hashedPass = await hashPassword(password);
        //create a new user
        const newUser = await new userModel({
            name, email, password: hashedPass
        }).save();

        res.status(201).json({
            success: true,
            message: 'User Register Successfully',
            user: newUser,
        });


    } catch (error) {
        console.log('Error in Registration', error);
        res.status(500).send({
            success: false,
            message: 'error in registration',
            error: error.message,
        });
    }
}

