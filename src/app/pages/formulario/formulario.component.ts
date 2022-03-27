import { Component, OnInit } from '@angular/core';
import { Cadastro } from 'src/app/model/Cadastro.model';
import { CadastrarPessoasService } from 'src/app/service/CadastrarPessoas.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  listarCadastroDePessoas: any[];

  constructor(private service: CadastrarPessoasService) { }

  ngOnInit(): void {
    this.service.buscarCadastro().subscribe((cadastros: Cadastro[]) =>{
      this.listarCadastroDePessoas = cadastros;
    })
  }
}
