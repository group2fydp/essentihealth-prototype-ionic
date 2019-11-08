import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pages: Array<{title: string, component: string, url: string, openTab?: any}>;
  rootPage = 'TabsPage';

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Home', component: 'TabsPage', url: '/tabs/home'}
    ]
  }

  openTab(page){
    this.navCtrl.navigateRoot(page.url)
  }

}
