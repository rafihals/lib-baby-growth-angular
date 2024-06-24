import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
declare function tes(): any;

@Component({
  selector: 'app-pie',
  templateUrl: './pie.page.html',
  styleUrls: ['./pie.page.scss'],
})

export class PiePage implements OnInit {

  isLoading: boolean = true;
  constructor(private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.initializeLoader()
    tes()
  }

  initializeLoader() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000)
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Menu anda dalam tahap pengembangan...',
      duration: 2000,
    });

    loading.present();
  }
}
