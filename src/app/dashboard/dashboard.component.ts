import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [RestaurantService]
})
export class DashboardComponent implements OnInit {

  restaurants: any;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {

    this.restaurantService.getList().subscribe((restaurants) => {
      this.restaurants = restaurants;
    });
    /*
    console.log(this.phone);
    this.phone.getList()
    .subscribe((phones) => {
      this.phones = phones;
    });
    */
  }

}
