import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from '../spotify-api.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [SpotifyAPIService]
})
export class MainComponent implements OnInit {
  artist = 'bob dylan';
  albums: any[];

  constructor(
    public spotifyAPI: SpotifyAPIService
  ) {}

  ngOnInit() {
      this.spotifyAPI.searchAlbums(this.artist)
        .subscribe(res => this.albums = res.albums.items);

    }


}


