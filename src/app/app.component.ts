import { Component, OnInit, DoCheck } from '@angular/core';
import { ContactService } from './services/contact.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserService, ContactService ]
})
export class AppComponent implements OnInit, DoCheck{
  public title = 'practicoAudaxFront';
  public identity;

  constructor(
    public _userService: UserService
  ){
    this.identity = this._userService.getIdentity();
  }

  ngOnInit(){

  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

}
