import { Metadata } from "./metadata";

export interface Measurement {
  id: string;
  value: Date;
  metaData: Metadata;
}
