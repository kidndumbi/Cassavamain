import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifySearchHomeComponent } from './spotify-search-home.component';

describe('SpotifySearchHomeComponent', () => {
  let component: SpotifySearchHomeComponent;
  let fixture: ComponentFixture<SpotifySearchHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifySearchHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifySearchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
