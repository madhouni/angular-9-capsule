import { DeviceMapping } from "./device-mapping";

export interface Patient {
  name: string;
  age: number;
  mrn: number;
  dateOfBirth: Date;
  deviceMappings: Array<DeviceMapping>;
}
