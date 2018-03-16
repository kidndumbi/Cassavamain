import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeSourcesComponent } from './knowledge-sources.component';

describe('KnowledgeSourcesComponent', () => {
  let component: KnowledgeSourcesComponent;
  let fixture: ComponentFixture<KnowledgeSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
