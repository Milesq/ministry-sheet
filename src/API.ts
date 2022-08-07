/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlaceInput = {
  id?: string | null,
  name: string,
  description: string,
  _version?: number | null,
};

export type ModelPlaceConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPlaceConditionInput | null > | null,
  or?: Array< ModelPlaceConditionInput | null > | null,
  not?: ModelPlaceConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Place = {
  __typename: "Place",
  id: string,
  name: string,
  description: string,
  Appointments?: ModelAppointmentConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelAppointmentConnection = {
  __typename: "ModelAppointmentConnection",
  items:  Array<Appointment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Appointment = {
  __typename: "Appointment",
  id: string,
  approved: boolean,
  datetime: string,
  users?: Array< string | null > | null,
  placeID: string,
  place: Place,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePlaceInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeletePlaceInput = {
  id: string,
  _version?: number | null,
};

export type CreateAppointmentInput = {
  id?: string | null,
  approved: boolean,
  datetime: string,
  users?: Array< string | null > | null,
  placeID: string,
  _version?: number | null,
};

export type ModelAppointmentConditionInput = {
  approved?: ModelBooleanInput | null,
  datetime?: ModelStringInput | null,
  users?: ModelStringInput | null,
  placeID?: ModelIDInput | null,
  and?: Array< ModelAppointmentConditionInput | null > | null,
  or?: Array< ModelAppointmentConditionInput | null > | null,
  not?: ModelAppointmentConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAppointmentInput = {
  id: string,
  approved?: boolean | null,
  datetime?: string | null,
  users?: Array< string | null > | null,
  placeID?: string | null,
  _version?: number | null,
};

export type DeleteAppointmentInput = {
  id: string,
  _version?: number | null,
};

export type ModelPlaceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPlaceFilterInput | null > | null,
  or?: Array< ModelPlaceFilterInput | null > | null,
  not?: ModelPlaceFilterInput | null,
};

export type ModelPlaceConnection = {
  __typename: "ModelPlaceConnection",
  items:  Array<Place | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAppointmentFilterInput = {
  id?: ModelIDInput | null,
  approved?: ModelBooleanInput | null,
  datetime?: ModelStringInput | null,
  users?: ModelStringInput | null,
  placeID?: ModelIDInput | null,
  and?: Array< ModelAppointmentFilterInput | null > | null,
  or?: Array< ModelAppointmentFilterInput | null > | null,
  not?: ModelAppointmentFilterInput | null,
};

export type ModelSubscriptionPlaceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlaceFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlaceFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAppointmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  approved?: ModelSubscriptionBooleanInput | null,
  datetime?: ModelSubscriptionStringInput | null,
  users?: ModelSubscriptionStringInput | null,
  placeID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAppointmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAppointmentFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreatePlaceMutationVariables = {
  input: CreatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type CreatePlaceMutation = {
  createPlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    description: string,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        approved: boolean,
        datetime: string,
        users?: Array< string | null > | null,
        placeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePlaceMutationVariables = {
  input: UpdatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type UpdatePlaceMutation = {
  updatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    description: string,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        approved: boolean,
        datetime: string,
        users?: Array< string | null > | null,
        placeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePlaceMutationVariables = {
  input: DeletePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type DeletePlaceMutation = {
  deletePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    description: string,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        approved: boolean,
        datetime: string,
        users?: Array< string | null > | null,
        placeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAppointmentMutationVariables = {
  input: CreateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type CreateAppointmentMutation = {
  createAppointment?:  {
    __typename: "Appointment",
    id: string,
    approved: boolean,
    datetime: string,
    users?: Array< string | null > | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      description: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAppointmentMutationVariables = {
  input: UpdateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type UpdateAppointmentMutation = {
  updateAppointment?:  {
    __typename: "Appointment",
    id: string,
    approved: boolean,
    datetime: string,
    users?: Array< string | null > | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      description: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAppointmentMutationVariables = {
  input: DeleteAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type DeleteAppointmentMutation = {
  deleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    approved: boolean,
    datetime: string,
    users?: Array< string | null > | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      description: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetPlaceQueryVariables = {
  id: string,
};

export type GetPlaceQuery = {
  getPlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    description: string,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        approved: boolean,
        datetime: string,
        users?: Array< string | null > | null,
        placeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPlacesQueryVariables = {
  filter?: ModelPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlacesQuery = {
  listPlaces?:  {
    __typename: "ModelPlaceConnection",
    items:  Array< {
      __typename: "Place",
      id: string,
      name: string,
      description: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlacesQueryVariables = {
  filter?: ModelPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlacesQuery = {
  syncPlaces?:  {
    __typename: "ModelPlaceConnection",
    items:  Array< {
      __typename: "Place",
      id: string,
      name: string,
      description: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAppointmentQueryVariables = {
  id: string,
};

export type GetAppointmentQuery = {
  getAppointment?:  {
    __typename: "Appointment",
    id: string,
    approved: boolean,
    datetime: string,
    users?: Array< string | null > | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      description: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAppointmentsQueryVariables = {
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppointmentsQuery = {
  listAppointments?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      approved: boolean,
      datetime: string,
      users?: Array< string | null > | null,
      placeID: string,
      place:  {
        __typename: "Place",
        id: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAppointmentsQueryVariables = {
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAppointmentsQuery = {
  syncAppointments?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      approved: boolean,
      datetime: string,
      users?: Array< string | null > | null,
      placeID: string,
      place:  {
        __typename: "Place",
        id: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreatePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
};

export type OnCreatePlaceSubscription = {
  onCreatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    description: string,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        approved: boolean,
        datetime: string,
        users?: Array< string | null > | null,
        placeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
};

export type OnUpdatePlaceSubscription = {
  onUpdatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    description: string,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        approved: boolean,
        datetime: string,
        users?: Array< string | null > | null,
        placeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
};

export type OnDeletePlaceSubscription = {
  onDeletePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    description: string,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
        approved: boolean,
        datetime: string,
        users?: Array< string | null > | null,
        placeID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
};

export type OnCreateAppointmentSubscription = {
  onCreateAppointment?:  {
    __typename: "Appointment",
    id: string,
    approved: boolean,
    datetime: string,
    users?: Array< string | null > | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      description: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
};

export type OnUpdateAppointmentSubscription = {
  onUpdateAppointment?:  {
    __typename: "Appointment",
    id: string,
    approved: boolean,
    datetime: string,
    users?: Array< string | null > | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      description: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
};

export type OnDeleteAppointmentSubscription = {
  onDeleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    approved: boolean,
    datetime: string,
    users?: Array< string | null > | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      description: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
