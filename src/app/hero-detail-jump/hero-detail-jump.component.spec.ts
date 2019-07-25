import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailJumpComponent } from './hero-detail-jump.component';

describe('HeroDetailJumpComponent', () => {
  let component: HeroDetailJumpComponent;
  let fixture: ComponentFixture<HeroDetailJumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailJumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailJumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
