import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { first, map, switchMap } from 'rxjs/operators';

import { UserdataService } from 'src/app/core/services/userdata.service';
import { actions$ } from 'src/app/store/actions';
@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private store: Store<AppState>,
		private userdataService: UserdataService
	) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return this.store
			.select((state) => state.user)
			.pipe(
				first(),
				switchMap((userdata) => {
					if (route.title === 'user') {
						console.log('user guard activated');
						return of(true);
					} else if (!userdata.isLoggedIn && !route.data['public']) {
						if (userdata.token) {
							return this.verifyToken(userdata.token, state.url);
						} else {
							this.router.navigate(['login']);
							return of(false);
						}
					} else if (userdata.isLoggedIn) {
						if (userdata.token) {
							return this.verifyToken(userdata.token, state.url);
						} else {
							this.router.navigate(['login']);
							return of(false);
						}
					}
					return of(true);
				})
			);
	}

	verifyToken(token: string, url: string) {
		return from(this.userdataService.verifyToken(token)).pipe(
			map((tokenIsValid) => {
				if (tokenIsValid) {
					if (url == '/login') {
						this.router.navigate(['/']);
						return false;
					}
					return true;
				} else {
					this.store.dispatch(actions$.logout());
					this.router.navigate(['/login']);
					return false;
				}
			})
		);
	}
}
