import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/user';

@Component({
	selector: 'app-alurakut-profile-sidebar',
	templateUrl: './alurakut-profile-sidebar.component.html',
	styleUrls: ['./alurakut-profile-sidebar.component.css']
})
export class AlurakutProfileSidebarComponent implements OnInit {
	userdata$!: IUser;
	constructor(private store: Store<AppState>) { }
  
	ngOnInit(): void {
		this.store.select(state => state.user!).subscribe(data => this.userdata$ = data.userdata!);
	}
}
