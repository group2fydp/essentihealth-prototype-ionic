import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedModePage } from './guided-mode.page';

describe('GuidedModePage', () => {
  let component: GuidedModePage;
  let fixture: ComponentFixture<GuidedModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidedModePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidedModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
