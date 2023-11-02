import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInfoCardComponent } from './pokemon-info-card.component';

describe('PokemonInfoCardComponent', () => {
  let component: PokemonInfoCardComponent;
  let fixture: ComponentFixture<PokemonInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonInfoCardComponent]
    });
    fixture = TestBed.createComponent(PokemonInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
