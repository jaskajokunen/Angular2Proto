import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Song } from './song';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let songs = [
			new Song(1, "Upon A Burning Body", "My Distorted Reflection"),
			new Song(2, "Crown The Empire", "Zero"),
			new Song(3, "Memphis May Fire", "Speechless"),
			new Song(4, "Bullet For My Valentine", "Your Betrayal"),
			new Song(5, "Bullet For My Valentine", "You Want a Battle?(Here's a war)"),
			new Song(6, "Trivium", "Until The World Goes Cold"),
			new Song(7, "Trivium", "Strife"),
			new Song(8, "All That Remains", "Two Weeks"),
			new Song(9, "Five Finger Death Punch", "Wrong Side of Heaven"),
			new Song(10, "As I Lay Dying", "The Sound Of Truth")
		];
		return {songs};
	}
}