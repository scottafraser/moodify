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
  vanlenceSpotifyTarget: number;
  danceabilitySpotifyTarget: number;
  tempoSpotifyMin: number;
  tempoSpotifyMax: number;

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
    this.genre = genre;
    console.log(this.genre);
    let valenceQuizScore = parseInt(q1Answer) + parseInt(q3Answer);
    let danceabilityQuizScore = parseInt(q4Answer) + parseInt(q6Answer);
    let tempoQuizScore = parseInt(q2Answer) + parseInt(q5Answer);

    this.vanlenceSpotifyTarget = (valenceQuizScore / 8.1) + Math.random()/10;
    this.danceabilitySpotifyTarget = (danceabilityQuizScore / 8.1) + Math.random()/10;
    this.tempoSpotifyMin = tempoQuizScore * (18.75) + (Math.random() * 10);
    this.tempoSpotifyMax = tempoQuizScore * (18.75) + (Math.random() * 10) + 100;

    console.log(this.tempoSpotifyMin, this.tempoSpotifyMax)
  }
}
