import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarKiComponent } from './editar-ki.component';

describe('EditarKiComponent', () => {
  let component: EditarKiComponent;
  let fixture: ComponentFixture<EditarKiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarKiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarKiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
