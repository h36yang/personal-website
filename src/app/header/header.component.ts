import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoUrl: string;
  isNavbarCollapsed: boolean;
  isNavbarShrinked: boolean;

  ngOnInit(): void {
    this.logoUrl = 'assets/img/logo.png';
    this.isNavbarCollapsed = true;
    this.isNavbarShrinked = false;
  }

  onPageScroll() {
    const y: number = window.scrollY || window.pageYOffset;
    if (y >= 250) {
      this.isNavbarShrinked = true;
    } else {
      this.isNavbarShrinked = false;
    }
  }
}
