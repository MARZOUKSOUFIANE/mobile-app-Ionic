import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GelleryPage } from './gellery.page';

describe('GelleryPage', () => {
  let component: GelleryPage;
  let fixture: ComponentFixture<GelleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GelleryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GelleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
