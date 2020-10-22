import { Component, OnInit } from '@angular/core';

import { ParallaxConfig } from 'ngx-parallax';
import { faArrowCircleDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ScrollSpyService } from '@uniprank/ngx-scrollspy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  customStyle: object;
  faArrowCircleDown: IconDefinition;
  parallaxConfig: ParallaxConfig;

  constructor(private scrollSpyService: ScrollSpyService) { }

  ngOnInit(): void {
    this.scrollSpyService.setOffset('window', 100);
    this.parallaxConfig = { ratio: 0.2 };
    this.faArrowCircleDown = faArrowCircleDown;
    // Initalize background image height to be window height
    this.customStyle = {
      height: window.innerHeight + 'px'
    };
  }

  adjustHeight(): void {
    // Only adjust background image height dynamically when viewport is smaller than 1024px
    if (window.innerWidth > 1024) {
      this.customStyle = {
        height: window.innerHeight + 'px'
      };
    }
  }
}
