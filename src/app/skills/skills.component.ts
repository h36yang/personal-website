import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: string[] = [
    'C#',
    'SQL',
    'Java',
    'Go',
    'Python',
    'GitHub',
    'Jenkins',
    'Angular',
    'DevOps',
    'Azure'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
