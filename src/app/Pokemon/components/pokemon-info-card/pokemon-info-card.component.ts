import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Favorito } from '../../interfaces/pokemon-fav.interface';
import { PokemonInfo } from '../../interfaces/pokemon-info-detail.interface';
import { PokeService } from '../../services/services.service';
import { Result } from '../../interfaces/pokemon.interface';
import Swal from 'sweetalert2';
import { format } from 'date-fns';

@Component({
  selector: 'app-pokemon-info-card',
  templateUrl: './pokemon-info-card.component.html',
  styleUrls: ['./pokemon-info-card.component.css']
})
export class PokemonInfoCardComponent {

  @Input() pokemon !: Result

  @Output() favPokemonName = new EventEmitter<Favorito>();




  public urlPoke : string = "";
  public isAFavPoke : boolean = false;
  public noOrder : number = 0;
  //private order : number =0;
  constructor(private pokeServ : PokeService) {
  }


  ngOnInit(): void {


    this.pokeServ.getPokemonInfo(this.pokemon.name).subscribe({
      next : (res : PokemonInfo) => {
        this.noOrder= res.order;
        this.isAFavPoke = this.pokeServ.validateIsAFav(this.noOrder);
        this.urlPoke= res.sprites.front_default;
        //this.order = res.order;
        //console.log(this.urlPoke);
      }
    })
  }

  saveAsFavorite(name : string){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Seguro que quieres agregar a " + name.toUpperCase() + " Favoritos?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro!'
    }).then((result) => {
      if (result.isConfirmed) {
        //const date = new Date()
        //let fechaFormted = new Date(format(date, 'dd-MMM-yyyy'));
        let favPoke : Favorito = {
          id : this.noOrder,
          name : name,
          alias : "Sin Apodo",
          createdAt : new Date(),
          url : this.urlPoke
        }
        this.favPokemonName.emit(favPoke);
        Swal.fire(
          'Pokemon Guardado !',
          'Pokemon Guardado en Favoritos.',
          'success'
        )
      }
    })
  }
}
