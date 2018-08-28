import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserformComponent } from './userform/userform.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
