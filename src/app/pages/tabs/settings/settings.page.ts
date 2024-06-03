import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  isLoading: boolean = true;

  constructor() { }

  ngOnInit() {
    this.initializeLoader()
  }

  initializeLoader() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

}
