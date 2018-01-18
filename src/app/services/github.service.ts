import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = 'b9e7e2956655d1ce34d4';
    private client_secret = '8713181e796b0a87200355610217e52ce21f7f4d';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'cbartholomew69';
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());

    }

    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());

    }

    updateUser(username:string){
        this.username = username;
    }
}