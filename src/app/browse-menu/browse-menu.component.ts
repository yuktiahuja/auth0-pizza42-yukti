import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-browse-menu',
  templateUrl: './browse-menu.component.html',
  styleUrls: ['./browse-menu.component.css']
})
export class BrowseMenuComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
