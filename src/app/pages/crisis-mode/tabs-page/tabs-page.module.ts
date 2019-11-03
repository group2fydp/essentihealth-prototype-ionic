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
        path: 'guided-mode', 
        loadChildren: './guided-mode/guided-mode.module#GuidedModePageModule' 
      },
      { 
        path: 'resources', 
        loadChildren: './resources/resources.module#ResourcesPageModule' 
      },
      { 
        path: 'information', 
        loadChildren: './information/information.module#InformationPageModule' 
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/guided-mode',
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
  declarations: [TabsPage]
})
export class TabsPageModule {}
