import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSub2Component } from './other-sub2.component';

describe('OtherSub2Component', () => {
  let component: OtherSub2Component;
  let fixture: ComponentFixture<OtherSub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherSub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
