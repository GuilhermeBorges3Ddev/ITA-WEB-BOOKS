import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificaClienteComponent } from './verifica-cliente.component';

describe('VerificaClienteComponent', () => {
  let component: VerificaClienteComponent;
  let fixture: ComponentFixture<VerificaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
