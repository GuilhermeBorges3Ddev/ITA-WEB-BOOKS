import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { categoriaRegex } from './categoriaRegex.component';

describe('categoriaRegex', () => {
  let component: categoriaRegex;
  let fixture: ComponentFixture<categoriaRegex>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ categoriaRegex ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(categoriaRegex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
