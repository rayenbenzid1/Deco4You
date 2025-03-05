import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../entites/Produit.Entites';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent {
  listeProduit: Produit[];
  constructor(private service: CrudService, private router: Router) {}
  ngOnInit(): void {
    this.service.getProduit().subscribe((produit) => {
      this.listeProduit = produit;
    });
  }
}
