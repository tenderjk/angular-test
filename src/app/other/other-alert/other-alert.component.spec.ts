import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAlertComponent } from './other-alert.component';

describe('OtherAlertComponent', () => {
  let component: OtherAlertComponent;
  let fixture: ComponentFixture<OtherAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
