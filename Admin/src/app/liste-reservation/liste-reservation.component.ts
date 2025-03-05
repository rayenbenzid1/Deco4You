import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.component.html',
  styleUrls: ['./liste-reservation.component.css']
})
export class ListeReservationComponent {
  listReservation: any = [];
  constructor(private service: CrudService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAllReservation().subscribe((data: any) => {
      console.log(data);
      this.listReservation = data;
    });
  }
}
