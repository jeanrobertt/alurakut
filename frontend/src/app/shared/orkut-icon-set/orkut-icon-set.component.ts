import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orkut-icon-set',
  templateUrl: './orkut-icon-set.component.html',
  styleUrls: ['./orkut-icon-set.component.css']
})
export class OrkutIconSetComponent implements OnInit {
  iconSet1: {name: string, slug: string, icon: string}[] = [];
  iconSet2: {name: string, slug: string, icon: string}[] = [];

  constructor(){}

  ngOnInit(): void {
    this.iconSet1 = [
      {
        name: 'Recados',
        slug: 'recados',
        icon: 'book'
      },
      {
        name: 'Fotos',
        slug: 'fotos',
        icon: 'camera'
      },
      {
        name: 'Videos',
        slug: 'videos',
        icon: 'video-camera'
      },
      {
        name: 'Fãs',
        slug: 'fas',
        icon: 'star'
      },
      {
        name: 'Mensagens',
        slug: 'mensagens',
        icon: 'email'
      },
    ];
    this.iconSet2 = [
      {
        name: 'Confiável',
        slug: 'confiavel',
        icon: 'smile'
      },
      {
        name: 'Legal',
        slug: 'legal',
        icon: 'cool'
      },
      {
        name: 'Sexy',
        slug: 'sexy',
        icon: 'heart'
      },
    ]
  }
}
