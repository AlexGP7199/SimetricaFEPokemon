import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFavListComponent } from './pokemon-fav-list.component';

describe('PokemonFavListComponent', () => {
  let component: PokemonFavListComponent;
  let fixture: ComponentFixture<PokemonFavListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonFavListComponent]
    });
    fixture = TestBed.createComponent(PokemonFavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
