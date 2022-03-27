/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CadastrarPessoasService } from './CadastrarPessoas.service';

describe('Service: CadastrarPessoas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastrarPessoasService]
    });
  });

  it('should ...', inject([CadastrarPessoasService], (service: CadastrarPessoasService) => {
    expect(service).toBeTruthy();
  }));
});
