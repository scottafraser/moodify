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
  artist = "Bob Dylan"
  albums: any[];

  constructor(private spotifyAPI: SpotifyAPIService) {}

    ngOnInit() {
      this.albums= [];
      this.spotifyAPI.searchAlbums(this.artist).subscribe(response => {
        console.log(response.albums.items)
        if(response.albums.items.length > 0) {
          this.albums = response;    
        }
      });
    }

    searchAlbums(author: string) {
      this.spotifyAPI.searchAlbums(author)
        .subscribe(res => this.albums = res.albums.items)
    }


}


