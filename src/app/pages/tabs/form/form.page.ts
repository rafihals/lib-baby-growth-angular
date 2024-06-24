
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class FormPage implements OnInit {

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isEditable = false;

  babyForm: FormGroup;

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  @Input() view: any;
  @Input() legendPosition = LegendPosition.Right;
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  single: any[] = [];

  isLoading: boolean = true;
  constructor(
    private loadingCtrl: LoadingController,
    private fb: FormBuilder,
    private router: Router,
    private _formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.initializeLoader()
    // this.showLoading()
    this.babyForm = this.fb.group({
      age: ['', [Validators.required, Validators.min(0)]],
      weight: ['', [Validators.required, Validators.min(0)]],
      gender: ['', Validators.required]
    });
    this.single = [
      {
        "name": "Motorik Halus",
        "value": 8940000
      },
      {
        "name": "Motorik Kasar",
        "value": 5000000
      },
      {
        "name": "Kemandirian",
        "value": 7200000
      },
      {
        "name": "Bicara Bahasa",
        "value": 6200000
      }
    ];

  }


  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onNavigate(){
    this.router.navigate(['/tabs/pie'])
  }

  isAlertOpen = false;
  alertButtons = ['Setujui'];

  setOpen() {
    this.isAlertOpen = true;
  }

  setClose (){
    this.isAlertOpen = false
    console.log('me');
    
    this.onNavigate()
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  onDimensionsChange(event: { width: number, height: number }) {
    if (event.width < 320) {
      // Ukuran untuk layar lebih kecil dari 320px
      this.view = [event.width, event.width * 0.75];
    } else if (event.width <= 425) {
      // Ukuran untuk layar antara 320px dan 425px
      this.view = [event.width, event.width * 0.75];
    } else if (event.width <= 600) {
      // Ukuran untuk layar antara 425px dan 600px
      this.view = [event.width, event.width * 0.75];
    } else {
      // Ukuran untuk layar lebih besar dari 600px
      this.view = [event.width * 0.7, event.width * 0.5];
    }
  }

  initializeLoader() {
    setTimeout(() => {
      this.isLoading = false;
    }, 685);
  }

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Menu anda dalam tahap pengembangan...',
      duration: 2000,
    });

    loading.present();
  }

  onSubmit() {
    if (this.babyForm.valid) {
      console.log('Form Data:', this.babyForm.value);
      // Handle form submission, such as sending the data to a server
    }
  }

  initScrollAnimations(): void {
    const articles = document.querySelectorAll('.container');
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