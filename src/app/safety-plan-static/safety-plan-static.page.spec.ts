import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyPlanStaticPage } from './safety-plan-static.page';

describe('SafetyPlanStaticPage', () => {
  let component: SafetyPlanStaticPage;
  let fixture: ComponentFixture<SafetyPlanStaticPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyPlanStaticPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyPlanStaticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
