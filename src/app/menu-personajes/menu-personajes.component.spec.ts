import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPersonajesComponent } from './menu-personajes.component';

describe('MenuPersonajesComponent', () => {
  let component: MenuPersonajesComponent;
  let fixture: ComponentFixture<MenuPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuPersonajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
