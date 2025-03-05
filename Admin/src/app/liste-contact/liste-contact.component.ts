import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../entites/Contact.Entites';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-liste-contact',
  templateUrl: './liste-contact.component.html',
  styleUrls: ['./liste-contact.component.css']
})
export class ListeContactComponent {
  listeContact: Contact[];
  constructor(private service: CrudService, private router: Router) {}
  ngOnInit(): void {
    this.service.getContact().subscribe((contact) => {
      this.listeContact = contact;
    });
  }
  DeleteContact(contact: Contact) {
    if (
      confirm(
        "Voulez vous supprimer ce message avec l'ID " + contact.id + '?'
      )
    ) {
      this.service.onDeleteContact(contact.id).subscribe(() => {
        this.router.navigate(['/listContact']).then(() => {
          window.location.reload();
        });
      });
    }
  }
}
