import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { CopingStrategiesService } from 'src/app/services/coping-strategies.service';

@Component({
  selector: 'app-guided-mode',
  templateUrl: './guided-mode.component.html',
  styleUrls: ['./guided-mode.component.scss'],
})
export class GuidedModeComponent implements OnInit {

  @ViewChild('slides', { static: true })slides: IonSlides;
  strategies = [];

  disablePrevBtn = true;
  disableNextBtn = false;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    pagination: false
  };

  constructor(private copingStrategiesService : CopingStrategiesService) { }

  ngOnInit(){
    this.strategies = this.copingStrategiesService.strategies;
  }

  nextSlide(){
    this.slides.slideNext();
  }

  previousSlide(){
    this.slides.slidePrev();
  }

  checkSlide(){
    let prom1 = this.slides.isBeginning();
    let prom2 = this.slides.isEnd();
  
    Promise.all([prom1, prom2]).then((data) => {
      data[0] ? this.disablePrevBtn = true : this.disablePrevBtn = false;
      data[1] ? this.disableNextBtn = true : this.disableNextBtn = false;
    });
  }

}
