import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Headers, Response } from "@angular/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable() //we will do inject service given by angular http
export class ServerService {
  constructor(private httpClient: HttpClient) {}

  //add a method
  storeServers(servers: any[]) {
    //config our headers
    const myHeaders = new Headers({
      "Content-Type": "application/json"
    });

    //post method will create only observable but not sending the request
    //so we need to subscribe, unless u will not it will not send request
    // return this.http.post('https://ng-http-b3515.firebaseio.com/data.json', servers, {headers: myHeaders});
    // httpClient(url,body)
    return this.httpClient.put(
      "https://ng-http-b3515.firebaseio.com/data.json",
      servers);

    //according to firebase word is (post will append the  exisitng data, put will overwrite data)
  }

  getServers() {
    //Note: removed .json after data in url to catch error

    //we can also pass 2nd args a object configured as our request
    return this.httpClient
      .get<any[]>("https://ng-http-b3515.firebaseio.com/data.json")
      .pipe(
        map(
          //map operator will take returned data and wrap into observable
          (response) => {

            for (const server of response) {
              server.name = "FETCHED_" + server.name;
            }
            return response;
          }
        )
      )
      .pipe(
        catchError((error: Response) => {
          console.log(error); //this would not work however, so needs to observable
          // return Observable.throw('Something went wrong');
          //here catch operator will not wrap our data into observable automatically so can use Observable and throw method

          //updated code with new rxjs
          return throwError("Something went wrong..");
        })
      );
  }

  getAppName() {
    return this.httpClient
      .get<Promise<any>>("https://ng-http-b3515.firebaseio.com/appName.json")
      .pipe(
        map(
          (response) => {
            return response;
          }
        )
      );
  }
}
