import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionCartesService } from '../gestion-cartes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-affichage-carte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './affichage-carte.component.html',
  styleUrl: './affichage-carte.component.css'
})
export class AffichageCarteComponent implements OnInit {
  @Input() cartes: any[] = [];
  constructor (private gestionCartesService: GestionCartesService) { }
  
  ngOnInit(): void {
    this.gestionCartesService.getCartes().subscribe((cartes: any[]) => {
      this.cartes = cartes;
    });
  }

  supprimerCarte(index: number) {
    this.gestionCartesService.supprimerCarte(index);
  }
}
