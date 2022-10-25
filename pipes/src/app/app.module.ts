import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComprimentosPipe } from './comprimentos.pipe';
import { FormatarPipe } from './formatar.pipe';
import { CpfPipe } from './cpf.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComprimentosPipe,
    FormatarPipe,
    CpfPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
