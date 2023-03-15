import { Request, Response} from 'express';
import { getUserData, getFollowers } from '../helpers';
import * as jwt from "jsonwebtoken";

const getGitHubData = async (req: Request, res: Response): Promise<void> => {
    try {
        const userdata = await getUserData(req.body.githubUser);
        console.log(new Date().toLocaleString() , " - Req received - getGitHubData");
        if (userdata) {
            const followers = await getFollowers(req.body.githubUser)
            if (req.body.login) {
                const hash : string = `${process.env.HASH}`;
                const token = jwt.sign(req.body, hash, { expiresIn: '1d' });
                
                res.status(200).send({ userdata, followers, token })
                
            } else {
                res.status(200).send({ userdata, followers })
            }
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
        console.log(new Date().toLocaleString() , " - Req received - verifyToken");
        res.status(200).send({ decoded })
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

export { getGitHubData, verifyToken };