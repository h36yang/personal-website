import { Component, OnInit } from '@angular/core';

import { ParallaxConfig } from 'ngx-parallax';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { ScrollSpyService } from '@uniprank/ngx-scrollspy';
import { NgwWowService } from 'ngx-wow';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  customStyle: object;
  faArrowCircleDown: IconDefinition;
  parallaxConfig: ParallaxConfig;

  constructor(
    private scrollSpyService: ScrollSpyService,
    private wowService: NgwWowService) { }

  ngOnInit(): void {
    this.scrollSpyService.setOffset('window', 400);
    this.parallaxConfig = { ratio: 0.2 };
    this.faArrowCircleDown = faArrowCircleDown;

    // Initalize background image height to be window height
    this.customStyle = {
      height: window.innerHeight + 'px'
    };

    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      // Enable wowjs if motion is not reduced
      this.wowService.init();
    }
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
