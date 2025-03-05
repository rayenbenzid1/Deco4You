import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from '../entites/Produit.Entites';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent {
  imgURL:any;
  messageCommande = '';
  produitForm: FormGroup;

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
      nom: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      marque: new FormControl('', [Validators.required, Validators.email]),
      prix: new FormControl('', [Validators.required]),
      quantite: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    };
    this.produitForm = this.fb.group(formControls);
  }
  get nom() {
    return this.produitForm.get('nom');
  }
  get description() {
    return this.produitForm.get('description');
  }
  get marque() {
    return this.produitForm.get('marque');
  }
  get prix() {
    return this.produitForm.get('prix');
  }
  get quantite() {
    return this.produitForm.get('quantite');
  }
  get image() {
    return this.produitForm.get('image');
  }

  addNewProduit() {
    let data = this.produitForm.value;
    console.log(data);
    let produit = new Produit(
      undefined,
      data.nom,
      data.description,
      data.marque,
      data.prix,
      data.quantite,
      this.imgURL
    );
    console.log(produit);

    if (
      data.image == 0 ||
      data.nom == 0 ||
      data.description == 0 ||
      data.marque == 0 ||
      data.prix == 0 ||
      data.quantite == 0
    ) {
      this.messageCommande = `<div class="alert alert-danger" role="alert">
      remplir votre champ
    </div>`;
    } else {
      this.services.addproduit(produit).subscribe(
        (res) => {
          console.log(res);
          this.messageCommande = `<div class="alert alert-success" role="alert">
        avec success
      </div>`;

          this.router.navigate(['/listeProduit']).then(() => {
            window.location.reload();
          });
        }
      );
      setTimeout(() => {
        this.messageCommande = '';
      }, 3000);
    }
  }

  ngOnInit(): void {}

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
  }
}
