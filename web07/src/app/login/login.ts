import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email: string = '';
  senha: string = '';
  mensagem: string = '';

  entrar() {
    if (this.email.trim() !== '' && this.senha !== '') {
      this.mensagem = 'Dados do formulário recebidos!';
    } else {
      this.mensagem = 'Preencha todos os campos!';
    }
  }

}