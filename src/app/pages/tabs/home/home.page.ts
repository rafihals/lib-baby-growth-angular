import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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