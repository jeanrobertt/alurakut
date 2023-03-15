import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { IUser } from 'src/app/core/models/user';
import { IProfileRelationsBox } from 'src/app/shared/profile-relations-box/profile-relations-box.component';
import { Subscription } from 'rxjs';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
	name$!: string;
	userData = {} as IProfileRelationsBox;
	communitiesData = {} as IProfileRelationsBox;

	userdata$!: IUser;
	
	private subscriptions = new Subscription();

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.userData.items = [] as any;
		this.communitiesData.items = [] as any;
		this.subscriptions.add(
			this.store
				.select((state) => state)
				.subscribe((data) => {
					this.name$ = data.user.userdata!.name;
					this.userdata$ = data.user.userdata!;
					this.userData.smallTitle = `Seguidores (${data.user.userdata.followers})`;
					data.user.followers.forEach((item) => {
						this.userData.items.push({
							name: item.login,
							image: item.avatar_url,
							link: `/u/${item.login}`,
						});
					});

					this.communitiesData.smallTitle = `Comunidades (${
						data.communities.communities!.length
					})`;

					data.communities.communities!.forEach((item) => {
						this.communitiesData.items.push({
							name: item.title,
							image: item.imageUrl,
							link: `/community/${item._id}`,
						});
					});
				})
		);
	}
	
	ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}
}
