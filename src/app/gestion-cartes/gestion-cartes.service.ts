import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionCartesService {
  private cartes: any[] = [];
  private carteSubject = new Subject<any[]>();

  constructor() { }

  ajouterCarte(carte: any) {
    this.cartes.push(carte);
    this.carteSubject.next([...this.cartes]);
  }

  supprimerCarte(index: number) {
    this.cartes.splice(index, 1);
    this.carteSubject.next([...this.cartes]);
  }

  getCartes(): Observable<any[]> {
    return this.carteSubject.asObservable();
  }
}
