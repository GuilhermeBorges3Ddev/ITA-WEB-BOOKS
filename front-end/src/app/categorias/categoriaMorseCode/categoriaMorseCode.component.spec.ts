import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { categoriaMorseCode } from './categoriaMorseCode.component';

describe('categoriaMorseCode', () => {
  let component: categoriaMorseCode;
  let fixture: ComponentFixture<categoriaMorseCode>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ categoriaMorseCode ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(categoriaMorseCode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
