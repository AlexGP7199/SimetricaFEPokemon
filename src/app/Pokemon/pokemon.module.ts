import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonPageComponent } from './pages/pages.component';
import { HeaderModule } from './components/header/header.module';
import { SideNavModule } from './components/side-nav/side-nav.module';
import { SharedModule } from './shared/shared.module';
import { PokemonInfoCardComponent } from './components/pokemon-info-card/pokemon-info-card.component';
import { PokemonFavCardComponent } from './components/pokemon-fav-card/pokemon-fav-card.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonFavListComponent } from './pages/pokemon-fav-list/pokemon-fav-list.component';
import { PokemnonFormComponent } from './components/pokemnon-form/pokemnon-form.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PokemonPageComponent,
    PokemonInfoCardComponent,
    PokemonFavCardComponent,
    PokemonListComponent,
    PokemonFavListComponent,
    PokemnonFormComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    HeaderModule,
    SideNavModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports : [
    PokemonPageComponent,
    SideNavModule,
    SharedModule,
    HttpClientModule,
    HeaderModule,
  ]
})
export class PokemonModule { }
