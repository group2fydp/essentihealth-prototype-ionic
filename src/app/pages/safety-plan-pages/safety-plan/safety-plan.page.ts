import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety-plan',
  templateUrl: './safety-plan.page.html',
  styleUrls: ['./safety-plan.page.scss'],
})
export class SafetyPlanPage implements OnInit {

  guidedModeActive = false;
  toggleBtnText = "GUIDED MODE";

  constructor() { }

  ngOnInit(){
  }

  toggleGuidedMode(){
    this.guidedModeActive = !this.guidedModeActive;

    if (this.guidedModeActive) {
      this.toggleBtnText = "EXIT GUIDED MODE";
    } else {
      this.toggleBtnText = "GUIDED MODE";
    }
  }

}
