import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { global } from './globals';

@Injectable()
export class UserService {

    public apiUrl = global.apiUrl;
    public identity;

    constructor(
        public _http: HttpClient
    ) {

    }

    login(user): Observable<any>{
        let json = JSON.stringify(user);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.apiUrl+'userLogin', params, {headers:headers});
    }

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('usuario'));
        if(identity && identity!='Undefined'){
            this.identity = identity;
        }
        else{
            this.identity = null;
        }
        return this.identity;
    }
}


