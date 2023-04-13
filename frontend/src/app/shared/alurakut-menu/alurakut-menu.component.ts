import { UserdataService } from 'src/app/core/services/userdata.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-alurakut-menu',
  templateUrl: './alurakut-menu.component.html',
  styleUrls: ['./alurakut-menu.component.css']
})
export class AlurakutMenuComponent implements OnInit {
  libBaseURL: string;
  isMenuOpen!: boolean;
  v!: string;
  menuItems!: { name: string, slug: string }[];

  constructor(private userdataService: UserdataService, @Inject('LIB_BASE_URL') libURL: string) {
    this.libBaseURL = libURL;
  }
  
  ngOnInit(): void {
    this.isMenuOpen = false;
    this.v = '1';
    this.menuItems = [
      {
        name: 'Inicio',
        slug: '/'
      },
      {
        name: 'Amigos',
        slug: '/amigos'
      },
      {
        name: 'Comunidades',
        slug: '/communities'
      }
    ];
  }

  logout(): void {
    this.userdataService.logout()
  }
}
