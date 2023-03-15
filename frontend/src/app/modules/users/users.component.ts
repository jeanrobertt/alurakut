import { actions$ } from 'src/app/store/actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, distinctUntilChanged } from 'rxjs';

import { AppState } from 'src/app/store/reducers';
import { IProfileRelationsBox, IProfileRelationsBoxItems } from 'src/app/shared/profile-relations-box/profile-relations-box.component';
import { IUser } from 'src/app/core/models/user';
import { UserProfileDataService } from 'src/app/core/services/user-profile-data.service';
import { ProfileState } from 'src/app/core/models/profile';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
	followersProfile: IProfileRelationsBox = { smallTitle: '', items: [] as IProfileRelationsBoxItems[], };
	communitiesProfile: IProfileRelationsBox = { smallTitle: '', items: [] as IProfileRelationsBoxItems[], };
	userdata$!: IUser;
	name$: string = '';

	private subscriptions = new Subscription();

	constructor(private userProfileService: UserProfileDataService, private route: ActivatedRoute, private store: Store<AppState> ) {}

	ngOnInit(): void {
		this.subscriptions.add(
			this.route.paramMap
			.pipe(distinctUntilChanged((prev, curr) => prev.get('user') === curr.get('user')))
			.subscribe(async (params) => {
				this.name$ = params.get('user')!;
				await this.userProfileService.setUserData(this.name$);
			})
		);	
		this.subscriptions.add(
			this.store.select((state) => state.userProfile)
			.subscribe((user) => {
				this.setData(user);
			})
		);
	}
	ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}
	setData(user: ProfileState) {
		this.userdata$ = user.userdata!;
		this.followersProfile.smallTitle = `Seguidores (${user.userdata?.followers})`;
		this.followersProfile.items = [];
		user.followers?.forEach((item) => {
			this.followersProfile.items.push({
				name: item.login,
				image: item.avatar_url,
				link: `/u/${item.login}`,
			});
		});
		this.communitiesProfile.smallTitle = `Comunidades (${user.communities?.length})`;
		this.communitiesProfile.items = [];
		user.communities?.forEach((item) => {
			this.communitiesProfile.items.push({
				name: item.title,
				image: item.imageUrl,
				link: `/community/${item._id}`,
			});
		});
	}
}
