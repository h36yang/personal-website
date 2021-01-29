import { Component } from '@angular/core';

import { Organization } from './certification';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  orgs: Organization[] = [{
    name: 'Google',
    certificates: [{
      title: 'Java Readability',
      date: new Date(2021, 0),
      link: '../../assets/cert/Java201_Google.pdf',
    }]
  }, {
    name: 'Triplebyte',
    certificates: [{
      title: 'Certified Generalist Software Engineer',
      date: new Date(2020, 7),
      link: 'https://triplebyte.com/tb/jack-yang-u0n2lk1/certificate/track/generalist'
    }]
  }, {
    name: 'HackerRank',
    certificates: [{
      title: 'Problem Solving (Intermediate) Certificate',
      date: new Date(2020, 4),
      link: 'https://www.hackerrank.com/certificates/dc11279f3cc8'
    }, {
      title: 'Java (Basic) Certificate',
      date: new Date(2020, 4),
      link: 'https://www.hackerrank.com/certificates/9adac628b489'
    }, {
      title: 'Python (Basic) Certificate',
      date: new Date(2020, 4),
      link: 'https://www.hackerrank.com/certificates/e238dbad836f'
    }, {
      title: 'Angular (Basic) Certificate',
      date: new Date(2020, 5),
      link: 'https://www.hackerrank.com/certificates/40b12910d1e6'
    }, {
      title: 'C# (Basic) Certificate',
      date: new Date(2021, 0),
      link: 'https://www.hackerrank.com/certificates/ec8ce55f56e4'
    }]
  }, {
    name: 'Learning Tree',
    certificates: [{
      title: 'Developing High-Performance SQL Server Databases',
      date: new Date(2017, 7),
      link: '../../assets/cert/SQL_LearningTree.pdf',
    }]
  }, {
    name: 'Ontario Teachers\' Pension Plan',
    certificates: [{
      title: 'LEAN Yellow Belt Certification',
      date: new Date(2016, 8)
    }]
  }];
}
