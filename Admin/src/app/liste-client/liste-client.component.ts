import { Component } from '@angular/core';
import { Client } from '../entites/Client.Entites';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent {
  listeClient: Client[];
  constructor(private servive: CrudService, private router: Router) {}
  ngOnInit(): void {
    this.servive.getClient().subscribe((client) => {
      this.listeClient = client;
    });
  }
}
