import { Component } from '@angular/core';
import { Pokemon, Result } from '../../interfaces/pokemon.interface';
import { PokeService } from '../../services/services.service';
import { Favorito } from '../../interfaces/pokemon-fav.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  //public pokemonL !: Pokemon;
  public pokemonList !: Result[];
  public actualPage : number = 1;
  public totalPage : number = 0;

  private limit : number = 100;
  private offset : number = 0;

  private inc : number = 100;



  constructor(private pokeService : PokeService) {}

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit(): void {
    this.pokeService.setPokesFavFromSession();
    this.getPokemonList();

  }
  saveInFavPoke(favPoke : Favorito){
    this.pokeService.addFavPokemon(favPoke);
    this.getPokemonList();
  }
  getPokemonList(){
    this.pokeService.getPokemonListPaginated(this.limit,this.offset).subscribe({
      next : (res: Pokemon) => {
        //console.log("traje" + JSON.stringify(res));
        this.totalPage = Math.floor(res.count/this.inc);
        this.pokemonList = res.results;

      }
    })
  }

  prevPage(){
    if(this.actualPage > 1){
      this.offset -= this.inc;
      this.getPokemonList()
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
      this.getPokemonList();
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
