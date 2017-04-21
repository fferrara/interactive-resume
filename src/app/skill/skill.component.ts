import {Component, OnInit} from '@angular/core';

interface Skill {
  topic: string,
  value: number
}

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  tech: Array<Skill>;
  other: Array<Skill>;

  constructor() {
    this.tech = [
      {
        topic: 'Machine learning',
        value: 4.5
      },
      {
        topic: 'Python',
        value: 4.5
      },
      {
        topic: 'Javascript',
        value: 4.5
      },
      {
        topic: 'Software engineering',
        value: 4.5
      },
      {
        topic: 'Angular',
        value: 4.5
      },
      {
        topic: 'Java EE',
        value: 4
      },
      {
        topic: 'TDD',
        value: 4
      },
      {
        topic: 'DevOps',
        value: 3.5
      }
    ];

    this.other = [
      {
        topic: 'Data science',
        value: 4.5
      },
      {
        topic: 'Agile (Scrum)',
        value: 4
      },
      {
        topic: 'Design thinking',
        value: 4
      },
      {
        topic: 'Scientific method',
        value: 4
      },
      {
        topic: 'Ethics',
        value: 4
      },
      {
        topic: 'UX',
        value: 3.5
      },
    ]
  }

  ngOnInit() {
  }

  public makeStars(count) {
    let intCount = Math.floor(count);
    let i = 0;
    let stars = [];

    for (; i < intCount; i++) {
      stars.push('full');
    }

    if (i < count) {
      stars.push('half');
    }

    return stars;
  }

}
