import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  isMenuOpen = false;
  email = '';
  selectedProduct: any = null;
  currentSlide = 0;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % 3;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? 
      3 - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  openModal(product: any): void {
    this.selectedProduct = product;
  }

  closeModal(): void {
    this.selectedProduct = null;
  }
}
