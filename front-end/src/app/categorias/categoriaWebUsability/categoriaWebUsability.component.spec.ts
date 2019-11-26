import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { categoriaWebUsability } from './categoriaWebUsability.component';

describe('categoriaWebUsability', () => {
  let component: categoriaWebUsability;
  let fixture: ComponentFixture<categoriaWebUsability>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ categoriaWebUsability ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(categoriaWebUsability);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
