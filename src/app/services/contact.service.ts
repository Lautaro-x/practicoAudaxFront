import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { global } from './globals';

@Injectable()
export class ContactService {

    public apiUrl = global.apiUrl;
    public identity;

    constructor(
        public _http: HttpClient
    ) {

    }

    getByUser(user): Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.apiUrl+'contactsbyuser/'+ user.id , {headers:headers});
    }

}
