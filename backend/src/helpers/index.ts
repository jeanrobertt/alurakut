import axios, { AxiosError, AxiosResponse } from "axios";
import { IUser } from "../types/user";

const BASEURL: string = 'https://api.github.com/users';
const TOKEN: string = process.env.GITHUB_TOKEN!;

const getFollowers = async (username:string, page: number = 0): Promise<boolean | IUser[]> => {
    try {
        const data = await axios.get(`${BASEURL}/${username}/followers?per_page=100&page=${page}`, {
            headers: {
                Authorization: TOKEN
            }
        })
            .then((res: AxiosResponse) => {
                const data = res.data
                const followers: IUser[]  = data.map((item: IUser) => convertData(item))
                return followers;
            }).catch(error => {
                if (error instanceof AxiosError && error.message === 'Request failed with status code 403') {
                    console.error(`${error.name} : ${error.message}`);
                }
                return false;
            }) 
        return data;
    } catch (error) {
        return false;
    }
}

const getUserData = async (username:string): Promise<IUser | undefined> => {
    const data: undefined | IUser = await axios.get(`${BASEURL}/${username}`, {
            headers: {
                Authorization: TOKEN
            }
        })
        .then((res: AxiosResponse) => {
            const data: IUser = res.data
            const userdata = convertData(data)
            return userdata;
        }).catch((error: Error) => {
            if (error instanceof AxiosError && error.message === 'Request failed with status code 403') {
                console.error(`${error.name} : ${error.message}`);
            }
            console.error(`${error.name} : ${error.message}`);
            return undefined;
        })
    return data;
}

const convertData = (data: IUser) => {
    const userdata: IUser = {
        login: data.login,
        avatar_url: data.avatar_url,
        url: data.url,
        followers_url: data.followers_url,
        following_url: data.following_url,
        name: data.name,
        location: data.location,
        bio: data.bio,
        followers: data.followers,
        following: data.following,
    };
    return userdata;
}

export { getUserData, getFollowers }
