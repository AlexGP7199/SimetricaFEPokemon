import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPageComponent } from './pages.component';

describe('PokemonPageComponent', () => {
  let component: PokemonPageComponent;
  let fixture: ComponentFixture<PokemonPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonPageComponent]
    });
    fixture = TestBed.createComponent(PokemonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});