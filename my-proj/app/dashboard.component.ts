import { Component, OnInit } from '@angular/core';

import { Song } from './song';
import { SongService } from './song.service';

	
@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit { 

	songs: Song[] = [];
	
	constructor(private songService: SongService) { }
	
	ngOnInit(): void {
		this.songService.getSongs()
			.then(serviceSongs => this.songs = serviceSongs.slice(1,5));
	}

}