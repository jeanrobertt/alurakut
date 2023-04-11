import axios, { AxiosError, AxiosResponse } from "axios";
import { IUser } from "../types/user";
import { logger } from "../config/logger.config";
import * as dotenv from "dotenv";
dotenv.config();

export class GithubApi {
    private BASEURL: string;
    private TOKEN: string;

    constructor () {
        this.BASEURL = 'https://api.github.com/users';
        this.TOKEN = process.env.GITHUB_TOKEN;
    }

    public async getUserData(username: string): Promise<IUser | undefined> {
        try {
            const data: undefined | IUser = await axios.get(`${this.BASEURL}/${username}`, {
                    headers: {
                        Authorization: this.TOKEN
                    }
                })
                .then((res: AxiosResponse) => {
                    const data: IUser = this.convertData(res.data);
                    return data;
                }).catch((error: Error) => {
                    if (error instanceof AxiosError && error.message === 'Request failed with status code 403') {
                        logger.error(`${error.name} : ${error.message}`);
                    }
                    logger.error(error);
                    return undefined;
                });
                logger.info('User data fetched');
            return data;
        } catch (error) {
            logger.error(error);
            return undefined;
        }
    }

    public async getFollowers(username: string, page: number = 0): Promise<boolean | IUser[]> {
        try {
            const data = await axios.get(`${this.BASEURL}/${username}/followers?per_page=100&page=${page}`, {
                    headers: {
                        Authorization: this.TOKEN
                    }
                })
                .then((res: AxiosResponse) => {
                    const data = res.data
                    const followers: IUser[]  = data.map((item: IUser) => this.convertData(item))
                    return followers;
                }).catch((error: Error) => {
                    if (error instanceof AxiosError && error.message === 'Request failed with status code 403') {
                        logger.error(`${error.name} : ${error.message}`);
                    }
                    logger.error(error);
                    return false;
                });
                logger.info('Followers fetched');
            return data;
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    private convertData(data: IUser): IUser {
        const { login, avatar_url, url, followers_url, following_url, name, location, bio, followers, following  } = data;
        return {
            login,
            avatar_url,
            url,
            followers_url,
            following_url,
            name,
            location,
            bio,
            followers,
            following
        }
    }
}