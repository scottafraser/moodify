import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpotifyApiService {

  constructor(private http: Http) { }

}

// getAuth() {
//   return this.http.get(`https://accounts.spotify.com/authorize`)
// };