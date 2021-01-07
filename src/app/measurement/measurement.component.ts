import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-measurement",
  templateUrl: "./measurement.component.html",
  styleUrls: ["./measurement.component.css"]
})
export class MeasurementComponent implements OnInit {
  @Input() measurements: [];
  @Input() room: string;

  constructor() {}

  ngOnInit() {}
}
