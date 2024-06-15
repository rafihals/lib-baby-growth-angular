
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  isLoading: boolean = true;
  constructor(private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.initializeLoader()
    this.showLoading()
  }

  initializeLoader() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Menu anda dalam tahap pengembangan...',
      duration: 2000,
    });

    loading.present();
  }

}