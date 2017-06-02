import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {
    private serviceUrl = '';

    constructor(public http: Http) { }

    getHeaders(): any {
        const token = localStorage.getItem('token');
        const headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Bearer ${token}`);
        const options = new RequestOptions({ headers: headers });
        return options;
    }

    authenticate(data: any) {
        return this
            .http
            .post(this.serviceUrl + 'v1/authenticate', data)
            .map((res: Response) => res.json());
    }

    getAccounts() {
        return this.http.get(this.serviceUrl + 'v1/accounts', this.getHeaders()).map((res: Response) => res.json());
    }

    getAccount(id) {
        return this.http.get(this.serviceUrl + 'v1/accounts/' + id, this.getHeaders()).map((res: Response) => res.json());
    }

    deleteAccount(id) {
        return this.http.delete(this.serviceUrl + 'v1/accounts/' + id, this.getHeaders());
    }

    postAccount(data) {
        return this.http.post(this.serviceUrl + 'v1/accounts', data, this.getHeaders());
    }

    putAccount(id, data) {
        return this.http.put(this.serviceUrl + 'v1/accounts/' + id, data, this.getHeaders());
    }
    
}