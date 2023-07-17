/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlace = /* GraphQL */ `
  mutation CreatePlace(
    $input: CreatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    createPlace(input: $input, condition: $condition) {
      id
      name
      Appointments {
        items {
          id
          datetime
          users
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      PendingAppointments {
        items {
          id
          datetime
          ownerName
          owner
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePlace = /* GraphQL */ `
  mutation UpdatePlace(
    $input: UpdatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    updatePlace(input: $input, condition: $condition) {
      id
      name
      Appointments {
        items {
          id
          datetime
          users
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      PendingAppointments {
        items {
          id
          datetime
          ownerName
          owner
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePlace = /* GraphQL */ `
  mutation DeletePlace(
    $input: DeletePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    deletePlace(input: $input, condition: $condition) {
      id
      name
      Appointments {
        items {
          id
          datetime
          users
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      PendingAppointments {
        items {
          id
          datetime
          ownerName
          owner
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $input: CreateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    createAppointment(input: $input, condition: $condition) {
      id
      datetime
      users
      placeID
      place {
        id
        name
        Appointments {
          nextToken
          startedAt
          __typename
        }
        PendingAppointments {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateAppointment = /* GraphQL */ `
  mutation UpdateAppointment(
    $input: UpdateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    updateAppointment(input: $input, condition: $condition) {
      id
      datetime
      users
      placeID
      place {
        id
        name
        Appointments {
          nextToken
          startedAt
          __typename
        }
        PendingAppointments {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteAppointment = /* GraphQL */ `
  mutation DeleteAppointment(
    $input: DeleteAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    deleteAppointment(input: $input, condition: $condition) {
      id
      datetime
      users
      placeID
      place {
        id
        name
        Appointments {
          nextToken
          startedAt
          __typename
        }
        PendingAppointments {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createPendingAppointment = /* GraphQL */ `
  mutation CreatePendingAppointment(
    $input: CreatePendingAppointmentInput!
    $condition: ModelPendingAppointmentConditionInput
  ) {
    createPendingAppointment(input: $input, condition: $condition) {
      id
      datetime
      ownerName
      owner
      placeID
      place {
        id
        name
        Appointments {
          nextToken
          startedAt
          __typename
        }
        PendingAppointments {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePendingAppointment = /* GraphQL */ `
  mutation UpdatePendingAppointment(
    $input: UpdatePendingAppointmentInput!
    $condition: ModelPendingAppointmentConditionInput
  ) {
    updatePendingAppointment(input: $input, condition: $condition) {
      id
      datetime
      ownerName
      owner
      placeID
      place {
        id
        name
        Appointments {
          nextToken
          startedAt
          __typename
        }
        PendingAppointments {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePendingAppointment = /* GraphQL */ `
  mutation DeletePendingAppointment(
    $input: DeletePendingAppointmentInput!
    $condition: ModelPendingAppointmentConditionInput
  ) {
    deletePendingAppointment(input: $input, condition: $condition) {
      id
      datetime
      ownerName
      owner
      placeID
      place {
        id
        name
        Appointments {
          nextToken
          startedAt
          __typename
        }
        PendingAppointments {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
