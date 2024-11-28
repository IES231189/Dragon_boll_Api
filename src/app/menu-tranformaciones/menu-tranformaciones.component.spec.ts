import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTranformacionesComponent } from './menu-tranformaciones.component';

describe('MenuTranformacionesComponent', () => {
  let component: MenuTranformacionesComponent;
  let fixture: ComponentFixture<MenuTranformacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuTranformacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTranformacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
