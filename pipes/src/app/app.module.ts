import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComprimentosPipe } from './comprimentos.pipe';
import { FormatarPipe } from './formatar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComprimentosPipe,
    FormatarPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
