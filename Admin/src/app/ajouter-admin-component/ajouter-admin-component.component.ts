import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../entites/Admin.Entites';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-ajouter-admin-component',
  templateUrl: './ajouter-admin-component.component.html',
  styleUrls: ['./ajouter-admin-component.component.css']
})
export class AjouterAdminComponentComponent {
  messageCommande = '';
  adminForm: FormGroup;

  userFile: any;
  public imagePath: any;
  emailURL: any;
  newProduit = new Admin();
  public message!: string;
  constructor(
    private services: CrudService,
    private router: Router,
    private fb: FormBuilder
  ) {
    let formControls = {
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mp: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    };
    this.adminForm = this.fb.group(formControls);
  }
  get nom() {
    return this.adminForm.get('nom');
  }
  get prenom() {
    return this.adminForm.get('prenom');
  }
  get email() {
    return this.adminForm.get('email');
  }
  get mp() {
    return this.adminForm.get('mp');
  }
  get role() {
    return this.adminForm.get('role');
  }

  addNewAdmin() {
    let data = this.adminForm.value;
    console.log(data);
    let admin = new Admin(
      undefined,
      data.nom,
      data.prenom,
      data.email,
      data.mp,
      data.role
    );
    console.log(admin);

    if (
      data.nom == 0 ||
      data.prenom == 0 ||
      data.email == 0 ||
      data.mp == 0 ||
      data.role == 0
    ) {
      this.messageCommande = `<div class="alert alert-danger" role="alert">
      remplir votre champ
    </div>`;
    } else {
      this.services.addadmin(admin).subscribe(
        (res) => {
          console.log(res);
          this.messageCommande = `<div class="alert alert-success" role="alert">
        ajout avec success
      </div>`;

          this.router.navigate(['/listeAdmin']).then(() => {
            window.location.reload();
          });
        },
        (err) => {
          this.messageCommande = `<div class="alert alert-warning" role="alert">
        EMAIL EXISTE deja!!!!
      </div>`;
        }
      );
      setTimeout(() => {
        this.messageCommande = '';
      }, 3000);
    }
  }

  ngOnInit(): void {}

}
