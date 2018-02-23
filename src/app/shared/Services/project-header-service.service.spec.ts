import { TestBed, inject } from '@angular/core/testing';

import { ProjectHeaderServiceService } from './project-header-service.service';

describe('ProjectHeaderServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectHeaderServiceService]
    });
  });

  it('should be created', inject([ProjectHeaderServiceService], (service: ProjectHeaderServiceService) => {
    expect(service).toBeTruthy();
  }));
});
