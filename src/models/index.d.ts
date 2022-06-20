import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PlaceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AppointmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserAppointmentMetaData = {
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
  readonly users?: (UserAppointment | null)[] | null;
  readonly approved: boolean;
  readonly datetime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Appointment, AppointmentMetaData>);
  static copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment, AppointmentMetaData>) => MutableModel<Appointment, AppointmentMetaData> | void): Appointment;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly appointments?: (UserAppointment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class UserAppointment {
  readonly id: string;
  readonly appointment: Appointment;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserAppointment, UserAppointmentMetaData>);
  static copyOf(source: UserAppointment, mutator: (draft: MutableModel<UserAppointment, UserAppointmentMetaData>) => MutableModel<UserAppointment, UserAppointmentMetaData> | void): UserAppointment;
}