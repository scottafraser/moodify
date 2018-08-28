import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from '../spotify-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [SpotifyAPIService]
})
export class FormComponent implements OnInit {

  constructor(private spotifyAPI: SpotifyAPIService) {

  }
  genre: string
  genres: any[];

  ngOnInit() {

    this.genres= [];
    this.spotifyAPI.loadGenres().subscribe(response => {
      console.log(response);

      if(response.albums.items.length > 0) {
        this.genres = response.genres;

      }
    });
  }

  tallyMoodAndSaveGenre(genre: string, q1Answer: string, q2Answer: string, q3Answer: string, q4Answer: string, q5Answer: string, q6Answer: string) {
    this.genre = genre
    console.log(this.genre)
  }

}
