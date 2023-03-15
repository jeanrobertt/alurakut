import { Request, Response} from 'express';
import * as jwt from "jsonwebtoken";
import { getUserData, getFollowers } from '../helpers';

const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const userdata = await getUserData(req.body.githubUser);
        const followers = await getFollowers(req.body.githubUser)
        if (userdata) {
            const hash:string = process.env.HASH!;
            const token = jwt.sign(req.body.githubUser, hash, { expiresIn: '1d' });
            
            res.status(200).send({ userdata, followers, token })
        } else {
            throw new Error('User not found');
        }
    } catch (error) {
        if (error instanceof Error && error.message === 'User not found') {
            res.status(401).send({ message: "User not found" });
        } else {
            console.log(error);
            res.status(500).send({ message: "An error occurred" });
        }
    }
}

const verifyToken = async (req: Request, res: Response): Promise<void> => {
    try {
        const token: string = req.body.token;
        const hash: string = process.env.HASH!;
        const decoded = jwt.verify(token, hash);
        res.status(200).json({ decoded })
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            res.status(401).send({message: "Invalid token"})
        } else if (error instanceof jwt.TokenExpiredError) {
            res.status(401).send({message: "Token expired"})
        } else {
            res.status(401)
        }
    }
}


export { login, verifyToken };