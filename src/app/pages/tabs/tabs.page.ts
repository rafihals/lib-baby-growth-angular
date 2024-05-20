import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  @ViewChild('tabs', { static: false }) tabs: IonTabs;

  selectedTab: any;

  constructor(
    private routerSvc: Router
  ) { }

  ngOnInit(): void {
    this.activateLink(2);
  }

  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
    console.log(this.selectedTab);
  }

  activateLink(index: number) {
    const listItems = document.querySelectorAll('.list');
    listItems.forEach((item, idx) => {
      if (idx === index) {
        item.classList.add('active');
        item.querySelector('.icon').classList.add('hover-active');
      } else {
        item.classList.remove('active');
        item.querySelector('.icon').classList.remove('hover-active');
      }
    });
  }

  isActive(index: number): boolean {
    const listItems = document.querySelectorAll('.list');
    return listItems[index].classList.contains('active');
  }

  documentForm() {
    this.routerSvc.navigate(['/tabs/form'])
  }

  onClickBaby() {
    this.routerSvc.navigate(['tabs/baby'])
  }

  onClickHome() {
    this.routerSvc.navigate(['tabs/home'])
  }

  onClickPie() {
    this.routerSvc.navigate(['tabs/pie'])
  }

  onClickSettings() {
    this.routerSvc.navigate(['/tabs/settings'])
  }
}