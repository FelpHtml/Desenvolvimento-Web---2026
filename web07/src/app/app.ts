import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Topo } from './topo/topo';
import { Menu } from './menu/menu';
import { Rodape } from './rodape/rodape';
import { BarraBusca } from './barra-busca/barra-busca';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Topo,
    Menu,
    Rodape,
    BarraBusca
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}