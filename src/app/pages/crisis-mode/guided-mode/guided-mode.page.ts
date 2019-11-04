import { Component, OnInit } from '@angular/core';
import { CopingStrategiesService } from 'src/app/services/coping-strategies.service';

@Component({
  selector: 'app-guided-mode',
  templateUrl: './guided-mode.page.html',
  styleUrls: ['./guided-mode.page.scss'],
})
export class GuidedModePage implements OnInit {

  constructor(private copingStrategiesService : CopingStrategiesService) { }

  strategies = this.copingStrategiesService.strategies;

  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  
  ngOnInit() {
  }

}
