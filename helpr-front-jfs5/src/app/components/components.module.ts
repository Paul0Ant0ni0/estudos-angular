import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule // Adicionado este módulo para fazer o roteamneto no menu
  ],
  exports: [ // Exportando para os que os outros módulos tbm possa utiliza-los
    NavBarComponent
  ]
})
export class ComponentsModule { }
