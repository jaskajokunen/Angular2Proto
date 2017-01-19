import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { SongComponent } from './song.component';
import { SongInfoComponent } from './song_info.component';

const routes: Routes = [
	{ 	path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ 	path: 'dashboard',  component: DashboardComponent },
	{	path: 'songs',     component: SongComponent },
	{	path: 'song_info/:id',     component: SongInfoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}