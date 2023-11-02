import { Component } from '@angular/core';
import { PokeService } from '../../services/services.service';
import { Favorito } from '../../interfaces/pokemon-fav.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pokemon-fav-list',
  templateUrl: './pokemon-fav-list.component.html',
  styleUrls: ['./pokemon-fav-list.component.css']
})
export class PokemonFavListComponent {

  public pokemonList !: Favorito[];
  public actualPage : number = 1;
  public totalPage : number = 0;

  private limit : number = 100;
  private offset : number = 0;

  private inc : number = 100;

  constructor(private pokeService : PokeService) {}

  ngOnInit(): void {
    this.pokeService.setPokesFavFromSession();
    this.pokemonList = this.pokeService.pokemenFavList;
    //this.actualPage = this.pokemonList.length;
    this.calcPages();
  }

  calcPages(){
    this.totalPage = Math.floor(this.pokemonList.length/this.limit);
    if(this.totalPage < 1){
      this.totalPage = 1;
    }
    //console.log(this.totalPage);
  }

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  updateFavPoke(favPoke : Favorito){
      this.pokeService.updateFavPokemon(favPoke);
      this.pokemonList = this.pokeService.pokemenFavList;
  }

  deleteFavPoke(favPoke : Favorito){
      this.pokeService.removeFavPokemon(favPoke);
      this.pokemonList = this.pokeService.pokemenFavList;
  }

  prevPage(){
    if(this.actualPage > 1){
      this.offset -= this.inc;
      this.pokemonList = this.pokeService.pokemenFavList;
      this.actualPage -=1;
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No puedes retroceder mas!',
      })
    }

  }
  nextPage(){
    if(this.actualPage < this.totalPage){
      this.offset += this.inc;
      this.pokemonList = this.pokeService.pokemenFavList;
      this.actualPage +=1;
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No puedes avanzar mas!'
      })
    }

  }


}
