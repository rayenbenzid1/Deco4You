import { Component } from '@angular/core';
import { Client } from '../entites/Client.Entites';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  messageCommande = '';
  clientForm: FormGroup;

  userFile: any;
  public imagePath: any;
  emailURL: any;
  public message!: string;
  constructor(
    private services: CrudService,
    private router: Router,
    private fb: FormBuilder
  ) {
    let formControls = {
      nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
      prenom: new FormControl('', [Validators.required]),

      email: new FormControl('', [Validators.required, Validators.email]),
      mp: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
    };
    this.clientForm = this.fb.group(formControls);
  }
  get nom() {
    return this.clientForm.get('nom');
  }
  get prenom() {
    return this.clientForm.get('prenom');
  }
  get email() {
    return this.clientForm.get('email');
  }
  get mp() {
    return this.clientForm.get('mp');
  }
  get tel() {
    return this.clientForm.get('tel');
  }
  get adresse() {
    return this.clientForm.get('adresse');
  }

  addNewClient() {
    let data = this.clientForm.value;
    console.log(data);
    let client = new Client(
      undefined,
      data.nom,
      data.prenom,
      data.email,
      data.mp,
      data.tel,
      data.adresse
    );
    console.log(client);

    if (
      data.nom == 0 ||
      data.prenom == 0 ||
      data.email == 0 ||
      data.mp == 0 ||
      data.tel == 0 ||
      data.adresse == 0
    ) {
      this.messageCommande = `<div class="alert alert-danger" role="alert">
      remplir votre champ
    </div>`;
    } else {
      this.services.addclient(client).subscribe(
        (res) => {
          console.log(res);
          this.messageCommande = `<div class="alert alert-success" role="alert">
        avec success
      </div>`;

          this.router.navigate(['/login']).then(() => {
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