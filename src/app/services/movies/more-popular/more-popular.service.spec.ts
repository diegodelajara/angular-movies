import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { MorePopularService } from './more-popular.service';

describe('MorePopularService', () => {
  let injector: TestBed;
  let testingController: HttpTestingController;
  let service: MorePopularService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MorePopularService
      ]
    });
    service = TestBed.inject(MorePopularService);
    injector = getTestBed();
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
