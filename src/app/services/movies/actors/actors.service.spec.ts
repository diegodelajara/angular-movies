import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { ActorsService } from './actors.service';

describe('ActorsService', () => {
  let injector: TestBed;
  let testingController: HttpTestingController;
  let service: ActorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ActorsService
      ]
    });
    service = TestBed.inject(ActorsService);
    injector = getTestBed();
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
