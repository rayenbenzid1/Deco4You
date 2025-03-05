import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesreservations',
  templateUrl: './mesreservations.component.html',
  styleUrls: ['./mesreservations.component.css'],
})
export class MesreservationsComponent {
  listReservation: any = [];
  constructor(private service: CrudService, private router: Router) {}

  totalString = '';

  ngOnInit(): void {
    this.service.getAllReservationbyClientId().subscribe((data: any) => {
      this.listReservation = data;
      this.calculerTotal(); // Appelle la fonction après avoir reçu les données
    });
  }

  calculerTotal() {
    let ch = '';
    let total = 0;
    for (let reservation of this.listReservation) {
      let prix = reservation.produit.prix;
      total += prix;
      ch += prix + 'dt + ';
    }
    this.totalString = ch.slice(0, -2) + '= ' + total + 'dt';
  }
}
