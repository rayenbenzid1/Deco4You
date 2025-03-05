import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Contact } from '../entites/Contact.Entities';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  messageCommande = '';
  ContactForm: FormGroup;

  userFile: any;
  public imagePath: any;
  emailURL: any;
  newProduit = new Contact();
  public messages!: string;
  constructor(
    private services: CrudService,
    private router: Router,
    private fb: FormBuilder
  ) {
    let formControls = {
      nom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      tel: new FormControl('', [Validators.required]),
      sujet: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    };
    this.ContactForm = this.fb.group(formControls);
  }
  get nom() {
    return this.ContactForm.get('nom');
  }
  get email() {
    return this.ContactForm.get('email');
  }
  get tel() {
    return this.ContactForm.get('tel');
  }
  get sujet() {
    return this.ContactForm.get('sujet');
  }
  get message() {
    return this.ContactForm.get('message');
  }

  addNewContact() {
    let data = this.ContactForm.value;
    console.log('Form Data:', data);
    let contact = new Contact(
      undefined,
      data.nom,
      data.email,
      data.tel,
      data.sujet,
      data.message
    );
    console.log('Contact Object:', contact);

    if (
      data.nom == 0 ||
      data.email == 0 ||
      data.tel == 0 ||
      data.sujet == 0 ||
      data.message == 0
    ) {
      this.messageCommande = `<div class="alert alert-danger" role="alert">
      remplir votre champ
    </div>`;
    } else {
      this.services.addcontact(contact).subscribe(
        (res) => {
          console.log(res);
          this.messageCommande = `<div class="alert alert-success" role="alert">
        avec success
      </div>`;

          this.router.navigate(['/']).then(() => {
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
