import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAdminComponentComponent } from './ajouter-admin-component/ajouter-admin-component.component';
import { LoginComponent } from './login/login.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { HomeComponent } from './home/home.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { AuthGuard } from './service/Auth.service';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate: [AuthGuard]},
  {path:'ajouterAdmin',component:AjouterAdminComponentComponent,canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'listeAdmin',component:ListeAdminComponent,canActivate: [AuthGuard]},
  {path:'listeClient',component:ListeClientComponent,canActivate: [AuthGuard]},
  {path:'listContact',component:ListeContactComponent,canActivate: [AuthGuard]},
  {path:'listeProduit',component:ListeProduitComponent,canActivate: [AuthGuard]},
  {path:'ajouterProduit',component:AjouterProduitComponent,canActivate: [AuthGuard]},
  {path:'modifierAdmin/:id',component:ModifierAdminComponent,canActivate: [AuthGuard]},
  {path:'modifierProduit/:id',component:ModifierProduitComponent,canActivate: [AuthGuard]},
  {path:'listeReservation',component:ListeReservationComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
