import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  ngOnInit() {
    const btnMenu = document.getElementById('btn-menu');
    const menu = document.getElementById('menu-mobile');
    const overlay = document.getElementById('overlay-menu');

    if (btnMenu && menu && overlay) {
      btnMenu.addEventListener('click', () => {
        menu.classList.add('abrir-menu');
      });

      menu.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
      });

      overlay.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
      });
    }
  }
}
