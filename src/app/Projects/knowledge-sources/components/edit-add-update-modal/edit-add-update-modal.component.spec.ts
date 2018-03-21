import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddUpdateModalComponent } from './edit-add-update-modal.component';

describe('EditAddUpdateModalComponent', () => {
  let component: EditAddUpdateModalComponent;
  let fixture: ComponentFixture<EditAddUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
