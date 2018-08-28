import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from '../spotify-api.service'
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [SpotifyAPIService]
})
export class MainComponent implements OnInit {
  artist;
  albums: any[];

  constructor(private spotifyAPI: SpotifyAPIService) {
    this.spotifyAPI.login()
    .subscribe(() => {
      this.searchAlbums(this.artist);
    });
  }

  ngOnInit() {
    this.spotifyAPI.login()
    console.log('hey');
    
  };

    searchAlbums(author: string) {
      this.spotifyAPI.searchAlbums(author)
        .subscribe(res => this.albums = res.albums.items)
        console.log('hey', this.albums);
        
    }


}


