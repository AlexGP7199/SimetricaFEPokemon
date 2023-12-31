import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonFavCardComponent } from './Pokemon/components/pokemon-fav-card/pokemon-fav-card.component';


const routes: Routes = [
  {path: '', redirectTo: 'Pokemon', pathMatch: 'full'},
  //{path: '**', redirectTo: 'Pokemon', pathMatch: 'full'},
  {path : 'Pokemon', loadChildren:() => import('./Pokemon/pokemon.module').then((m) => m.PokemonModule)},
  {path: '**', redirectTo: 'Pokemon'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
