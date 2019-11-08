import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CopingStrategiesService {

  constructor() { }

  strategies = [
  {
    title: "Breathing Excercises",
    image: "../../../assets/images/coping-strategies/meditate-img.png",
    btn: "START EXCERCISE"
  },
  {
    title: "Call Mom",
    image: "../../../assets/images/coping-strategies/call-mom-img.jpg",
    btn: "CALL MOM"
  },
  {
    title: "Go for a walk",
    image: "../../../assets/images/coping-strategies/go-for-a-walk-img.jpeg",
    btn: "GET DIRECTIONS"
  }
  ]
}
