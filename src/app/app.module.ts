import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { PokemonsModule } from './pokemons/pokemons.module'
import { PageNotFoundComponent } from './page-not-found.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
      BrowserModule,
      HttpClientModule,
      PokemonsModule,
      AppRoutingModule
    ],
  declarations: [
      AppComponent,
      PageNotFoundComponent
      ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
