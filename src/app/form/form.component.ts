import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from '../spotify-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [SpotifyAPIService]
})
export class FormComponent{
  playlist: any[];

  constructor(private spotifyAPI: SpotifyAPIService) {
   

  }
  genre: string
  genres: any[];
  vanlenceSpotifyTarget: number;
  danceabilitySpotifyTarget: number;
  tempoSpotifyMin: number;
  tempoSpotifyMax: number;

  tallyMoodAndSaveGenre(genre: string, q1Answer: string, q2Answer: string, q3Answer: string, q4Answer: string, q5Answer: string, q6Answer: string) {
    this.genre = genre;
    let valenceQuizScore = parseInt(q1Answer) + parseInt(q3Answer);
    let danceabilityQuizScore = parseInt(q4Answer) + parseInt(q6Answer);
    let tempoQuizScore = parseInt(q2Answer) + parseInt(q5Answer);

    this.vanlenceSpotifyTarget = ((valenceQuizScore / 8.1) + Math.random()/10);
    this.danceabilitySpotifyTarget = ((danceabilityQuizScore / 8.1) + Math.random()/10);
    this.tempoSpotifyMin = (tempoQuizScore * (18.75) + (Math.random() * 10));
    this.tempoSpotifyMax = (tempoQuizScore * (18.75) + (Math.random() * 10) + 100);

    this.spotifyAPI.getToken()
    .subscribe(res => {
      this.spotifyAPI.moodTracks(this.genre, this.vanlenceSpotifyTarget, this.danceabilitySpotifyTarget,  this.tempoSpotifyMin , this.tempoSpotifyMax,  res.access_token)
        // tslint:disable-next-line:no-shadowed-variable
        .subscribe(res => {
          this.playlist = res.tracks;
          console.log(this.playlist);
        });
    });
    console.log(this.vanlenceSpotifyTarget, this.danceabilitySpotifyTarget, this.tempoSpotifyMin, this.tempoSpotifyMax)
  }
}

//   checkMusic(url: string) {
//     if (url !== null) {
      
// }
