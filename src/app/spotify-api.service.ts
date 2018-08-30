import { Injectable } from "@angular/core";
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class SpotifyAPIService {
  private searchUrl: string;
  private redirect_uri: string;
  private client_id = "516dfc93cfe24870935c9d7112175615";
  private client_secret = "a7878c184adf45e181275d3d0052da69";
  private access_token: string;

  private encoded = btoa(this.client_id + ':' + this.client_secret);
  private base64 = 'OTk2MDgwOTM3ZWJiNDU5NGEwOTc5MTQ2YzljMGMxMjE6MGJkYTNjZmQyMTNjNDYyMmJjNmM1NjI1ODY1NjhlYzg=';

  constructor(private _http: Http) {

  }
  getToken() {
    var params = ('grant_type=client_credentials');
    var headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.encoded);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post('https://accounts.spotify.com/api/token', params, { headers: headers })
      .map(res => res.json());
  }


  searchAlbums(str: string, token: string) {
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&type=album';
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);

    return this._http.get(this.searchUrl, { headers: headers })
      .map((res: Response) => res.json())
  }

  moodTracks(genre: string, valenceTarget: number, danceabilityTarget: number, tempoMin: number, tempoMax: number, token: string) {
    this.searchUrl = `https://api.spotify.com/v1/recommendations?market=US&seed_genres=${genre.toLowerCase()}&target_danceability=${danceabilityTarget}&limit=21&min_tempo=${tempoMin}&max_tempo=${tempoMax}&target_valence=${valenceTarget}`;    
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);

    return this._http.get(this.searchUrl, { headers: headers })
      .map((res: Response) => res.json())
  }

}


