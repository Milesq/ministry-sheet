import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type PlaceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AppointmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PendingAppointmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Place {
  readonly id: string;
  readonly name: string;
  readonly Appointments?: (Appointment | null)[] | null;
  readonly PendingAppointments?: (PendingAppointment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Place, PlaceMetaData>);
  static copyOf(source: Place, mutator: (draft: MutableModel<Place, PlaceMetaData>) => MutableModel<Place, PlaceMetaData> | void): Place;
}

export declare class Appointment {
  readonly id: string;
  readonly datetime: string;
  readonly users?: (string | null)[] | null;
  readonly place: Place;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Appointment, AppointmentMetaData>);
  static copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment, AppointmentMetaData>) => MutableModel<Appointment, AppointmentMetaData> | void): Appointment;
}

export declare class PendingAppointment {
  readonly id: string;
  readonly datetime: string;
  readonly owner?: string | null;
  readonly place: Place;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PendingAppointment, PendingAppointmentMetaData>);
  static copyOf(source: PendingAppointment, mutator: (draft: MutableModel<PendingAppointment, PendingAppointmentMetaData>) => MutableModel<PendingAppointment, PendingAppointmentMetaData> | void): PendingAppointment;
}