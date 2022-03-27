import { Cadastro } from '../model/Cadastro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastrarPessoasService {

  private listarPessoas: any[];

  //private url = 'https://devapp-web.herokuapp.com/cadastro/v1';
  private url = 'http://localhost:8080/cadastro/v1';

  constructor(private httpClient: HttpClient) {
    this.listarPessoas = [];
  }

  buscarCadastro(): Observable<Cadastro[]> {
    return this.httpClient.get<Cadastro[]>(`${this.url}/formulario`);
  }

  adicionarCadastro(cadastrar: Cadastro): Observable<Cadastro> {
    return this.httpClient.post<Cadastro>(`${this.url}/cadastros`, cadastrar);
  }

  get listarCadastroDePessoas() {
    return this.listarPessoas;
  }

}
