import { KnowledgeSourcesComponent } from './Projects/knowledge-sources/knowledge-sources.component';
import { RollDiceComponent } from './Projects/DiceRoll/roll-dice.component';
import { ChatterHomeComponent } from './Projects/Chatter/Components/chatter-home/chatter-home.component';
import { ProjectSelectComponent } from './project-select/project-select.component';
import {  Routes } from '@angular/router';
import { SpotifySearchHomeComponent } from './Projects/SpotifySearch/Components/spotify-search-home/spotify-search-home.component';

export const appRoutes: Routes = [

    {
        path: '',
        redirectTo: '/projectSelect',
        pathMatch: 'full'
    },
    {
        path: 'projectSelect',
        component: ProjectSelectComponent
    },
    {
        path: 'shopifySearch',
        component: SpotifySearchHomeComponent
    },
    {
        path: 'chatter',
        component: ChatterHomeComponent
    },
    {
        path: 'rollDice',
        component: RollDiceComponent
    },
    ,
    {
        path: 'knowledge',
        component: KnowledgeSourcesComponent
    },
    
    {
        path: '**',
        component: ProjectSelectComponent
    }
];