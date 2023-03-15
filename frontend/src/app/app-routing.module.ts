import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		title: 'login',
		path: 'login',
		loadChildren: () =>
			import('src/app/modules/login/login.module').then(
				(m) => m.LoginModule
			),
		data: {
			public: true,
		},
		canActivate: [AuthGuard],
	},
	{
		title: 'home',
		path: '',
		loadChildren: () =>
			import('src/app/modules/home/home.module').then(
				(m) => m.HomeModule
			),
		data: {
			public: false,
		},
		canActivate: [AuthGuard],
	},
	{
		title: 'user',
		path: 'u/:user',
		loadChildren: () =>
			import('src/app/modules/users/users.module').then(
				(m) => m.UsersModule
			),
		data: {
			public: false,
		},
		canActivate: [AuthGuard],
	},
	{
		title: 'communities',
		path: 'communities',
		loadChildren: () =>
			import('./modules/communities/communities.module').then(
				(m) => m.CommunitiesModule
			),
		data: {
			public: false,
		},
	},
	{
		title: 'community',
		path: 'community/:id',
		loadChildren: () =>
			import('./modules/communities/communities.module').then(
				(m) => m.CommunitiesModule
			),
		data: {
			public: false,
		},
	},
	{
		path: 'error',
		loadChildren: () =>
			import('./modules/error-page/error-page.module').then(
				(m) => m.ErrorPageModule
			),
		data: {
			public: false,
		},
		canActivate: [AuthGuard],
	},
	{
		path: '**',
		redirectTo: 'error',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
