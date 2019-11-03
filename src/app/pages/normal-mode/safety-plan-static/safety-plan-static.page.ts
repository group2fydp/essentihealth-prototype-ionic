import { Component, OnInit } from '@angular/core';
import { CopingStrategiesService } from 'src/app/services/coping-strategies.service';


@Component({
  selector: 'app-safety-plan-static',
  templateUrl: './safety-plan-static.page.html',
  styleUrls: ['./safety-plan-static.page.scss'],
})
export class SafetyPlanStaticPage implements OnInit {

  constructor(private copingStrategiesService : CopingStrategiesService) { }

  strategies = this.copingStrategiesService.strategies;

  ngOnInit() {
  }

}
