import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SafetyPlanPage } from './safety-plan.page';
import { SharedSPModule } from '../shared-sp.module';

const routes: Routes = [
  {
    path: '',
    component: SafetyPlanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedSPModule
  ],
  declarations: [SafetyPlanPage]
})
export class SafetyPlanPageModule {}
