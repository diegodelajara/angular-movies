import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/login/login.service'

import { myRoutes } from "../../../../utils/routes";

import { LoginComponent } from './login.component';
import { By } from "@angular/platform-browser";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('LoginComponent', () => {
  let injector: TestBed;
  let testingController: HttpTestingController;
  let service: LoginService;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes(myRoutes)
      ]
    })
    .compileComponents();
    service = TestBed.inject(LoginService);
    injector = getTestBed();
    testingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
