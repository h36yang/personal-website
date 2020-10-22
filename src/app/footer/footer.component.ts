import { Component, OnInit } from '@angular/core';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faHackerrank, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  github: IconDefinition;
  linkedin: IconDefinition;
  leetcode: IconDefinition;
  hackerrank: IconDefinition;

  ngOnInit(): void {
    this.github = faGithub;
    this.linkedin = faLinkedinIn;
    this.leetcode = faCode;
    this.hackerrank = faHackerrank;
  }
}
