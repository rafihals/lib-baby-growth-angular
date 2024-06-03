import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.page.html',
  styleUrls: ['./baby.page.scss'],
})
export class BabyPage implements OnInit {

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
