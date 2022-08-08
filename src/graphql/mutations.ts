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
      description
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
        }
        nextToken
        startedAt
      }
      PendingAppointments {
        items {
          id
          datetime
          owner
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      description
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
        }
        nextToken
        startedAt
      }
      PendingAppointments {
        items {
          id
          datetime
          owner
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      description
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
        }
        nextToken
        startedAt
      }
      PendingAppointments {
        items {
          id
          datetime
          owner
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        description
        Appointments {
          nextToken
          startedAt
        }
        PendingAppointments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        description
        Appointments {
          nextToken
          startedAt
        }
        PendingAppointments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        description
        Appointments {
          nextToken
          startedAt
        }
        PendingAppointments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      owner
      placeID
      place {
        id
        name
        description
        Appointments {
          nextToken
          startedAt
        }
        PendingAppointments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      owner
      placeID
      place {
        id
        name
        description
        Appointments {
          nextToken
          startedAt
        }
        PendingAppointments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      owner
      placeID
      place {
        id
        name
        description
        Appointments {
          nextToken
          startedAt
        }
        PendingAppointments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
