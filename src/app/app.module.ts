import { DataServiceService } from './shared/Services/data-service.service';
import { DiceComponent } from './Projects/DiceRoll/dice/dice.component';
import { DiceFrequencyComponent } from './Projects/DiceRoll/dice-frequency/dice-frequency.component';
import { ProjectSelectComponent } from './project-select/project-select.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { MyAngularMaterialModule } from './modules/my-angular-material/my-angular-material.module';

import { AppComponent } from './app.component';
import { ChatterHomeComponent } from './Projects/Chatter/Components/chatter-home/chatter-home.component';
import { SpotifySearchHomeComponent } from './Projects/SpotifySearch/Components/spotify-search-home/spotify-search-home.component';
import { appRoutes } from './routing';
import { RouterModule } from '@angular/router';

import { ProjectHeaderComponent } from './shared/Components/project-header/project-header.component';
import { ProjectListItemComponent } from './shared/Components/project-list-item/project-list-item.component'
import { RollDiceComponent } from './Projects/DiceRoll/roll-dice.component';
import { RollDiceService } from './Projects/DiceRoll/Services/roll-dice.service';
import { HttpClientModule } from '@angular/common/http';
import { KnowledgeSourcesComponent } from './Projects/knowledge-sources/knowledge-sources.component';
import { KnowledgeService } from './Projects/knowledge-sources/Services/knowledge.service';
import { EditAddUpdateModalComponent } from './Projects/knowledge-sources/components/edit-add-update-modal/edit-add-update-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatterHomeComponent,
    SpotifySearchHomeComponent,
    ProjectSelectComponent,
    ProjectHeaderComponent,
    ProjectListItemComponent,
    RollDiceComponent,
    DiceFrequencyComponent,
    DiceComponent,
    KnowledgeSourcesComponent,
    EditAddUpdateModalComponent,

    
  ],
  entryComponents: [EditAddUpdateModalComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MyAngularMaterialModule,
    FormsModule
  ],
  providers: [
    RollDiceService, DataServiceService, KnowledgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
