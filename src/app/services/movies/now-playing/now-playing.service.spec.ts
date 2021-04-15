import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { NowPlayingService } from './now-playing.service';

describe('NowPlayingService', () => {
  let injector: TestBed;
  let testingController: HttpTestingController;
  let service: NowPlayingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        NowPlayingService
      ]
    });
    service = TestBed.inject(NowPlayingService);
    injector = getTestBed();
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
