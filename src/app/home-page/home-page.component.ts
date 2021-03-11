import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomePageService } from '../service/home-page.service';
import { HomePage } from './home-page.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public  homePage: HomePage[];
  subscription = new Subscription();
  constructor(private homePageService:HomePageService) {
    this.homePage = [];
   }
  ngOnInit(): void {
    this.getImageList()
  }

  getImageList() {
    this.subscription.add(this.homePageService.getList().subscribe((response:any) => {
      this.homePage = response
    }, error => {
      console.log(error);
    }));
  }

}
