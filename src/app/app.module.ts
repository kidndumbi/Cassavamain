import { AuthService } from './services/auth.service';
import { DataServiceService } from './shared/Services/data-service.service';
import { DiceComponent } from './Projects/DiceRoll/dice/dice.component';
import { DiceFrequencyComponent } from './Projects/DiceRoll/dice-frequency/dice-frequency.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { MyAngularMaterialModule } from './modules/my-angular-material/my-angular-material.module';

import { AppComponent } from './app.component';


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
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectHeaderComponent,
    ProjectListItemComponent,
    RollDiceComponent,
    DiceFrequencyComponent,
    DiceComponent,
    KnowledgeSourcesComponent,
    EditAddUpdateModalComponent,
    LoginComponent,

    
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
    RollDiceService, DataServiceService, KnowledgeService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
