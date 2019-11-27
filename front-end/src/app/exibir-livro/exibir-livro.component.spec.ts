import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirLivroComponent } from './exibir-livro.component';

describe('ExibirLivroComponent', () => {
  let component: ExibirLivroComponent;
  let fixture: ComponentFixture<ExibirLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
