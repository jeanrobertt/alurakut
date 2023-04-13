import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUserType } from '../models/user';
import { ApiCommunityType, ICommunity } from '../models/community';
import { ApiMessageType, IMessage } from '../models/message';


@Injectable({
	providedIn: 'root',
})
export class APIService {
	
	constructor(
		private http: HttpClient,
		@Inject('API_BASE_URL') private apiUrl: string
	) {}
	
	getGitHubData(githubUser: string, login: boolean): Observable<ApiUserType>{
		const userdata = this.http.post<ApiUserType>(`${this.apiUrl}/githubdata`, {githubUser, login} )
		return userdata;
	}

	verifyToken(token: string) {
		return this.http.post<ApiUserType>(`${this.apiUrl}/verifytoken`, {token} )
	}
	
	getCommunities(user?: string ): Observable<ApiCommunityType> {
		if (user) {
			return this.http.post<ApiCommunityType>(`${this.apiUrl}/getcommunity`, { user });
		} else {
			return this.http.get<ApiCommunityType>(`${this.apiUrl}/getcommunity`);
		}
	}

	getCommunity(id: string): Observable<ApiCommunityType> {
		return this.http.post<ApiCommunityType>(`${this.apiUrl}/getcommunity`, { id });
	}
	
	createCommunity(community: ICommunity): Observable<ApiCommunityType> {
		return this.http.post<ApiCommunityType>(`${this.apiUrl}/addcommunity`, community);
	}
	
	updateCommunity(id:string, community: ICommunity): Observable<ApiCommunityType> {
		return this.http.put<ApiCommunityType>(`${this.apiUrl}/updateCommunity`, {id, community});
	}
	
	deleteCommunity(id: string): Observable<ApiCommunityType> {
		return this.http.delete<ApiCommunityType>(`${this.apiUrl}/deletecommunity?id=${id}`);
	}
	
	joinCommunity(id: string, user: string): Observable<ApiCommunityType> {
		return this.http.post<ApiCommunityType>(`${this.apiUrl}/joincommunity`, { id, user });
	}
	
	leaveCommunity(id: string, user: string): Observable<ApiCommunityType> {
		return this.http.post<ApiCommunityType>(`${this.apiUrl}/leavecommunity`, { id, user });
	}
	
	getMessages(receiver: string): Observable<ApiMessageType> {
		return this.http.post<ApiMessageType>(`${this.apiUrl}/getmessages`, { receiver });
	}
	
	sendMessage(message: IMessage): Observable<ApiMessageType> {
		return this.http.post<ApiMessageType>(`${this.apiUrl}/addmessage`, {message});
	}
	
	updateMessage(id: string, message: IMessage): Observable<ApiMessageType> {
		return this.http.put<ApiMessageType>(`${this.apiUrl}/updatemessage`, { id, message });
	}
	
	deleteMessage(id: string): Observable<ApiMessageType> {
		return this.http.delete<ApiMessageType>(`${this.apiUrl}/deletemessage?id=${id}`);
	}
}