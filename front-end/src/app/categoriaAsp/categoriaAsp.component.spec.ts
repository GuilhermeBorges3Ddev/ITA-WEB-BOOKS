import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaAsp } from './categoriaAsp.component';

describe('CategoriesComponent', () => {
  let component: CategoriaAsp;
  let fixture: ComponentFixture<CategoriaAsp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaAsp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaAsp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
