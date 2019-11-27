import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { categoriaWebServices } from './categoriaWebServices.component';

describe('categoriaWebServices', () => {
  let component: categoriaWebServices;
  let fixture: ComponentFixture<categoriaWebServices>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ categoriaWebServices ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(categoriaWebServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
