import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatterHomeComponent } from './chatter-home.component';

describe('ChatterHomeComponent', () => {
  let component: ChatterHomeComponent;
  let fixture: ComponentFixture<ChatterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
