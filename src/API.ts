/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlaceInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelPlaceConditionInput = {
  name?: ModelStringInput | null,
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
  Appointments?: ModelAppointmentConnection | null,
  PendingAppointments?: ModelPendingAppointmentConnection | null,
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

export type ModelPendingAppointmentConnection = {
  __typename: "ModelPendingAppointmentConnection",
  items:  Array<PendingAppointment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type PendingAppointment = {
  __typename: "PendingAppointment",
  id: string,
  datetime: string,
  owner?: string | null,
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
  _version?: number | null,
};

export type DeletePlaceInput = {
  id: string,
  _version?: number | null,
};

export type CreateAppointmentInput = {
  id?: string | null,
  datetime: string,
  users?: Array< string | null > | null,
  placeID: string,
  _version?: number | null,
};

export type ModelAppointmentConditionInput = {
  datetime?: ModelStringInput | null,
  users?: ModelStringInput | null,
  placeID?: ModelIDInput | null,
  and?: Array< ModelAppointmentConditionInput | null > | null,
  or?: Array< ModelAppointmentConditionInput | null > | null,
  not?: ModelAppointmentConditionInput | null,
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
  datetime?: string | null,
  users?: Array< string | null > | null,
  placeID?: string | null,
  _version?: number | null,
};

export type DeleteAppointmentInput = {
  id: string,
  _version?: number | null,
};

export type CreatePendingAppointmentInput = {
  id?: string | null,
  datetime: string,
  owner?: string | null,
  placeID: string,
  _version?: number | null,
};

export type ModelPendingAppointmentConditionInput = {
  datetime?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  placeID?: ModelIDInput | null,
  and?: Array< ModelPendingAppointmentConditionInput | null > | null,
  or?: Array< ModelPendingAppointmentConditionInput | null > | null,
  not?: ModelPendingAppointmentConditionInput | null,
};

export type UpdatePendingAppointmentInput = {
  id: string,
  datetime?: string | null,
  owner?: string | null,
  placeID?: string | null,
  _version?: number | null,
};

export type DeletePendingAppointmentInput = {
  id: string,
  _version?: number | null,
};

export type ModelPlaceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
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
  datetime?: ModelStringInput | null,
  users?: ModelStringInput | null,
  placeID?: ModelIDInput | null,
  and?: Array< ModelAppointmentFilterInput | null > | null,
  or?: Array< ModelAppointmentFilterInput | null > | null,
  not?: ModelAppointmentFilterInput | null,
};

export type ModelPendingAppointmentFilterInput = {
  id?: ModelIDInput | null,
  datetime?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  placeID?: ModelIDInput | null,
  and?: Array< ModelPendingAppointmentFilterInput | null > | null,
  or?: Array< ModelPendingAppointmentFilterInput | null > | null,
  not?: ModelPendingAppointmentFilterInput | null,
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
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
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
    PendingAppointments?:  {
      __typename: "ModelPendingAppointmentConnection",
      items:  Array< {
        __typename: "PendingAppointment",
        id: string,
        datetime: string,
        owner?: string | null,
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
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
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
    PendingAppointments?:  {
      __typename: "ModelPendingAppointmentConnection",
      items:  Array< {
        __typename: "PendingAppointment",
        id: string,
        datetime: string,
        owner?: string | null,
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
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
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
    PendingAppointments?:  {
      __typename: "ModelPendingAppointmentConnection",
      items:  Array< {
        __typename: "PendingAppointment",
        id: string,
        datetime: string,
        owner?: string | null,
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
    datetime: string,
    users?: Array< string | null > | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      PendingAppointments?:  {
        __typename: "ModelPendingAppointmentConnection",
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
    datetime: string,
    users?: Array< string | null > | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      PendingAppointments?:  {
        __typename: "ModelPendingAppointmentConnection",
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
    datetime: string,
    users?: Array< string | null > | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      PendingAppointments?:  {
        __typename: "ModelPendingAppointmentConnection",
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

export type CreatePendingAppointmentMutationVariables = {
  input: CreatePendingAppointmentInput,
  condition?: ModelPendingAppointmentConditionInput | null,
};

export type CreatePendingAppointmentMutation = {
  createPendingAppointment?:  {
    __typename: "PendingAppointment",
    id: string,
    datetime: string,
    owner?: string | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      PendingAppointments?:  {
        __typename: "ModelPendingAppointmentConnection",
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

export type UpdatePendingAppointmentMutationVariables = {
  input: UpdatePendingAppointmentInput,
  condition?: ModelPendingAppointmentConditionInput | null,
};

export type UpdatePendingAppointmentMutation = {
  updatePendingAppointment?:  {
    __typename: "PendingAppointment",
    id: string,
    datetime: string,
    owner?: string | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      PendingAppointments?:  {
        __typename: "ModelPendingAppointmentConnection",
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

export type DeletePendingAppointmentMutationVariables = {
  input: DeletePendingAppointmentInput,
  condition?: ModelPendingAppointmentConditionInput | null,
};

export type DeletePendingAppointmentMutation = {
  deletePendingAppointment?:  {
    __typename: "PendingAppointment",
    id: string,
    datetime: string,
    owner?: string | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      PendingAppointments?:  {
        __typename: "ModelPendingAppointmentConnection",
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
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
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
    PendingAppointments?:  {
      __typename: "ModelPendingAppointmentConnection",
      items:  Array< {
        __typename: "PendingAppointment",
        id: string,
        datetime: string,
        owner?: string | null,
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
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      PendingAppointments?:  {
        __typename: "ModelPendingAppointmentConnection",
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
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      PendingAppointments?:  {
        __typename: "ModelPendingAppointmentConnection",
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
    datetime: string,
    users?: Array< string | null > | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      PendingAppointments?:  {
        __typename: "ModelPendingAppointmentConnection",
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
      datetime: string,
      users?: Array< string | null > | null,
      placeID: string,
      place:  {
        __typename: "Place",
        id: string,
        name: string,
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
      datetime: string,
      users?: Array< string | null > | null,
      placeID: string,
      place:  {
        __typename: "Place",
        id: string,
        name: string,
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

export type GetPendingAppointmentQueryVariables = {
  id: string,
};

export type GetPendingAppointmentQuery = {
  getPendingAppointment?:  {
    __typename: "PendingAppointment",
    id: string,
    datetime: string,
    owner?: string | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      PendingAppointments?:  {
        __typename: "ModelPendingAppointmentConnection",
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

export type ListPendingAppointmentsQueryVariables = {
  filter?: ModelPendingAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPendingAppointmentsQuery = {
  listPendingAppointments?:  {
    __typename: "ModelPendingAppointmentConnection",
    items:  Array< {
      __typename: "PendingAppointment",
      id: string,
      datetime: string,
      owner?: string | null,
      placeID: string,
      place:  {
        __typename: "Place",
        id: string,
        name: string,
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

export type SyncPendingAppointmentsQueryVariables = {
  filter?: ModelPendingAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPendingAppointmentsQuery = {
  syncPendingAppointments?:  {
    __typename: "ModelPendingAppointmentConnection",
    items:  Array< {
      __typename: "PendingAppointment",
      id: string,
      datetime: string,
      owner?: string | null,
      placeID: string,
      place:  {
        __typename: "Place",
        id: string,
        name: string,
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

export type OnCreatePlaceSubscription = {
  onCreatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
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
    PendingAppointments?:  {
      __typename: "ModelPendingAppointmentConnection",
      items:  Array< {
        __typename: "PendingAppointment",
        id: string,
        datetime: string,
        owner?: string | null,
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

export type OnUpdatePlaceSubscription = {
  onUpdatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
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
    PendingAppointments?:  {
      __typename: "ModelPendingAppointmentConnection",
      items:  Array< {
        __typename: "PendingAppointment",
        id: string,
        datetime: string,
        owner?: string | null,
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

export type OnDeletePlaceSubscription = {
  onDeletePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    Appointments?:  {
      __typename: "ModelAppointmentConnection",
      items:  Array< {
        __typename: "Appointment",
        id: string,
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
    PendingAppointments?:  {
      __typename: "ModelPendingAppointmentConnection",
      items:  Array< {
        __typename: "PendingAppointment",
        id: string,
        datetime: string,
        owner?: string | null,
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

export type OnCreateAppointmentSubscription = {
  onCreateAppointment?:  {
    __typename: "Appointment",
    id: string,
    datetime: string,
    users?: Array< string | null > | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      PendingAppointments?:  {
        __typename: "ModelPendingAppointmentConnection",
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

export type OnUpdateAppointmentSubscription = {
  onUpdateAppointment?:  {
    __typename: "Appointment",
    id: string,
    datetime: string,
    users?: Array< string | null > | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      PendingAppointments?:  {
        __typename: "ModelPendingAppointmentConnection",
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

export type OnDeleteAppointmentSubscription = {
  onDeleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    datetime: string,
    users?: Array< string | null > | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      PendingAppointments?:  {
        __typename: "ModelPendingAppointmentConnection",
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

export type OnCreatePendingAppointmentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePendingAppointmentSubscription = {
  onCreatePendingAppointment?:  {
    __typename: "PendingAppointment",
    id: string,
    datetime: string,
    owner?: string | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      PendingAppointments?:  {
        __typename: "ModelPendingAppointmentConnection",
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

export type OnUpdatePendingAppointmentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePendingAppointmentSubscription = {
  onUpdatePendingAppointment?:  {
    __typename: "PendingAppointment",
    id: string,
    datetime: string,
    owner?: string | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      PendingAppointments?:  {
        __typename: "ModelPendingAppointmentConnection",
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

export type OnDeletePendingAppointmentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePendingAppointmentSubscription = {
  onDeletePendingAppointment?:  {
    __typename: "PendingAppointment",
    id: string,
    datetime: string,
    owner?: string | null,
    placeID: string,
    place:  {
      __typename: "Place",
      id: string,
      name: string,
      Appointments?:  {
        __typename: "ModelAppointmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      PendingAppointments?:  {
        __typename: "ModelPendingAppointmentConnection",
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
