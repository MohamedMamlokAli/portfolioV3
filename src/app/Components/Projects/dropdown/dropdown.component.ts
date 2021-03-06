import { Component, Input, OnInit } from '@angular/core';
import { TapInfo } from 'src/app/Models/tap-info';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  @Input() tapInfo: TapInfo = {} as TapInfo;
  tapOpen: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  toggleTap() {
    this.tapOpen = !this.tapOpen;
  }
}
