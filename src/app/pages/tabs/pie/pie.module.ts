import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PiePageRoutingModule } from './pie-routing.module';
import { PiePage } from './pie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiePageRoutingModule
  ],
  declarations: [PiePage]
})
export class PiePageModule {}
