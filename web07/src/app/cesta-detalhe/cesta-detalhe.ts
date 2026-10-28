import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../models/cesta';

@Component({
  selector: 'app-cesta-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta-detalhe.html',
  styleUrl: './cesta-detalhe.css'
})
export class CestaDetalhe {
  @Input() cesta!: Cesta;

  remover(id: number): void {
    this.cesta.removerItem(id);
  }
}