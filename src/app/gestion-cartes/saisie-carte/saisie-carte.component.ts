import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { GestionCartesService } from '../gestion-cartes.service';

@Component({
  selector: 'app-saisie-carte',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './saisie-carte.component.html',
  styleUrl: './saisie-carte.component.css'
})
export class SaisieCarteComponent implements OnInit{
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private gestionCartesService: GestionCartesService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nom: ['', Validators.required],
      code: ['', Validators.required],
      ccv: ['', Validators.required],
      expiration: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.gestionCartesService.ajouterCarte(this.form.value);
      console.log(this.form.value);
    }
    else 
      console.log("Erreur de saisie");
  }
}
