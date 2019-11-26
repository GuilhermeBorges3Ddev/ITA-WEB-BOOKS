import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaMysqlComponent } from './categoriaMysql.component';

describe('CategoriaMysqlComponent', () => {
  let component: CategoriaMysqlComponent;
  let fixture: ComponentFixture<CategoriaMysqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaMysqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaMysqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
