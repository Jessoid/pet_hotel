import Users from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//create new user
export const Register = async (req, res) => {
    try {
        const { name, email, password, confPassword } = req.body;

        if (password !== confPassword) {
            return res.status(400).json({ msg: 'Password and Confirm Password do not match '});
        }
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        await Users.create({
            name:name,
            email:email,
            password:hashPassword,
        }).then((response) => {
            const userid = response.ID;
            const token = jwt.sign({id:userid}, 'secretword123', {
                expiresIn:'30d',
            });
            res.json({userid, token});
        });
    }catch(error) {
        console.log(error);
    }
};

export const Login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                email: req.body.email,
            },
        });

        const isValidPass = await bcrypt.compare(req.body.password, user[0].password);
        if (!isValidPass) return res.status(400).json({msg:'Wrong Password'});

        const userId = user[0].ID;
        const name = user[0].name;
        const email = user[0].email;
        const role = user[0].role;

        const token = jwt.sign({userId, name, email, role}, 'secretword123', {
            expiresIn: '30d',
        });

        res.cookie('token', token, {httpOnly: true, maxAge: 24*60*60*1000,});
        res.json({userId, name, token });
    }catch (error) {
        res.status(404).json({msg:'Email not found'})
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                ID:req.userId,
            },
        });
        console.log(req.userId);
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }
        const userId = user[0].ID;
        const name = user[0].name;
        const email = user[0].email;
        const role = user[0].role;
        res.json({userId, name, email, role});
    }catch (err) {
        return res.status(403).json({
            message:'No access query',
        });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['ID', 'name', 'email', 'role'],
        });
        res.json(users);
    }catch (error) {
        console.log(error);
    }
};