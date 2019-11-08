import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GuidedModeComponent } from './guided-mode/guided-mode.component';
import { StaticModeComponent } from './static-mode/static-mode.component';



@NgModule({
  declarations: [
    GuidedModeComponent,
    StaticModeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule

  ],
  exports: [
    GuidedModeComponent,
    StaticModeComponent
  ]
})
export class SharedSPModule { }
