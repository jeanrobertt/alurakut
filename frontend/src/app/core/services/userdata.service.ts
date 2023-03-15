import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Store } from '@ngrx/store';

import { APIService } from './api.service';
import { CommunitiesdataService } from './communitiesdata.service';
import { MessagesdataService } from './messagesdata.service';
import { actions$ } from 'src/app/store/actions';
import { AppState } from 'src/app/store/reducers';
import { ApiUserType } from 'src/app/core/models/user';

@Injectable({
	providedIn: 'root',
})
export class UserdataService {

	constructor(
		private apiService: APIService,
		private communityService: CommunitiesdataService,
		private messageService: MessagesdataService,
		private store: Store<AppState>,
	) {}

	async login(user: string, login: boolean): Promise<boolean> {
		try {
			const loginResponse = this.apiService
				.getGitHubData(user, login)
	
			const loginData = await lastValueFrom(loginResponse);
			
			this.setUserData(loginData);
			this.setFollowersData(loginData)
			this.setToken(loginData.token!)
			await this.communityService.getCommunities(user);
			await this.messageService.getMessages(user);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
		
	}
	
	setUserData(data: ApiUserType): void {
		this.store.dispatch(actions$.setUserData(data));
	}
	
	getUserData() {
		return this.store.select((state) => state.user);
	}
	
	setFollowersData(data: ApiUserType): void {
		this.store.dispatch(actions$.setFollowersData(data));
	}
	
	setToken(token: string): void {
		this.store.dispatch(actions$.setToken({ token }))
		this.store.dispatch(actions$.loginSuccess({ token }))
	}

	logout():void {
		this.store.dispatch(actions$.logout());
		this.store.dispatch(actions$.clearMessages());
		this.store.dispatch(actions$.clearCommunities());
		this.store.dispatch(actions$.profileLogout());
	}

	async isLoggedIn(): Promise<boolean> {
		return await lastValueFrom(this.store.select(state => state.user.isLoggedIn));
	}
	
	async verifyToken(token: string): Promise<boolean> {
		try {
			const response = this.apiService
				.verifyToken(token)
				.pipe((res) => res);
			const responseData = await lastValueFrom(response);

			if (responseData.decoded !== undefined && responseData.decoded.login) {
				const decoded = responseData.decoded;
				this.store.select(state => state).subscribe((state) => {
					if(!state.user){
						this.login(decoded.githubUser, true);
					}
					if (!state.communities) {
						this.communityService.getCommunities(decoded.githubUser);
					}

					if (!state.messages) {
						this.messageService.getMessages(decoded.githubUser);
					}
				})
				return true;
			} else {
				throw new Error(responseData.message);
			}
		} catch (error) {
			this.logout();
			return false;
		}
	}

}
