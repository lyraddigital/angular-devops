import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FeatureTwoRoutingModule } from './feature-two.routing';
import { FeatureTwoComponent } from './feature-two.component';

@NgModule({
  declarations: [
    FeatureTwoComponent
  ],
  imports: [
    CommonModule,
    FeatureTwoRoutingModule
  ]
})
export class FeatureTwoModule { }