import { Component, OnInit } from '@angular/core';
import { SPElementsService } from 'src/app/services/spelements.service';

@Component({
  selector: 'app-static-mode',
  templateUrl: './static-mode.component.html',
  styleUrls: ['./static-mode.component.scss'],
})
export class StaticModeComponent implements OnInit {
  elements = [];

  constructor(private spElementsService : SPElementsService) { }

  ngOnInit(){
    this.elements = this.spElementsService.elements;
  }

}
