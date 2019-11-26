import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { categoriaSql } from './categoriaSql.component';

describe('categoriaSql', () => {
  let component: categoriaSql;
  let fixture: ComponentFixture<categoriaSql>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ categoriaSql ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(categoriaSql);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
