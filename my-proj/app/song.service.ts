import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Song } from './song';

@Injectable()
export class SongService {
	
	private songsUrl = 'api/songs';
	private headers = new Headers({'Content-Type': 'application/json'});
	
	constructor(private http: Http) { }
	
	//http.get palauttaa RxJS Observablen
	//Jokainen Http service palauttaa Observablen
	//SongService muuntaa Observablen Promiseksi
	//Kutsujalle palautetaan promise
	getSongs(): Promise<Song>[]
	{
		return this.http.get(this.songsUrl)
			.toPromise()
			//Promisen then-callbackissa
			//Kutsutaan HTTP Responsen json-metodia --> Saadaan responsen data haetuksi
			//data-ominaisuus sisältää arrayn Song-olioista
			.then(response => response.json().data as Song[])
			//Catchataan serverin failuret ja heitetään ne error handleriin
			.catch(this.handleError);
	}
	
	
	getSong(id: number): Promise<Song> 
	{
		const url = '${this.songsUrl}/${id}';
		
		return this.http.get(url)
			.toPromise()
			.then(response => response.json().data as Song)
			.catch(this.handleError);
	}
	
	update(song: Song): Promise<Song> {
		//Määritellään mikä song serverin pitää päivittää --> Enkoodataan song id URL:iin
		const url = `${this.songsUrl}/${song.id}`;
		return this.http
			//Käytetään put-metodia, jotta muutokset säilyisivät server puolella
			//Parametrit:
			//URL = Mikä song serverin pitäisi päivittää
			//Body = Song-olio JSON string enkoodattuna
			//Body Content-Type = Määritellään request headerissa
			.put(url, JSON.stringify(song), {headers: this.headers})
			.toPromise()
			.then(() => song)
			.catch(this.handleError);
	}
	
	create(artist: string, name: string): Promise<Song> {
		return this.http
			.post(this.songsUrl, JSON.stringify({artist: artist, name: name}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}
	
	delete(id: number): Promise<void> {
		const url = `${this.songsUrl}/${id}`;
		
		return this.http.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}
	
		private handleError(error: any): Promise<any> 
	{
		console.error('An error occured', error);
		return Promise.reject(error.message || error);
	}
}