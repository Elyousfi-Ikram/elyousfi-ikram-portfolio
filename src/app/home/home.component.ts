import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ProjetsComponent } from '../projets/projets.component';
import { CompetencesComponent } from '../competences/competences.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ProjetsComponent, CompetencesComponent, ContactComponent, FooterComponent],
  template: `
    <app-about></app-about>
    <app-projets></app-projets>
    <app-competences></app-competences>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `
})
export class HomeComponent {}
