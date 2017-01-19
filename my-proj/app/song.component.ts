import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Song } from './song';
import { SongService } from './song.service';

@Component({
	moduleId: module.id,
	selector: 'my-songs',
	templateUrl: 'song.component.html',
	styleUrls: ['song.component.css']
})



export class SongComponent implements OnInit  {
	
	songs: Song[]; 
	selectedSong: Song;
	
	constructor(
		private songService: SongService,
		private router: Router) {}
		
	getSongs(): void {
		this.songService
			.getSongs()
			.then(serviceSongs => this.songs = serviceSongs);
	}
	
	add(artist: string, name: string) : void {
		artist = artist.trim();
		name = name.trim();
		if (!artist && !name) { return; }
		this.songService.create(artist,name)
			.then(song => {
				this.songs.push(song);
				this.selectedSong = null;
			});
	}
	
	
	ngOnInit(): void {
		this.getSongs();
	}

	delete(song: Song): void {
		this.songService
			.delete(song.id)
			.then(() => {
				this.songs = this.songs.filter(s => s !== song);
				if(this.selectedSong === song) { this.selectedSong = null};
			});
			
	}
  
}
