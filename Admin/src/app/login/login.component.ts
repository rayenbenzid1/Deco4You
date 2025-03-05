import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../entites/Admin.Entites';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
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
    let admin = new Admin(null, null, null, data.email, data.mp, null);
  
    if (!data.email || !data.mp) {
      this.messageCommande = `<div class="alert alert-danger" role="alert">
        Veuillez remplir tous les champs.
      </div>`;
      return;
    }
  
    this.service.loginAdmin(admin).subscribe(
      (res) => {
        console.log(res);
        this.messageCommande = `<div class="alert alert-success" role="alert">
          Connexion réussie !
        </div>`;
  
        let token = res.token;
        localStorage.setItem('myToken', token);
        localStorage.setItem("role",res.role)
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      },
      (err) => {
        console.log(err);
        if (err.status === 404) {
          this.messageCommande = `<div class="alert alert-danger" role="alert">
            Email ou mot de passe incorrect.
          </div>`;
        } else {
          this.messageCommande = `<div class="alert alert-danger" role="alert">
            Une erreur s'est produite. Veuillez réessayer plus tard.
          </div>`;
        }
      }
    );
  }  
}
