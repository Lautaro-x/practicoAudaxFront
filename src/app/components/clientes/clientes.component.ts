import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ContactService } from 'src/app/services/contact.service';
import { Client } from 'src/app/models/client';
import { core } from '@angular/compiler';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public page_title : string;
  public identity;
  public clients: Array<Client>;
  constructor(
    private _userService: UserService,
    private _contactService: ContactService,
    private _router: Router
  ) { 
    this.page_title = 'Tus clientes';
    this.identity = _userService.getIdentity();
    if(this.identity == null){
      this._router.navigate(['login']);
    }
    this.clients = [];
  }

  ngOnInit(): void {
    this._contactService.getByUser(this.identity).subscribe(
      response => {
        
        if(response.status == 200){

          response.message.forEach(element => {
            this.clients.push( new Client( element.id, element.id_user, element.name) );
          });
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
      
  }

}
