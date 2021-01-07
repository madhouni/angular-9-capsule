import { Component, OnInit } from "@angular/core";
import { Observable, of, timer } from "rxjs";
import { exhaustMap } from "rxjs/operators";
import { RestService } from "../service/rest.service";
import { Bed } from "../model/bed";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  isData1 = true;
  patientInformations$: Observable<Bed>;

  constructor(private restService: RestService) {
    this.patientInformations$ = timer(0, 2000).pipe(
      exhaustMap(timerVal => this.getData())
    );
  }

  getData(): Observable<any> {
    if (this.isData1) {
      this.isData1 = false;
      return this.restService.getMockedData2();
    } else {
      this.isData1 = true;
      return this.restService.getMockedData1();
    }
  }

  ngOnInit() {}
}
