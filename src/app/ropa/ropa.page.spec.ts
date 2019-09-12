import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaPage } from './ropa.page';

describe('RopaPage', () => {
  let component: RopaPage;
  let fixture: ComponentFixture<RopaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RopaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RopaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
