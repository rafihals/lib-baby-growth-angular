import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-baby',
  templateUrl: './baby.page.html',
  styleUrls: ['./baby.page.scss'],
})

export class BabyPage implements OnInit, AfterViewInit {
  @ViewChild(IonModal) modal: IonModal;

  isLoading: boolean = true;
  canDismiss = true;
  presentingElement = null;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.initializeLoader()
    this.presentingElement = document.querySelector('.ion-page');
  }

  onTermsChanged() {
    this.modal.dismiss(null, 'cancel');
  }

  onClickBack() {
    this.modalController.dismiss();
  }

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  initializeLoader() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
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
