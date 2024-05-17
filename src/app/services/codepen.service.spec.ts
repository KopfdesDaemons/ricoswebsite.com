import { TestBed } from '@angular/core/testing';

import { CodepenService } from './codepen.service';

describe('CodepenService', () => {
  let service: CodepenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodepenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
