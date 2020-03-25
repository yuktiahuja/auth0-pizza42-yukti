import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-orderpizza',
  templateUrl: './orderpizza.component.html',
  styleUrls: ['./orderpizza.component.css']
})
export class OrderpizzaComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
