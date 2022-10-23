import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type PlaceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AppointmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PendingAppointmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerPlace = {
  readonly id: string;
  readonly name: string;
  readonly Appointments?: (Appointment | null)[] | null;
  readonly PendingAppointments?: (PendingAppointment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlace = {
  readonly id: string;
  readonly name: string;
  readonly Appointments: AsyncCollection<Appointment>;
  readonly PendingAppointments: AsyncCollection<PendingAppointment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Place = LazyLoading extends LazyLoadingDisabled ? EagerPlace : LazyPlace

export declare const Place: (new (init: ModelInit<Place, PlaceMetaData>) => Place) & {
  copyOf(source: Place, mutator: (draft: MutableModel<Place, PlaceMetaData>) => MutableModel<Place, PlaceMetaData> | void): Place;
}

type EagerAppointment = {
  readonly id: string;
  readonly datetime: string;
  readonly users?: (string | null)[] | null;
  readonly place: Place;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAppointment = {
  readonly id: string;
  readonly datetime: string;
  readonly users?: (string | null)[] | null;
  readonly place: AsyncItem<Place>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Appointment = LazyLoading extends LazyLoadingDisabled ? EagerAppointment : LazyAppointment

export declare const Appointment: (new (init: ModelInit<Appointment, AppointmentMetaData>) => Appointment) & {
  copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment, AppointmentMetaData>) => MutableModel<Appointment, AppointmentMetaData> | void): Appointment;
}

type EagerPendingAppointment = {
  readonly id: string;
  readonly datetime: string;
  readonly ownerName?: string | null;
  readonly place: Place;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPendingAppointment = {
  readonly id: string;
  readonly datetime: string;
  readonly ownerName?: string | null;
  readonly place: AsyncItem<Place>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PendingAppointment = LazyLoading extends LazyLoadingDisabled ? EagerPendingAppointment : LazyPendingAppointment

export declare const PendingAppointment: (new (init: ModelInit<PendingAppointment, PendingAppointmentMetaData>) => PendingAppointment) & {
  copyOf(source: PendingAppointment, mutator: (draft: MutableModel<PendingAppointment, PendingAppointmentMetaData>) => MutableModel<PendingAppointment, PendingAppointmentMetaData> | void): PendingAppointment;
}