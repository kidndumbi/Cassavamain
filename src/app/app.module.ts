import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyAngularMaterialModule } from './modules/my-angular-material/my-angular-material.module';

import { AppComponent } from './app.component';
import { ChatterHomeComponent } from './Projects/Chatter/Components/chatter-home/chatter-home.component';
import { SpotifySearchHomeComponent } from './Projects/SpotifySearch/Components/spotify-search-home/spotify-search-home.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatterHomeComponent,
    SpotifySearchHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyAngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
