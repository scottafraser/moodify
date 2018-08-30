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
  private ArtistUrl: string;
  private AlbumsUrl: string;
  private GenreUrl: string;
  private AlbumUrl: string;
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

    console.log(this.encoded);
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&type=album';
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);

    return this._http.get(this.searchUrl, { headers: headers })
      .map((res: Response) => res.json())
  }

  moodTracks(genre: string, valenceTarget: number, danceabilityTarget: number, tempoMin: number, tempoMax: number, token: string) {

    console.log(this.encoded);
    this.searchUrl = `https://api.spotify.com/v1/recommendations?market=US&seed_genres=${genre.toLowerCase()}&target_danceability=${danceabilityTarget}&limit=21&min_tempo=${tempoMin}&max_tempo=${tempoMax}&target_valence=${valenceTarget}`;

    // this.searchUrl = `https://api.spotify.com/v1/recommendations?market=US&seed_genres=acoustic&target_danceability=0.5494912927359931&min_tempo=78.18716114414627&max_tempo=176.643113448108&target_valence=0.5641090053414818`
    console.log(this.searchUrl);
    
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);

    return this._http.get(this.searchUrl, { headers: headers })
      .map((res: Response) => res.json())
  }

}

// https:api.spotify.com/v1/recommendations?market=US&seed_genres=Acoustic&target_danceability=0.5424963387234651&min_tempo=81.26883129249934&max_tempo=182.70243837063552&target_valence=0.4948070699758
// https:api.spotify.com/v1/recommendations?market=US&seed_genres=acoustic&target_danceability=0.5494912927359931&min_tempo=78.18716114414627&max_tempo=176.643113448108&target_valence=0.5641090053414818`



  // loadGenres(token: string) {
  //   this.GenreUrl = `https://api.spotify.com/v1/recommendations/available-genre-seeds`;
  //   let headers = new Headers();
  //   headers.append('Authorization', 'Bearer ' + token);

  //   return this._http.get(this.GenreUrl, { headers: headers })
  //     .map((res: Response) => res.json())
  // }

  // getArtist(id: string, token: string) {
  //   this.ArtistUrl = 'https://api.spotify.com/v1/artists/' + id;
  //   let headers = new Headers();
  //   headers.append('Authorization', 'Bearer ' + token);

  //   return this._http.get(this.ArtistUrl, { headers: headers })
  //     .map((res: Response) => res.json())

  // }


  // getAlbums(artistId: string, token: string) {

  //   this.AlbumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums/?query=&limit=50';
  //   let headers = new Headers();
  //   headers.append('Authorization', 'Bearer ' + token);

  //   return this._http.get(this.AlbumsUrl, { headers: headers })
  //     .map((res: Response) => res.json())

  // }

  // getAlbum(id: string, token: string) {

  //   this.AlbumUrl = 'https://api.spotify.com/v1/albums/' + id;
  //   let headers = new Headers();
  //   headers.append('Authorization', 'Bearer ' + token);

  //   return this._http.get(this.AlbumUrl, { headers: headers })
  //     .map((res: Response) => res.json())

  // }


