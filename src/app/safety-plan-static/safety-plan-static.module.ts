import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SafetyPlanStaticPage } from './safety-plan-static.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyPlanStaticPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SafetyPlanStaticPage]
})
export class SafetyPlanStaticPageModule {}
