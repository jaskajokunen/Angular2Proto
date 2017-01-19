import { Component } from '@angular/core';


//routerLink = Tells the router where to navigate when the user clicks the link

@Component({
	moduleId: module.id,
	selector: 'my-app',
	template: `
		<div class="tab_container">
			<div class="tab_child">
				<a [routerLink]="['/dashboard']">Dashboard</a>
			</div>
			<div class="tab_child">
				<a [routerLink]="['/songs']">Songs</a>
			</div>
			<div class="tab_child">Tab3</div>
		</div>
		<h1>{{title}}</h1>
		<router-outlet></router-outlet>
	  `
})

export class AppComponent {
	title = 'My songs';
}