import { SessionService } from './../services/session.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {
 
  reservation = {
    date: '',
    number: '',
    restaurant_id: '123123123'
  };

  constructor(private restaurants:RestaurantService) { }

  ngOnInit(){}

  submit() {
    this.restaurants.reserve(this.reservation)
    .subscribe((result) => {
      console.log(result);
      alert('saved!!!!')
    })
  }
  isFormClean() {
    return true;
  }

}
