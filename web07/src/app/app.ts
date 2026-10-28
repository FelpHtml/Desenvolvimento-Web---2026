import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Topo } from './topo/topo';
import { Menu } from './menu/menu';
import { Rodape } from './rodape/rodape';
import { BarraBusca } from './barra-busca/barra-busca';
import { Cesta } from './models/cesta';
import { CestaDetalhe } from './cesta-detalhe/cesta-detalhe';
import { ItemCesta } from './models/item-cesta';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Topo,
    Menu,
    Rodape,
    BarraBusca,
    CestaDetalhe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  minhaCesta = new Cesta();

constructor() {
  const itens: ItemCesta[] = [
    { id: 1, nome: 'Camiseta', quantidade: 2, preco: 50 },
    { id: 2, nome: 'Calça', quantidade: 1, preco: 80 },
    { id: 3, nome: 'Tênis', quantidade: 1, preco: 120 }
  ];

  this.minhaCesta.itens = itens;
  this.minhaCesta.calcularTotal();
}

}