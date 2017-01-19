import { Component } from '@angular/core';
import { Song } from './song';

@Component({
  selector: 'song-container',
  template: `
	<div id="song_container">
		<div *ngFor="let song of songs" class="item_container">
			<p>{{song.artist}}</p>
			<p>{{song.name}}</p>
		</div>
	</div>
  `
})

export class SongContainerComponent {
	componentName 'SongContainerComponent';
	
		songs: Song[] = [
		new Song(1, "Upon A Burning Body", "My Distorted Reflection"),
		new Song(2, "Crown The Empire", "Zero"),
		new Song(3, "Crown The Empire", "Zero"),
		new Song(4, "Crown The Empire", "Zero"),
		new Song(5, "Crown The Empire", "Zero"),
		new Song(6, "Crown The Empire", "Zero"),
		new Song(7, "Crown The Empire", "Zero"),
		new Song(8, "Crown The Empire", "Zero")
	];
	
}