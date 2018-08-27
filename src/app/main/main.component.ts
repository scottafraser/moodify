import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from '../spotify-api.service'
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  artist= "Bob Dylan"
  albums: any[];
  noPhotos: boolean=false;

  constructor(private spotifyAPI: SpotifyAPIService)
  {
    this.spotifyAPI.login()
      .subscribe(() => {
        this.searchAlbums(this.artist);
      });
    }

    searchAlbums(author: string) {
      this.spotifyAPI.searchAlbums(author)
        .subscribe(res => this.albums = res.albums.items)
    }

  ngOnInit() {
    this.albums=null;
    this.spotifyAPI.searchAlbums(this.artist).subscribe(response => {
      if(response.json().albums.length > 0) {
        this.albums = response.json();
      }
    });
  }
}


