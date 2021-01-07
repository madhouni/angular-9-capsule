import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-patient-informations",
  templateUrl: "./patient-informations.component.html",
  styleUrls: ["./patient-informations.component.css"]
})
export class PatientInformationsComponent implements OnInit {
  @Input() room: string;
  @Input() name: string;
  @Input() age: string;
  @Input() dateOfBirth: string;
  @Input() mrn: string;

  constructor() {}

  ngOnInit() {}
}
