import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isMenuOpen = false; // Initialisé à false
  role:String

  ngOnInit(): void {
    this.role=localStorage.getItem("role")as string;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
