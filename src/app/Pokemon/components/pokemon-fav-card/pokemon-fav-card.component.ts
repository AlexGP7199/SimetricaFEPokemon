import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemnonFormComponent } from '../pokemnon-form/pokemnon-form.component';
import { Favorito } from '../../interfaces/pokemon-fav.interface';
import { PokeService } from '../../services/services.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pokemon-fav-card',
  templateUrl: './pokemon-fav-card.component.html',
  styleUrls: ['./pokemon-fav-card.component.css']
})
export class PokemonFavCardComponent {
  @Input() pokemon !: Favorito

  @Output() favPokemonUpdate = new EventEmitter<Favorito>();
  @Output() favPokemonDelete = new EventEmitter<Favorito>();


  constructor(private pokeServ : PokeService, private matDialog : MatDialog) {

  }


  ngOnInit(): void {

  }

  removeFromFav(pokemon : Favorito){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Seguro que quieres Eliminar a " + pokemon.name.toUpperCase() + " de Favoritos?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro!'
    }).then((result) => {
      if (result.isConfirmed) {
        //const date = new Date()
        //let fechaFormted = new Date(format(date, 'dd-MMM-yyyy'));
        this.favPokemonDelete.emit(pokemon);
        Swal.fire(
          'Pokemon Removido !',
          'Pokemon Eliminado de Favoritos.',
          'success'
        )
      }
    })


  }

  updateFavoritePokemon(pokemon : Favorito){
    this.matDialog.open(PokemnonFormComponent,{
      width : 'auto',
      height : 'auto',
      data : pokemon,
      disableClose: true
    }).afterClosed().subscribe((value : Favorito) =>    {
      if(value != undefined){
        Swal.fire(
          'Alias asignado!',
          '',
          'success'
        )
        //console.log("hubo cambio")
        this.favPokemonUpdate.emit(value);
      }else{
        console.log("no hay cambio");
      }

    })
    /*
    Swal.fire({
      title: 'Estas seguro?',
      text: "Seguro que quieres agregar a " + name + "Favoritos?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro!'
    }).then((result) => {
      if (result.isConfirmed) {
        let favPoke : Favorito = {
          name : name,
          alias : "",
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
    }) */
  }
}
