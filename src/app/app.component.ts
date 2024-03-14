import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SaisieCarteComponent } from './gestion-cartes/saisie-carte/saisie-carte.component';
import { AffichageCarteComponent } from './gestion-cartes/affichage-carte/affichage-carte.component';

import { GestionCartesModule } from './gestion-cartes/gestion-cartes.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaisieCarteComponent, AffichageCarteComponent, GestionCartesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp4';
}
