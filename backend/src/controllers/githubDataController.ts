import { Request, Response} from 'express';
import { GithubApi } from '../helpers';
import jwt from "jsonwebtoken";

import { logger } from "../config/logger.config";
import * as dotenv from "dotenv";
dotenv.config();

const githubApi = new GithubApi();

class GithubDataController {

    async getGitHubData(req: Request, res: Response): Promise<void> {
        try {
            logger.info("Req received - getGitHubData");
            
            const { githubUser, login } = req.body;
            const userdata = await githubApi.getUserData(githubUser);

            if (userdata) {
                const followers = await githubApi.getFollowers(githubUser);

                if (login) {
                    const token = jwt.sign(req.body, process.env.HASH, { expiresIn: '1d' });
                    res.status(200).send({ userdata, followers, token });
                } else {
                    res.status(200).send({ userdata, followers });
                }
                logger.info("Response sent with status 200");
                
            } else {
                throw new Error('User not found');
            }
        } catch (error) {
            if (error instanceof Error && error.message === 'User not found') {
                res.status(401).send({ message: "User not found" });
                logger.error("Response sent with status 401 - User not found");
            } else {
                res.status(500).send({ message: "An error occurred" });
                logger.error("Response sent with status 500 - Internal Server Error");
                logger.error(error);
            }
        }
    }

    async verifyToken(req: Request, res: Response): Promise<void> {
        try {
            logger.info("Req received - verifyToken");

            const { token } = req.body;
            const decoded = jwt.verify(token, process.env.HASH);

            res.status(200).send({ decoded });

            logger.info("Response sent with status 200");
        } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) {
                res.status(401).send({message: "Invalid token"});
                logger.error("Response sent with status 401 - Invalid token");
            } else if (error instanceof jwt.TokenExpiredError) {
                res.status(401).send({message: "Token expired"});
                logger.error("Response sent with status 401 - Token expired");
            } else {
                res.status(500).send({message: "An error occurred"});
                logger.error("Response sent with status 500 - Internal Server Error");
            }
            logger.error(error);
        }
    }
}

export default GithubDataController;