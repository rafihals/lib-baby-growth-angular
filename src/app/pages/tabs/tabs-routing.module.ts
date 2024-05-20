import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'form',
        loadChildren: () => import('./form/form.module').then(m => m.FormPageModule)
      },
      {
        path: 'baby',
        loadChildren: () => import('./baby/baby.module').then(m => m.BabyPageModule)
      },
      {
        path: 'pie',
        loadChildren: () => import('./pie/pie.module').then(m => m.PiePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
