import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { SpotifyAPIService } from './spotify-api.service'
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [SpotifyAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
