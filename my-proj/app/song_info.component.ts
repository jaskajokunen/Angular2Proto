import 'rxjs/add/operator/switchMap';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Song } from './song';
import { SongService } from './song.service';

@Component({
	moduleId: module.id,
	selector: 'song_info',
	templateUrl: 'song_info.component.html',
	styleUrls: ['song_info.component.css']
})



export class SongInfoComponent implements OnInit  {
	
	song: Song;
	
	constructor(
		private songService: SongService,
		private route: ActivatedRoute,
		private location: Location) {}
	
	
	ngOnInit(): void {
		/*
		this.route.params
			.switchMap((params: Params) => this.songService.getSong(+params['id']))
			.subscribe(song => this.song = song);
			*/
	}
		
  
}
