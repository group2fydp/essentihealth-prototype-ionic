import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety-plan-static',
  templateUrl: './safety-plan-static.page.html',
  styleUrls: ['./safety-plan-static.page.scss'],
})
export class SafetyPlanStaticPage implements OnInit {

  public strategies = [
    {
      title: "Warning Signs",
      signs: [
        "Not Eating",
        "Skipping Class",
        "Unable to fall asleep quickly"
      ]
    },
    {
      title: "Reasons To Live",
      list: [
        "My parents love me",
        "It is frouned upon in my religion",
        "I couldn't do it to my best friend",
        "I am almost done my degree"
      ]
    },
    {
      title: "Emergency Contacts",
      list:[
        "Mom: 519-555-8888",
        "Gabby: 614-888-9999"
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
