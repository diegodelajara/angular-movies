import { TestBed, getTestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { LoginService } from './login.service';

describe('LoginService', () => {
  let injector: TestBed;
  let testingController: HttpTestingController;
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [HttpClientTestingModule],
      providers: [
        LoginService
      ]
    });
    service = TestBed.inject(LoginService);
    injector = getTestBed();
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAuth() should POST and return data', () => {
    const username: string = '';
    const password: string = '';
    service.getAuth(username, password).subscribe(res => {
      expect(res).toEqual({ msg: 'success' });
    });
    const req = testingController.expectOne(`http://161.35.140.236:9005/api/auth/login`);
    expect(req.request.method).toBe('POST');
    req.flush({ msg: 'success' });
  });

  it('refreshToken() should POST and return data', () => {
    const token: string = '';
    service.refreshToken().subscribe(res => {
      expect(res).toEqual({ msg: 'success' });
    });
    const req = testingController.expectOne(`http://161.35.140.236:9005/api/auth/refresh`);
    expect(req.request.method).toBe('POST');
    req.flush({ msg: 'success' });
  });
});
