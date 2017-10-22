import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { FeatureOneComponent } from './feature/feature-one/feature-one.component';

const routes: Routes = [
    {
        path:'feature-two',
        loadChildren: 'app/feature/feature-two/feature-two.module#FeatureTwoModule'
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