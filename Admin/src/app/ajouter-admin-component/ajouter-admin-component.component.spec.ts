import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAdminComponentComponent } from './ajouter-admin-component.component';

describe('AjouterAdminComponentComponent', () => {
  let component: AjouterAdminComponentComponent;
  let fixture: ComponentFixture<AjouterAdminComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterAdminComponentComponent]
    });
    fixture = TestBed.createComponent(AjouterAdminComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
