import { Component } from '@angular/core';

import { faAppleAlt, faCloud, faComment, faLaptopCode, faTv } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { Experience } from './experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {

  work: Experience[] = [{
    employer: 'Google',
    logo: faGoogle,
    color: 'deepskyblue',
    title: 'Software Engineer',
    location: 'Seattle, WA',
    startTime: new Date(2020, 9)
  }, {
    employer: 'Ontario Teachers\' Pension Plan',
    logo: faAppleAlt,
    color: 'red',
    title: 'Technical Team Lead',
    location: 'Toronto, ON',
    startTime: new Date(2020, 8),
    endTime: new Date(2020, 9)
  }, {
    employer: 'TechShow Solutions',
    logo: faLaptopCode,
    color: 'lightslategrey',
    title: 'Founder',
    location: 'Toronto, ON',
    startTime: new Date(2019, 0)
  }, {
    employer: 'Ontario Teachers\' Pension Plan',
    logo: faAppleAlt,
    color: 'red',
    title: 'Lead Software Engineer',
    location: 'Toronto, ON',
    startTime: new Date(2018, 7),
    endTime: new Date(2020, 8)
  }, {
    employer: 'Ontario Teachers\' Pension Plan',
    logo: faAppleAlt,
    color: 'red',
    title: 'Senior Software Engineer',
    location: 'Toronto, ON',
    startTime: new Date(2017, 0),
    endTime: new Date(2018, 7)
  }, {
    employer: 'Ontario Teachers\' Pension Plan',
    logo: faAppleAlt,
    color: 'red',
    title: 'Software Engineer',
    location: 'Toronto, ON',
    startTime: new Date(2014, 5),
    endTime: new Date(2017, 0)
  }];

  intern: Experience[] = [{
    employer: 'Ontario Teachers\' Pension Plan',
    logo: faAppleAlt,
    color: 'red',
    title: 'Co-op Software Engineer',
    location: 'Toronto, ON',
    startTime: new Date(2013, 8),
    endTime: new Date(2013, 11)
  }, {
    employer: 'Genesys',
    logo: faCloud,
    color: 'orangered',
    title: 'Java Development Intern',
    location: 'Markham, ON',
    startTime: new Date(2013, 0),
    endTime: new Date(2013, 3)
  }, {
    employer: 'Genesys',
    logo: faCloud,
    color: 'orangered',
    title: 'Java Development Intern',
    location: 'Markham, ON',
    startTime: new Date(2012, 4),
    endTime: new Date(2012, 7)
  }, {
    employer: 'Speechbobble',
    logo: faComment,
    color: 'steelblue',
    title: 'Social Media Web Developer',
    location: 'Toronto, ON',
    startTime: new Date(2011, 8),
    endTime: new Date(2011, 11)
  }, {
    employer: 'Speechbobble',
    logo: faComment,
    color: 'steelblue',
    title: 'Social Media Web Developer',
    location: 'Toronto, ON',
    startTime: new Date(2011, 0),
    endTime: new Date(2011, 3)
  }, {
    employer: 'Transvideo Digital',
    logo: faTv,
    color: 'goldenrod',
    title: 'Co-op Software Developer',
    location: 'Beijing, China',
    startTime: new Date(2010, 4),
    endTime: new Date(2010, 7)
  }];
}
