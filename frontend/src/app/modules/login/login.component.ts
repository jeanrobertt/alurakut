import { Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { UserdataService } from 'src/app/core/services/userdata.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent {
	githubUser: string = '';
	msg: string = 'Preencha o campo!';
	userError: boolean = false;
	libBaseURL: string;

	constructor(
		private userdataService: UserdataService,
		private router: Router,
		@Inject('LIB_BASE_URL') libURL: string
	) {
		this.libBaseURL = libURL;
	}

	async login(event: Event) {
		event.preventDefault();
		if (this.githubUser.length !== 0) {
			this.githubUser = this.githubUser.toLowerCase();
			console.log(this.githubUser);
			try {
				const loginSuccess = await this.userdataService.login(
					this.githubUser,
					true
				);

				if (loginSuccess) {
					this.router.navigate(['/']);
				} else {
					this.msg = 'Usuário inválido.';
					this.userError = true;
				}
			} catch (error) {
				console.log(error);
				this.msg = 'Falha ao realizar login';
				this.userError = true;
			}
		}
	}
}