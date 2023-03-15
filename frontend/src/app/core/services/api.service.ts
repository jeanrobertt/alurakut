import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUserType } from '../models/user';
import { ApiCommunityType, ICommunity } from '../models/community';
import { ApiMessageType, IMessage } from '../models/message';


@Injectable({
	providedIn: 'root',
})
export class APIService {
	private apiBaseURL = 'http://localhost:8080/api';
	public libBaseURL = "http://alurakut.vercel.app";
	
	constructor(private http: HttpClient) {}
	
	getGitHubData(githubUser: string, login: boolean): Observable<ApiUserType>{
		const userdata = this.http.post<ApiUserType>(`${this.apiBaseURL}/githubdata`, {githubUser, login} )
		return userdata;
	}

	verifyToken(token: string) {
		return this.http.post<ApiUserType>(`${this.apiBaseURL}/verifytoken`, {token} )
	}
	
	getCommunities(user?: string ): Observable<ApiCommunityType> {
		if (user) {
			return this.http.post<ApiCommunityType>(`${this.apiBaseURL}/getcommunity`, { user });
		} else {
			return this.http.get<ApiCommunityType>(`${this.apiBaseURL}/getcommunity`);
		}
	}

	getCommunity(id: string): Observable<ApiCommunityType> {
		return this.http.post<ApiCommunityType>(`${this.apiBaseURL}/getcommunity`, { id });
	}
	
	createCommunity(community: ICommunity): Observable<ApiCommunityType> {
		return this.http.post<ApiCommunityType>(`${this.apiBaseURL}/addcommunity`, community);
	}
	
	updateCommunity(id:string, community: ICommunity): Observable<ApiCommunityType> {
		return this.http.put<ApiCommunityType>(`${this.apiBaseURL}/updateCommunity`, {id, community});
	}
	
	deleteCommunity(id: string): Observable<ApiCommunityType> {
		return this.http.delete<ApiCommunityType>(`${this.apiBaseURL}/deletecommunity?id=${id}`);
	}
	
	joinCommunity(id: string, user: string): Observable<ApiCommunityType> {
		return this.http.post<ApiCommunityType>(`${this.apiBaseURL}/joincommunity`, { id, user });
	}
	
	leaveCommunity(id: string, user: string): Observable<ApiCommunityType> {
		return this.http.post<ApiCommunityType>(`${this.apiBaseURL}/leavecommunity`, { id, user });
	}
	
	getMessages(receiver: string): Observable<ApiMessageType> {
		return this.http.post<ApiMessageType>(`${this.apiBaseURL}/getmessages`, { receiver });
	}
	
	sendMessage(message: IMessage): Observable<ApiMessageType> {
		return this.http.post<ApiMessageType>(`${this.apiBaseURL}/addmessage`, {message});
	}
	
	updateMessage(id: string, message: IMessage): Observable<ApiMessageType> {
		return this.http.put<ApiMessageType>(`${this.apiBaseURL}/updatemessage`, { id, message });
	}
	
	deleteMessage(id: string): Observable<ApiMessageType> {
		return this.http.delete<ApiMessageType>(`${this.apiBaseURL}/deletemessage?id=${id}`);
	}
}