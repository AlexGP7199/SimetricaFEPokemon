import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemnonFormComponent } from './pokemnon-form.component';

describe('PokemnonFormComponent', () => {
  let component: PokemnonFormComponent;
  let fixture: ComponentFixture<PokemnonFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemnonFormComponent]
    });
    fixture = TestBed.createComponent(PokemnonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
