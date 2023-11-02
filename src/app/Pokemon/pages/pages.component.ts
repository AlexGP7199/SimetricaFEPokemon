import { Component } from '@angular/core';

@Component({
  selector: 'pokemon-page',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PokemonPageComponent {

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
