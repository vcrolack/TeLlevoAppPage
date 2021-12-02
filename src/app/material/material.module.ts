import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule, MatToolbarRow} from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
