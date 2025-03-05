import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { HttpClient } from '@angular/common/http';
import { ChartOptions, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Données pour le graphique
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        min: 0,  // Définir le minimum à 0
        max: 5,  // Définir le maximum à 5
        ticks: {
          stepSize: 1, // définit l'intervalle des ticks (ici de 1)
        }
      }
    }
  };
  barChartLabels: string[] = []; // Labels des produits
  barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [{ data: [], label: 'Nombre de Réservations' }]
  };
  barChartType: ChartType = 'bar';

  totalAdmins: number = 0;
  totalClients: number = 0;
  totalProduit: number = 0;
  totalReservations: number = 0;

  constructor(
    private service: CrudService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.service.getAdmin().subscribe(admin => {
      this.totalAdmins = admin.length;
    });

    this.service.getClient().subscribe(client => {
      this.totalClients = client.length;
    });

    this.service.getProduit().subscribe(produit => {
      this.totalProduit = produit.length;
    });

    this.getReservationsStats();
  }

  getReservationsStats(): void {
    this.http.get<{ product: string; reservations: number }[]>('http://localhost:8081/api/reservation/get-reservations-by-product')
      .subscribe((data: { product: string; reservations: number }[]) => {
        this.barChartLabels = data.map((item: { product: string }) => item.product); // Typage explicite
        this.barChartData = {
          labels: this.barChartLabels,
          datasets: [{ data: data.map((item: { reservations: number }) => item.reservations), label: 'Nombre de Réservations' }]
        };
        this.totalReservations = data.reduce((total, item) => total + item.reservations, 0);
      });
  }
}
