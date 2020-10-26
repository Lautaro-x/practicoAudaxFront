import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public page_title : string;
  public user: User;
  public status: string;
  public alert: string;

  constructor(
    private _userService : UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.page_title = 'Login';
    this.user = new User(1, '', '', '');
  }

  ngOnInit(): void {
    this.logout();
  }

  onSubmit(form){

    this._userService.login(this.user).subscribe(
      response => {
        
        if(response.status == 200){
          localStorage.setItem('usuario', JSON.stringify(response.message));
          this._router.navigate(['inicio']);
        }
        else{
          this.alert = response.message;
        }
        form.reset();
      },
      error =>{
        console.log(<any>error);
        this.alert = error.error.message;
      }
    )
  }

  logout(){
    this._route.params.subscribe(params => {
      let logout = +params['sure'];

      if(logout == 1){
        localStorage.removeItem('usuario');
        this._router.navigate(['login']);
      }
    })
  }

}
