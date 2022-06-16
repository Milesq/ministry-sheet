import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PlaceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AppointmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Place {
  readonly id: string;
  readonly name: string;
  readonly desc: string;
  readonly appointments?: (Appointment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Place, PlaceMetaData>);
  static copyOf(source: Place, mutator: (draft: MutableModel<Place, PlaceMetaData>) => MutableModel<Place, PlaceMetaData> | void): Place;
}

export declare class Appointment {
  readonly id: string;
  readonly place: Place;
  readonly approved: boolean;
  readonly datetime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Appointment, AppointmentMetaData>);
  static copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment, AppointmentMetaData>) => MutableModel<Appointment, AppointmentMetaData> | void): Appointment;
}