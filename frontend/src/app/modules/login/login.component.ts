import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserdataService } from 'src/app/core/services/userdata.service';
import { AppState } from 'src/app/store/reducers';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent {
	githubUser: string = '';
	msg: string = 'Preencha o campo!';
	userError: boolean = false;

	constructor(private userdataService: UserdataService, private router: Router, private store: Store<AppState>) {}
	
	async login(event: Event) {
		event.preventDefault();
		if (this.githubUser.length !== 0) {
			this.githubUser = this.githubUser.toLowerCase();
			console.log(this.githubUser);
			try {
				const loginSuccess = await this.userdataService.login(this.githubUser, true);
				
				if (loginSuccess) {
					this.router.navigate(['/'])
				} else {
					this.msg = "Usuário inválido.";
					this.userError = true;
				}
			} catch (error) {
				console.log(error);
				this.msg = "Falha ao realizar login";
				this.userError = true;
				
			}
		}
	}
}