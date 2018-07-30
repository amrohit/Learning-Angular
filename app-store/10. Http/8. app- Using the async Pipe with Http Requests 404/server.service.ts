import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable() //we will do inject service given by angular http
export class ServerService {
  constructor(private http: Http) {}

  //add a method
  storeServers(servers: any[]) {
    //config our headers
    const myHeaders = new Headers({
      "Content-Type": "application/json"
    });

    //post method will create only observable but not sending the request
    //so we need to subscribe, unless u will not it will not send request
    // return this.http.post('https://ng-http-b3515.firebaseio.com/data.json', servers, {headers: myHeaders});
    return this.http.put(
      "https://ng-http-b3515.firebaseio.com/data.json",
      servers,
      { headers: myHeaders }
    );

    //according to firebase word is (post will append the  exisitng data, put will overwrite data)
  }

  getServers() {
    //Note: removed .json after data in url to catch error

    //we can also pass 2nd args a object configured as our request
    return this.http
      .get("https://ng-http-b3515.firebaseio.com/data")
      .pipe(
        map(
          //map operator will take returned data and wrap into observable
          (response: Response) => {
            const data = response.json();
            for (const server of data) {
              server.name = "FETCHED_" + server.name;
            }
            return data;
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
    return this.http
      .get("https://ng-http-b3515.firebaseio.com/appName.json")
      .pipe(
        map(
          (response: Response) => {
            return response.json();
          }
        )
      );
  }
}
