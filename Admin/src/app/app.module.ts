import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterAdminComponentComponent } from './ajouter-admin-component/ajouter-admin-component.component';
import { LoginComponent } from './login/login.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    AjouterAdminComponentComponent,
    LoginComponent,
    ListeAdminComponent,
    ListeClientComponent,
    ListeContactComponent,
    ListeProduitComponent,
    AjouterProduitComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ModifierAdminComponent,
    ModifierProduitComponent,
    ListeReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
