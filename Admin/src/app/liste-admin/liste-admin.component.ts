import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../entites/Admin.Entites';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-liste-admin',
  templateUrl: './liste-admin.component.html',
  styleUrls: ['./liste-admin.component.css'],
})
export class ListeAdminComponent {
  role:String
  listeAdmin: Admin[];
  constructor(private servive: CrudService, private router: Router) {}
  ngOnInit(): void {
    this.servive.getAdmin().subscribe((admin) => {
      this.listeAdmin = admin;
    });
    this.role=localStorage.getItem("role")as string;
  }
  DeleteAdmin(admin: Admin) {
    if (
      confirm(
        "Voulez vous supprimer cet admin avec l'ID " + admin.id + '?'
      )
    ) {
      this.servive.onDeleteAdmin(admin.id).subscribe(() => {
        this.router.navigate(['/listeAdmin']).then(() => {
          window.location.reload();
        });
      });
    }
  }
}
