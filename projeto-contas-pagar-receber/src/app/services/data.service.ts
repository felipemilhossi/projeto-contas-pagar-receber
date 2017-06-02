import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {
    private serviceUrl = 'http://localhost:5000/api/';

    constructor(public http: Http) { }

    getHeaders(): any {
        const token = localStorage.getItem('token');
        const headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Bearer ${token}`);
        const options = new RequestOptions({ headers: headers });
        return options;
    }

    authenticate(data: any) {
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: headers });

        let body = new URLSearchParams();
        body.set('username', data.username);
        body.set('password', data.password);

        return this
            .http
            .post(this.serviceUrl + 'user/authenticate', body, options)
            .map((res: Response) => res.json());
    }

    getAccounts() {
        return this.http.get(this.serviceUrl + 'account/v1/accounts', this.getHeaders()).map((res: Response) => res.json());
    }

    getAccount(id) {
        return this.http.get(this.serviceUrl + 'account/v1/accounts/' + id, this.getHeaders()).map((res: Response) => res.json());
    }

    deleteAccount(id) {
        return this.http.delete(this.serviceUrl + 'account/v1/accounts/' + id, this.getHeaders());
    }

    postAccount(data) {
        return this.http.post(this.serviceUrl + 'account/v1/accounts', data, this.getHeaders());
    }

    putAccount(id, data) {
        return this.http.put(this.serviceUrl + 'account/v1/accounts/' + id, data, this.getHeaders());
    }
    
}