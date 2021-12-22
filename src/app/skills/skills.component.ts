import { Component } from '@angular/core';

import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  options: CloudOptions = {
    width: window.innerWidth - 20,
    height: window.innerHeight - 50,
    step: 10,
    overflow: false,
    randomizeAngle: true,
    zoomOnHover: {
      scale: 1.5,
      transitionTime: 0.5,
      delay: 0.1,
    }
  };

  skills: CloudData[] = [{
    text: 'C#',
    weight: 15
  }, {
    text: '.NET Core',
    weight: 10
  }, {
    text: 'SQL',
    weight: 12
  }, {
    text: 'Java',
    weight: 9
  }, {
    text: 'TypeScript',
    weight: 7
  }, {
    text: 'Golang',
    weight: 5
  }, {
    text: 'Python',
    weight: 4
  }, {
    text: 'GitHub',
    weight: 8
  }, {
    text: 'Jenkins',
    weight: 7
  }, {
    text: 'Angular',
    weight: 10
  }, {
    text: 'DevOps',
    weight: 8
  }, {
    text: 'Azure',
    weight: 4
  }, {
    text: 'Google Cloud',
    weight: 3
  }, {
    text: 'ML',
    weight: 1
  }, {
    text: 'Engineering Management',
    weight: 5
  }, {
    text: 'Microservices Architecture',
    weight: 6
  }, {
    text: 'Microsoft SQL Server',
    weight: 8
  }, {
    text: 'Visual Studio Code',
    weight: 5
  }, {
    text: 'Docker',
    weight: 1
  }, {
    text: 'Kubernetes',
    weight: 1
  }, {
    text: 'Stripe API',
    weight: 6
  }, {
    text: 'Boq Apps Framework',
    weight: 5
  }, {
    text: 'Spanner',
    weight: 4
  }, {
    text: 'Cloud Pub/Sub',
    weight: 4
  }, {
    text: 'FlumeJava',
    weight: 5
  }, {
    text: 'BigQuery',
    weight: 2
  }];
}
