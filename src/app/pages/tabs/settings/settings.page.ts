import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  @ViewChild('textElement', { static: true }) textElement!: ElementRef;

  isLoading: boolean = true;
  constructor(private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.initializeLoader()
    // this.showLoading()

  }

  ngAfterViewInit(): void {
    this.initAnimation();
  }

  initializeLoader() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000)
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Menu anda dalam tahap pengembangan...',
      duration: 2000,
    });

    loading.present();
  }

  initAnimation() {
    gsap.fromTo(this.textElement.nativeElement,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1,
        scrollTrigger: {
          trigger: this.textElement.nativeElement,
          start: 'top 80%', // Start animation when the element is 80% from the top of the viewport
          toggleActions: 'play none none none', // Ensure the animation only plays on scroll
        }
      }
    );
  }
}
