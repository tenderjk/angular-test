import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSub1Component } from './other-sub1.component';

describe('OtherSub1Component', () => {
  let component: OtherSub1Component;
  let fixture: ComponentFixture<OtherSub1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherSub1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
