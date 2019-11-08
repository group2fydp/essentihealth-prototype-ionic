import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SPElementsService {

  constructor() { }

  elements = [
    {
      title: "Warning Signs",
      list: [
        "Pulling Hair",
        "Skipping Classes",
        "Avoiding Interactions",
        "Thoughts of Self Harm"
      ]
    },
    {
      title: "Coping Strategies",
      list: [
        "Breathing Excercises",
        "Call Mom",
        "Go for a walk"
      ]
    },
    {
      title: "Reasons to Live",
      list: [
        "I couldn't do it to my family",
        "It goes against my religious beliefs",
        "I am almost ready to graduate"
      ]
    },
    {
      title: "Emergency Contacts",
      list: [
        "Mom: (519)-000-0000",
        "Dad: (519)-111-1111",
        "Hanna: (519)-222-2222"
      ]
    }
  ]
}
