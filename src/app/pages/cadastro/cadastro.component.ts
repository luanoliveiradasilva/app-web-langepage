import { CadastrarPessoasService } from './../../service/CadastrarPessoas.service';
import { Cadastro } from '../../model/Cadastro.model';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  nome: string = '';
  cpf: string = '';
  dataDeNascimento: Date = new Date();

  constructor(private service: CadastrarPessoasService) {}

  cadastrarPessoa() {
    const cadastrarPessoas: Cadastro = {
      nome: this.nome,
      cpf: this.cpf,
      data: this.dataDeNascimento,
    };

    this.service.adicionarCadastro(cadastrarPessoas).subscribe(
      (cadastroResultado) => {
        alert('Cadastro executado com sucesso!');
        this.limparCampos();
      },
      (error) => console.error(error)
    );
  }

  limparCampos(){
    this.nome = "";
    this.cpf = "";
    this.dataDeNascimento = new Date();
  }

  isCPF(): boolean{
    return this.cpf == null ? true : this.cpf.toString.length < 12 ? true : false;
  }

  getCpfCnpjMask(): string{
    return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
  }

}
