import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaisieCarteComponent } from './saisie-carte/saisie-carte.component';
import { AffichageCarteComponent } from './affichage-carte/affichage-carte.component';


@NgModule({
  declarations: [],
  imports: [CommonModule, SaisieCarteComponent, AffichageCarteComponent],
})
export class GestionCartesModule { }
