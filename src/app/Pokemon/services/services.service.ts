import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorito } from '../interfaces/pokemon-fav.interface';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { apiURL } from 'src/environments/apirlUrl';
import { PokemonInfo } from '../interfaces/pokemon-info-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private pokeFav : Favorito[] = [];

  constructor(private http : HttpClient) {}

  get pokemenFavList(){
    return this.pokeFav;
  }

  updateFavPokemon(data : Favorito){
    for(let i = 0; i < this.pokeFav.length; i++){
      console.log(this.pokeFav[i]);
      if(data.id == this.pokeFav[i].id){
        console.log(this.pokeFav[i]);
        this.pokeFav[i].alias = data.alias;
        const pokeFavToStorage = JSON.stringify(this.pokeFav);
        sessionStorage.setItem('favoritos',pokeFavToStorage);
      }
    }
  }

  removeFavPokemon(pokemon : Favorito){
    for(let i = 0; i < this.pokeFav.length; i++){
      console.log(this.pokeFav[i]);
      if(pokemon.id == this.pokeFav[i].id){
        //console.log(this.pokeFav[i]);
        this.pokeFav.splice(i,1);
        const pokeFavToStorage = JSON.stringify(this.pokeFav);
        sessionStorage.setItem('favoritos',pokeFavToStorage);
      }
    }
  }
  setPokesFavFromSession(){
    const favoritos = sessionStorage.getItem('favoritos');
    if(favoritos){
      this.pokeFav = JSON.parse(favoritos);
    }
  }

   addFavPokemon(data : Favorito){
    const favoritos = sessionStorage.getItem('favoritos');
    if(favoritos){
      this.pokeFav = JSON.parse(favoritos);
      this.pokeFav.push(data);
      const pokeFavToStorage = JSON.stringify(this.pokeFav)
      sessionStorage.setItem('favoritos',pokeFavToStorage);
    }
    else{
      this.pokeFav.push(data);
      const pokeFavToStorage = JSON.stringify(this.pokeFav);
      sessionStorage.setItem('favoritos',pokeFavToStorage);
    }
    console.log(favoritos);
   }

   validateIsAFav(id: number):boolean{
      for(let i = 0; i<this.pokeFav.length; i++){
          if(this.pokeFav[i].id == id){
            return true;
          }
      }return false;
   }

   getPokemonListPaginated(limit: number, offset: number):Observable<Pokemon>{
    return this.http.get<Pokemon>(
      apiURL + "/pokemon?limit="+limit+"&offset="+offset
    )
   }

   getPokemonInfo(name:string):Observable<PokemonInfo>{
    return this.http.get<PokemonInfo>(
      apiURL + '/pokemon/'+name
    )
   }
}
