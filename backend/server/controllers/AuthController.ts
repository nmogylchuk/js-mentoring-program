import {Request, Response} from 'express';
import User, {UserDocument} from "../models/User";

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


export class AuthController {
    public async login(req: Request, res: Response) {
        let {email, password} = req.body;
        console.log(`email: ${email}`);
        console.log(`password: ${password}`);
        email = email.toLowerCase();

        const user: UserDocument = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: "This user doesn't exist"});
        }

        const isMatch = password === user.password;// await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Wrong password" });
        }

        const token = jwt.sign(
            { userEmail: user.email },
            'jwtSecret'
        );

        res.status(201).json({token, userEmail: user.email});
    }
}
