import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import * as data1 from "../data-mock/bed01SubscriptionResult1.json";
import * as data2 from "../data-mock/bed01SubscriptionResult2.json";
import { Bed } from "../model/bed";

@Injectable()
export class RestService {
  constructor(private http: HttpClient) {}

  getMockedData1(): Observable<any> {
    return of(data1);
  }

  getMockedData2(): Observable<any> {
    return of(data2);
  }
}
