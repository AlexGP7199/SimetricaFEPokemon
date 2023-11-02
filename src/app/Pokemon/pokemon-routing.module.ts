import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonFavListComponent } from './pages/pokemon-fav-list/pokemon-fav-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'PokemonList', pathMatch: 'full'},
  {path: 'PokemonList', component: PokemonListComponent},
  {path: 'PokemonFavList', component: PokemonFavListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
