import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { myRoutes } from "../../../../utils/routes";

import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HomeComponent } from './home.component';

import { MorePopularService } from "../../../services/movies/more-popular/more-popular.service";
import { NowPlayingService } from "../../../services/movies/now-playing/now-playing.service";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let testingController: HttpTestingController;
  let injector: TestBed;
  let service1: MorePopularService
  let service2: NowPlayingService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(myRoutes)
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
    injector = getTestBed();
    testingController = TestBed.inject(HttpTestingController);
    service1 = TestBed.inject(MorePopularService);
    service2 = TestBed.inject(NowPlayingService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
