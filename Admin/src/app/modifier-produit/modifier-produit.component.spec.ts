import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProduitComponent } from './modifier-produit.component';

describe('ModifierProduitComponent', () => {
  let component: ModifierProduitComponent;
  let fixture: ComponentFixture<ModifierProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierProduitComponent]
    });
    fixture = TestBed.createComponent(ModifierProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
