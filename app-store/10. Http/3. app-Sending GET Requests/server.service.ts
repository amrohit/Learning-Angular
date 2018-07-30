
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable() //we will do inject service given by angular http
export class ServerService {

    constructor(private http: Http) {}

    //add a method
    storeServers(servers: any[]) {
      //config our headers
      const myHeaders = new Headers({
        'Content-Type': 'application/json'
      });

      //post method will create only observable but not sending the request
      //so we need to subscribe, unless u will not it will not send request
  return this.http.post('https://ng-http-b3515.firebaseio.com/data.json', servers, {headers: myHeaders});


      //according to firebase word is (post will append the  exisitng data, put will overwrite data)
    }

    getServers() {
      //we can also pass 2nd args a object configured as our request
      return this.http.get('https://ng-http-b3515.firebaseio.com/data.json');
    }

  }
