import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TapInfo } from 'src/app/Models/tap-info';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  taps: TapInfo[];
  currentTap: string;
  constructor(private router: Router) {
    this.currentTap = 'bio';
    this.taps = [
      {
        tapName: 'personal-info',
        tapDropdownItems: [
          {
            tapName: 'bio',
            tapIcon: 'folder',
            tapIconColor: 'mainPink',
          },
          {
            tapName: 'education',
            tapIcon: 'folder',
            tapIconColor: 'mainBlue',
          },
        ],
        as: 'personal',
      },
    ];
  }

  ngOnInit(): void {
    this.router.navigateByUrl('about/personal/bio');
  }
  changeTap(value: string) {
    this.currentTap = value;
  }
}
