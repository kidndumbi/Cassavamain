import { LoginComponent } from './components/login/login.component';
import { KnowledgeSourcesComponent } from './Projects/knowledge-sources/knowledge-sources.component';
import { RollDiceComponent } from './Projects/DiceRoll/roll-dice.component';
import {  Routes } from '@angular/router';


export const appRoutes: Routes = [

    {
        path: '',
        redirectTo: '/projectSelect',
        pathMatch: 'full'
    },
    {
        path: 'rollDice',
        component: RollDiceComponent
    },
    {
        path: 'knowledge',
        component: KnowledgeSourcesComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];