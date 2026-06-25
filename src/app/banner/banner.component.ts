import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  isOpen = false;
  isScrolled = false;

  navItems = [
    { href: '#about-me', label: 'À propos de moi', external: true },
    { href: '#projets', label: 'Mes projets', external: true },
    { href: '#competences', label: 'Compétences acquises', external: true },
    { href: '/tarifs', label: 'Tarifs', external: false },
    { href: '#contact', label: 'Contact', external: true }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.isOpen) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }
}