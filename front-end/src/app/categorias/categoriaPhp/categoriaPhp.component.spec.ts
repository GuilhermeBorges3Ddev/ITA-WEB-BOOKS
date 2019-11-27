import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { categoriaPhp } from './categoriaPhp.component';

describe('categoriaPhp', () => {
  let component: categoriaPhp;
  let fixture: ComponentFixture<categoriaPhp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ categoriaPhp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(categoriaPhp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
