import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-busca',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './barra-busca.html',
  styleUrl: './barra-busca.css'
})
export class BarraBusca {

  pesquisa: string = '';
  resultado: string = '';

  buscar() {
    if (this.pesquisa.trim() !== '') {
      this.resultado = 'Você pesquisou: ' + this.pesquisa;
    } else {
      this.resultado = 'Digite algo para pesquisar!';
    }
  }

}