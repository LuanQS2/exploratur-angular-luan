import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';



interface SignupForm {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  passwordConfirm: FormControl<string | null>;
}


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
    CommonModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignUpComponent {
  signupForm!: FormGroup<SignupForm>;

  constructor(
    private router: Router,
    private loginService: LoginService
  ){
    this.signupForm = new FormGroup<SignupForm>({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }
    // TODO: Adicionar validador customizado para verificar se as senhas coincidem
    );
  }

  // Getters para facilitar o acesso aos controles no template
  get name(): AbstractControl<string | null, string | null> | null { return this.signupForm.get('name'); }
  get email(): AbstractControl<string | null, string | null> | null { return this.signupForm.get('email'); }
  get password(): AbstractControl<string | null, string | null> | null { return this.signupForm.get('password'); }
  get passwordConfirm(): AbstractControl<string | null, string | null> | null { return this.signupForm.get('passwordConfirm'); }


  submit(){
    if (this.signupForm.valid) {
      const userName = this.signupForm.value.name; // Renomeado para evitar conflito com o getter 'name'
      if (userName) {
        this.loginService.login(userName);
        this.router.navigate(['/']);
        console.log('Cadastro bem-sucedido e logado:', this.signupForm.value);
      } else {
        console.error('O nome está faltando no formulário de cadastro.');
      }
    } else {
      console.log('Formulário de cadastro inválido');
      this.signupForm.markAllAsTouched(); 
    }
  }

  navigate(){
    this.router.navigate(["login"]);
  }
}
