import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule

  ],
  exports: [MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule, MatMenuModule,MatChipsModule, MatCardModule]
  ,

  declarations: []
})
export class MyAngularMaterialModule { }
