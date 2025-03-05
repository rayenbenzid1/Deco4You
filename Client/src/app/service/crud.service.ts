import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../entites/Client.Entites';
import { Contact } from '../entites/Contact.Entities';
import { Produit } from '../entites/Produit.Entites';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  apiUrl = 'http://localhost:8081/api';
  loginUserUrl = 'http://localhost:8081/api/client/login';
  constructor(private http: HttpClient) {}
  loginClient(client: Client) {
    return this.http.post<any>(this.loginUserUrl, client);
  }
  addcontact(contact: Contact) {
    return this.http.post<any>(this.apiUrl + '/contact', contact);
  }
  addclient(client: Client) {
    return this.http.post<any>(this.apiUrl + '/client', client);
  }
  getProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl + '/produit');
  }
  reserverFromApi(rq: any) {
    return this.http.post<any>('http://localhost:8081/api/reservation', rq);
  }
  getUserInfo() {
    var token = localStorage.getItem('myToken');
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(token);

    // Other functions
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);
    //var decoded:any = jwt_decode(token);
    var decoded: any;
    return decodedToken?.data;
  }

  getAllReservationbyClientId() {
    return this.http.get<any>(
      'http://localhost:8081/api/reservation/get-all-by-id-Client/' +
        this.getUserInfo()?.id
    );
  }

  isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }
}
