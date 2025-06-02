import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService, User } from '../../services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy{
  currentUser: User | null = null;
  private userSubscription!: Subscription;

   constructor(
    private loginService: LoginService,
    private router: Router 
  ) {}

   ngOnInit() {
    // Lógica existente para o menu mobile
    const btnMenu = document.getElementById('btn-menu');
    const menu = document.getElementById('menu-mobile');
    const overlay = document.getElementById('overlay-menu');

    if (btnMenu && menu && overlay) {
      const openMenu = () => menu.classList.add('abrir-menu');
      const closeMenu = () => menu.classList.remove('abrir-menu');

      btnMenu.addEventListener('click', openMenu);
      menu.addEventListener('click', closeMenu); // Fechar ao clicar em um item do menu
      overlay.addEventListener('click', closeMenu);

      // Adicional: Fechar menu mobile ao clicar em um link de navegação dentro dele
      const navLinks = menu.querySelectorAll('a');
      navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
      });
    }

    // Inscreve-se no Observable currentUser do LoginService
    this.userSubscription = this.loginService.currentUser.subscribe(user => {
      this.currentUser = user; // Atualiza o usuário atual no componente
    });
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']); // Redireciona para a página de login após o logout
    // Se o menu mobile estiver aberto, pode ser uma boa ideia fechá-lo aqui também.
    const menu = document.getElementById('menu-mobile');
    if (menu?.classList.contains('abrir-menu')) {
        menu.classList.remove('abrir-menu');
    }
  }

  ngOnDestroy() {
    // É importante cancelar a inscrição para evitar vazamentos de memória
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
