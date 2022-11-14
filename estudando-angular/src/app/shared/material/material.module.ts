import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  exports: [ // esportando os módulos para o app.module
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,

  ]
})
export class MaterialModule { }
