import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isLoading: boolean = true;

  constructor(private router : Router) { }

  ngOnInit() {
    this.initializeLoader()
  }

  initializeLoader() {

    setTimeout(() => {
      this.isLoading = false; 
    }, 2000);
  }

}

