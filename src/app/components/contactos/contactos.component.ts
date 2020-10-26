import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';
import { element } from 'protractor';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  public page_title : string;
  public identity;
  public contactos: Array<Contact>;
  public contactosTabla : Array<any>;
  public filtertext: string;

  constructor(
    private _userService: UserService,
    private _contactService: ContactService,
    private _router: Router
  ) { 
    this.page_title = 'Tus contactos';
    this.identity = _userService.getIdentity();
    if(this.identity == null){
      this._router.navigate(['login']);
    }
    this.contactos = [];
    this.contactosTabla = [];
  }

  ngOnInit(): void {
    this._contactService.getByUser(this.identity).subscribe(
      response => {
        
        if(response.status == 200){

          response.message.forEach(element => {
            console.log(element);
            this.contactos.push( new Contact( element.id_contact, element.id_client, element.name_contact) );
            this.contactosTabla.push({
              id_contact: element.id_contact, 
              id_client: element.id_client, 
              name_contact: element.name_contact,
              name_client: element.name_client,
              showontable: 1
            })
          });
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
      
  }
  filterchange(inp){

    console.log(inp.value.filter);

    this.contactosTabla.forEach(element => {
      if(inp.value.filter == element.id_contact || inp.value.filter == "" ){
        element.showontable = 1;
      }
      else{
        element.showontable = 0;
      }
    })
  }

}

