import { Component } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { SpotifyAPIService } from './spotify-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
