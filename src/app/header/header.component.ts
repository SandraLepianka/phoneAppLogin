import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user: any;
  @Output() onLogout = new EventEmitter<string>();


  constructor(private session:SessionService) { }

  ngOnInit() {
  }



  logout(event) {
    alert('in child')
    this.onLogout.emit(event);
  }

}
