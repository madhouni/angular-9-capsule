import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PatientInformationsComponent } from "./patient-informations/patient-informations.component";
import { MeasurementComponent } from "./measurement/measurement.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TitleComponent } from "./title/title.component";
import { RestService } from "./service/rest.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    PatientInformationsComponent,
    MeasurementComponent,
    DashboardComponent,
    TitleComponent
  ],
  bootstrap: [AppComponent],
  providers: [RestService]
})
export class AppModule {}
