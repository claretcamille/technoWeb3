import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewUserComponent } from './home-new-user.component';

describe('HomeNewUserComponent', () => {
  let component: HomeNewUserComponent;
  let fixture: ComponentFixture<HomeNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNewUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
