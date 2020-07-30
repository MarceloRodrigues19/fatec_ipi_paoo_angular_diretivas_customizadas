import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SombraNaTabelaDirective } from './sombra-na-tabela.directive';
import { TestePipesComponent } from './teste-pipes/teste-pipes.component';
import { AlteraCorFundoDirective } from './altera-cor-fundo.directive';

@NgModule({
  declarations: [
    AppComponent,
    SombraNaTabelaDirective,
    TestePipesComponent,
    AlteraCorFundoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
