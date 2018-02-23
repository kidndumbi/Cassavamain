import { ProjectHeaderServiceService } from './shared/Services/project-header-service.service';
import { ProjectSelectComponent } from './project-select/project-select.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyAngularMaterialModule } from './modules/my-angular-material/my-angular-material.module';

import { AppComponent } from './app.component';
import { ChatterHomeComponent } from './Projects/Chatter/Components/chatter-home/chatter-home.component';
import { SpotifySearchHomeComponent } from './Projects/SpotifySearch/Components/spotify-search-home/spotify-search-home.component';
import { appRoutes } from './routing';
import { RouterModule } from '@angular/router';

import {  } from '';
import { ProjectHeaderComponent } from './shared/Components/project-header/project-header.component';
import { ProjectListItemComponent } from './shared/Components/project-list-item/project-list-item.component'

@NgModule({
  declarations: [
    AppComponent,
    ChatterHomeComponent,
    SpotifySearchHomeComponent,
    ProjectSelectComponent,
    ProjectHeaderComponent,
    ProjectListItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MyAngularMaterialModule
  ],
  providers: [ProjectHeaderServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
