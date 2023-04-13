import { Component, Inject, OnInit } from '@angular/core';

@Component({
	selector: 'app-orkut-icon-set',
	templateUrl: './orkut-icon-set.component.html',
	styleUrls: ['./orkut-icon-set.component.css'],
})
export class OrkutIconSetComponent implements OnInit {
	libBaseURL: string;
	iconSet1: IIConSet[] = [];
	iconSet2: IIConSet[] = [];

	constructor(@Inject('LIB_BASE_URL') libURL: string) {
		this.libBaseURL = libURL;
	}

	ngOnInit(): void {
		this.iconSet1 = [
			{
				name: 'Recados',
				slug: 'recados',
				icon: 'book',
			},
			{
				name: 'Fotos',
				slug: 'fotos',
				icon: 'camera',
			},
			{
				name: 'Videos',
				slug: 'videos',
				icon: 'video-camera',
			},
			{
				name: 'Fãs',
				slug: 'fas',
				icon: 'star',
			},
			{
				name: 'Mensagens',
				slug: 'mensagens',
				icon: 'email',
			},
		];
		this.iconSet2 = [
			{
				name: 'Confiável',
				slug: 'confiavel',
				icon: 'smile',
			},
			{
				name: 'Legal',
				slug: 'legal',
				icon: 'cool',
			},
			{
				name: 'Sexy',
				slug: 'sexy',
				icon: 'heart',
			},
		];
	}
}

interface IIConSet {
  name: string, 
  slug: string, 
  icon: string
}