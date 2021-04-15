import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: string;
  constructor() { }

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('user'));    
    this.user = `${user.user.firstName} ${user.user.lastName}`;
  }

}
