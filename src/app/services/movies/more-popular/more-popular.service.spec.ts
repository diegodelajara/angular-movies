import { TestBed } from '@angular/core/testing';

import { MorePopularService } from './more-popular.service';

describe('MorePopularService', () => {
  let service: MorePopularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MorePopularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
