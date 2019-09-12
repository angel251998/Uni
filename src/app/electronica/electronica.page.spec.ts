import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicaPage } from './electronica.page';

describe('ElectronicaPage', () => {
  let component: ElectronicaPage;
  let fixture: ComponentFixture<ElectronicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
