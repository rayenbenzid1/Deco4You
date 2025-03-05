import { Component } from '@angular/core';
import { Client } from '../entites/Client.Entites';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  messageCommande = '';
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: CrudService,
    private router: Router
  ) {
    let formControls = {
      email: new FormControl('', [Validators.required, Validators.email]),
      mp: new FormControl('', [Validators.required]),
    };

    this.loginForm = this.fb.group(formControls);
  }

  get email() {
    return this.loginForm.get('email');
  }
  get mp() {
    return this.loginForm.get('mp');
  }

  login() {
    let data = this.loginForm.value;
  
    if (this.loginForm.invalid) {
      this.messageCommande = `<div class="alert alert-danger" role="alert">
        Veuillez remplir tous les champs correctement.
      </div>`;
      return;
    }
  
    let client = new Client(null, null, null, data.email, data.mp, null, null);
  
    this.service.loginClient(client).subscribe(
      (res) => {
        console.log(res);
        this.messageCommande = `<div class="alert alert-success" role="alert">
          Connexion réussie !
        </div>`;
        let token = res.token;
        localStorage.setItem('myToken', token);
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      },
      (err) => {
        console.log(err);
        this.messageCommande = `<div class="alert alert-danger" role="alert">
          Identifiants incorrects. Veuillez réessayer.
        </div>`;
      }
    );
  }
  
}
