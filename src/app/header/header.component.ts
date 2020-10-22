import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isNavbarCollapsed: boolean;
  isNavbarShrinked: boolean;

  ngOnInit(): void {
    this.isNavbarCollapsed = true;
    this.isNavbarShrinked = false;
  }

  onPageScroll(): void {
    const y: number = window.scrollY || window.pageYOffset;
    if (y >= 250) {
      this.isNavbarShrinked = true;
    } else {
      this.isNavbarShrinked = false;
    }
  }
}
