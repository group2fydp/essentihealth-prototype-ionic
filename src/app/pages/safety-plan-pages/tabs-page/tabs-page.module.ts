import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { 
        path: 'safety-plan', 
        loadChildren: 'src/app/pages/safety-plan-pages/safety-plan/safety-plan.module#SafetyPlanPageModule' 
      },
      { 
        path: 'resources', 
        loadChildren: 'src/app/pages/safety-plan-pages/resources/resources.module#ResourcesPageModule' 
      },
      { 
        path: 'information', 
        loadChildren: 'src/app/pages/safety-plan-pages/information/information.module#InformationPageModule' 
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/safety-plan',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TabsPage
  ]
})
export class TabsPageModule {}
