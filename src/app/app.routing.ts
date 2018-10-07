import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { FeatureOneComponent } from './feature-one/feature-one.component';
import { FeatureTwoComponent } from './feature-two/feature-two.component';

const routes: Routes = [
    {
        path:'feature-two',
        component: FeatureTwoComponent
    },
    {
        path: 'feature-one',
        component: FeatureOneComponent
    },
    {
        path: '**',
        component: FeatureOneComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }