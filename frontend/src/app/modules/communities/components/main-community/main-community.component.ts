import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICommunity } from 'src/app/core/models/community';

@Component({
	selector: 'app-main-community',
	templateUrl: './main-community.component.html',
	styleUrls: ['../../communities.component.css'],
})
export class MainCommunityComponent implements OnInit, OnChanges {
	@Input() community$?: ICommunity;
	community?: CommunityProps[];
	
	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			if (params['id']) {
				this.getCommunity();
			} else {
				this.router.navigate(['communities']);
			}
		});
	}

	ngOnChanges(): void {
		this.getCommunity();
	}

  	getCommunity() {
		this.community = [
		{ key: 'Idioma', value: 'Portugês' },
		{ key: 'Categoria', value: 'Pessoas' },
		{ key: 'Dono', value: this.community$?.creatorSlug },
		{ key: 'Moderador', value: 'Nenhum' },
		{ key: 'Tipo', value: 'Pública' },
		{ key: 'Local', value: 'Brasil' },
		{
			key: 'Criado em',
			value: this.convertDate(this.community$!.createdAt!),
		},
		{ key: 'Membros', value: this.community$!.users.length },
		];
	}

	convertDate(createdAt: string) {
		return new Date(createdAt).toLocaleDateString();
	}

}

interface CommunityProps {
	key?: string;
	value?: string | number;
}
