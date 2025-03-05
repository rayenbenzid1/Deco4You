import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  IsloggedIn: boolean;
  constructor(private service: CrudService, private router: Router) {}
  ngOnInit(): void {
    this.IsloggedIn = this.service.isLoggedIn();
  }

  logout() {
    console.log('logout');
    localStorage.clear();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
