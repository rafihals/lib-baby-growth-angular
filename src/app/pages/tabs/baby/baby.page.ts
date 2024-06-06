import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-baby',
  templateUrl: './baby.page.html',
  styleUrls: ['./baby.page.scss'],
})

export class BabyPage implements OnInit, AfterViewInit {

  isLoading: boolean = true;
  canDismiss = false;
  presentingElement = null;

  constructor() { }

  ngOnInit() {
    this.initializeLoader()
    this.presentingElement = document.querySelector('.ion-page');
  }

  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  initializeLoader() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  initScrollAnimations(): void {
    const articles = document.querySelectorAll('.projects__card');
    articles.forEach(article => {
      gsap.fromTo(article,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: {
            trigger: article,
            start: 'top 80%',
            end: 'bottom 20%',
            once: true
          }
        }
      );
    });
  }

}
