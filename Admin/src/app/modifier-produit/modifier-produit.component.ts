import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../entites/Produit.Entites';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent {
  id : number;
  messageCommande = '';
  produitForm: FormGroup;
  imgURL:any
  userFile: any;
  public imagePath: any;
  emailURL: any;
  public message!: string;
  constructor(
    private services: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    let formControls = {
      nom: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      marque: new FormControl('', [Validators.required]),
      prix: new FormControl('', [Validators.required]),
      quantite: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
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

  ngOnInit(): void {
    let idEvent = this.route.snapshot.params['id'];
    this.id = idEvent;
    this.services.findProduitById(idEvent).subscribe((result) => {
      let event = result;
      console.log(event);

      // Stocker l'URL de l'image existante
      this.imgURL = result.image;

      this.produitForm.patchValue({
        nom: event.nom,
        description: event.description,
        marque: event.marque, 
        prix: event.prix,
        quantite: event.quantite,
        //image: event.image
      });}); }
  updateProduit() {
    let data = this.produitForm.value;
    let produit =new Produit(
      this.id,
      data.nom,
      data.description,
      data.marque,
      data.prix,
      data.quantite,
      this.userFile ? this.imgURL : this.imgURL // Garde l'ancienne image si aucune nouvelle image n'est choisie
    );
    console.log(produit);
    console.log(data);
    this.services.updateProduit(this.id,produit).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/listeProduit'])}); }

  
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
          }}

        }}