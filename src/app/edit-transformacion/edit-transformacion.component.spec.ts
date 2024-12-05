import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransformacionComponent } from './edit-transformacion.component';

describe('EditTransformacionComponent', () => {
  let component: EditTransformacionComponent;
  let fixture: ComponentFixture<EditTransformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTransformacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTransformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
