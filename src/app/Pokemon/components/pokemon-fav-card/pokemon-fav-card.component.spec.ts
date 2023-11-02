import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFavCardComponent } from './pokemon-fav-card.component';

describe('PokemonFavCardComponent', () => {
  let component: PokemonFavCardComponent;
  let fixture: ComponentFixture<PokemonFavCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonFavCardComponent]
    });
    fixture = TestBed.createComponent(PokemonFavCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
