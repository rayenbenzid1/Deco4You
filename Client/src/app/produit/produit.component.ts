import { Component } from '@angular/core';
import { Produit } from '../entites/Produit.Entites';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent {
  IsloggedIn: boolean;
  messageCommande = '';
  listeProduit: Produit[];
  constructor(private service: CrudService, private router: Router) {}
  ngOnInit(): void {
    this.service.getProduit().subscribe((produit) => {
      this.listeProduit = produit;
    });
    this.IsloggedIn = this.service.isLoggedIn();
  }

  reserver(event: any) {
    this.messageCommande = `<div class="alert alert-primary" role="alert">
    Veuillez patienter ...
  </div>`;
    console.log(event);
    let rq: any = {};
    rq.idClient = this.service.getUserInfo()?.id;
    rq.idProduit = event.id;

    console.log(rq, 'what we senddddd');
    this.service.reserverFromApi(rq).subscribe(
      (data: any) => {
        this.router.navigate(['mesreservations']).then(() => {
          window.location.reload();
        });

        this.messageCommande = `<div class="alert alert-success" role="alert">
    Réservé avec succès
  </div>`;
      },
      (err) => {
        this.messageCommande = `<div class="alert alert-warning" role="alert">
        Erreur, Veuillez réssayer !!
    </div>`;
      }
    );
    setTimeout(() => {
      this.messageCommande = '';
    }, 3000);
  }
}
