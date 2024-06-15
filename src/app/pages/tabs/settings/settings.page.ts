import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
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
