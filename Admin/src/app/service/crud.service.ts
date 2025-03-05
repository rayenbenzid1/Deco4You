import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Admin } from "../entites/Admin.Entites";
import { BehaviorSubject, Observable } from "rxjs";
import { Client } from "../entites/Client.Entites";
import { Contact } from "../entites/Contact.Entites";
import { Produit } from "../entites/Produit.Entites";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  helper = new JwtHelperService();
  apiUrl = 'http://localhost:8081/api';
  loginUserUrl='http://localhost:8081/api/admin/login';
  constructor(private http:HttpClient) { }
  loginAdmin(admin:Admin){
    return this.http.post<any>(this.loginUserUrl, admin);
  }
  addadmin(admin:Admin){
    return this.http.post<any>(this.apiUrl+"/admin", admin);
  }
  addproduit(produit:Produit){
    return this.http.post<any>(this.apiUrl+"/produit", produit);
  }
  getAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiUrl +"/admin");
  }
  getClient(): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiUrl +"/client");
  }
  getContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.apiUrl +"/contact");
  }
  getProduit(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiUrl +"/produit");
  }
  onDeleteAdmin(id : number){
    const url =`${this.apiUrl+"/admin"}/${id}`
    return this.http.delete(url )
  }
  onDeleteContact(id : number){
    const url =`${this.apiUrl+"/contact"}/${id}`
    return this.http.delete(url )
  }
  updateAdmin(id:number,admin: Admin) {
    const url = `${this.apiUrl+"/admin"}/${id};`
    return this.http.put<any>(url, admin);
  }
  findAdminById(id : number): Observable<Admin> {
    const url = `${this.apiUrl + "/admin"}/${id}`;
    return this.http.get<Admin>(url)
  }
  findProduitById(id : number): Observable<Produit> {
    const url = `${this.apiUrl + "/produit"}/${id}`;
    return this.http.get<Produit>(url)
  }
  updateProduit(id:number,produit: Produit) {
    const url = `${this.apiUrl+"/produit"}/${id}`
    return this.http.put<any>(url, produit);
  }
  isLoggedIn(){
    let token = localStorage.getItem("myToken");
    if (token) {
      return true ;
    } else {
      return false;
    }
  }
  userDetails(){
    let token:any=localStorage.getItem('myToken');
    let decodeToken= this.helper.decodeToken(token);
    return decodeToken.data;
  }

  getAllReservation() {
    return this.http.get<any>(
      'http://localhost:8081/api/reservation/get-all-reservation'
    );
  }

  getReservationsByProduct(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/api/reservation/get-reservations-by-product');
  }
  

  private isSidebarOpen = new BehaviorSubject<boolean>(true);
    sidebarState = this.isSidebarOpen.asObservable();

    toggleSidebar() {
        this.isSidebarOpen.next(!this.isSidebarOpen.value);
    }
}
