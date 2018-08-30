import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from '../spotify-api.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Http, Response } from '@angular/http';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [SpotifyAPIService]
})
export class MainComponent {
  artist: any[];
  genres: any[];
  albums: any[];
  token: any[];
  messages = this.http.get<any[]>('http://localhost:8888/');

  constructor(
    public spotifyAPI: SpotifyAPIService,
    private http: HttpClient
  ) {}

  searchAlbums(artist: string) {
    this.spotifyAPI.getToken()
      .subscribe(res => {
        this.spotifyAPI.searchAlbums(artist, res.access_token)
          // tslint:disable-next-line:no-shadowed-variable
          .subscribe(res => {
            this.albums = res.albums.items;
            console.log(this.albums);
          });
      });
    }



}
