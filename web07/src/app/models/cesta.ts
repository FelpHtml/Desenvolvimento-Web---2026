import { ItemCesta } from './item-cesta';

export class Cesta {
  id: number = 1;
  itens: ItemCesta[] = [];
  total: number = 0;

  removerItem(id: number): void {
    this.itens = this.itens.filter(item => item.id !== id);
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.total = this.itens.reduce(
      (soma, item) => soma + item.preco * item.quantidade,
      0
    );
  }
}