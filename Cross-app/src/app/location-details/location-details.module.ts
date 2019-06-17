import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LocationDetailsPage } from './location-details.page';
import {AgmCoreModule} from '@agm/core';

const routes: Routes = [
  {
    path: '',
    component: LocationDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAiS05q665akG3ue6XUBdGSdmxrFXCtD90'
    })
  ],
  declarations: [LocationDetailsPage]
})
export class LocationDetailsPageModule {}
