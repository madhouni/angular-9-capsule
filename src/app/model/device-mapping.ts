import { Measurement } from "./measurement";

export interface DeviceMapping {
  id: string;
  category: string;
  type: string;
  model: string;
  measurements: Array<Measurement>;
}
