import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FeatureOneComponent } from './feature/feature-one/feature-one.component';
import { UnusedFeatureComponent } from './feature/unused-feature/unused-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureOneComponent,
    UnusedFeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
