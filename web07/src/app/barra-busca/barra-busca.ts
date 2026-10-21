import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-busca',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './barra-busca.html',
  styleUrl: './barra-busca.css'
})
export class BarraBusca implements OnInit {

  pesquisa: string = '';
  resultado: string = '';

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.pesquisa = localStorage.getItem('pesquisa') || '';
    }
  }

  salvarPesquisa() {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('pesquisa', this.pesquisa);
    console.log('Pesquisa salva:', this.pesquisa);
  }
}

  buscar() {
    if (this.pesquisa.trim() !== '') {
      this.resultado = 'Você pesquisou: ' + this.pesquisa;
    } else {
      this.resultado = 'Digite algo para pesquisar!';
    }
  }

}