/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlace = /* GraphQL */ `
  subscription OnCreatePlace($filter: ModelSubscriptionPlaceFilterInput) {
    onCreatePlace(filter: $filter) {
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
        }
        nextToken
        startedAt
      }
      PendingAppointments {
        items {
          id
          datetime
          ownerName
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
export const onUpdatePlace = /* GraphQL */ `
  subscription OnUpdatePlace($filter: ModelSubscriptionPlaceFilterInput) {
    onUpdatePlace(filter: $filter) {
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
        }
        nextToken
        startedAt
      }
      PendingAppointments {
        items {
          id
          datetime
          ownerName
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
export const onDeletePlace = /* GraphQL */ `
  subscription OnDeletePlace($filter: ModelSubscriptionPlaceFilterInput) {
    onDeletePlace(filter: $filter) {
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
        }
        nextToken
        startedAt
      }
      PendingAppointments {
        items {
          id
          datetime
          ownerName
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onCreateAppointment(filter: $filter) {
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
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onUpdateAppointment(filter: $filter) {
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
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onDeleteAppointment(filter: $filter) {
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
export const onCreatePendingAppointment = /* GraphQL */ `
  subscription OnCreatePendingAppointment(
    $filter: ModelSubscriptionPendingAppointmentFilterInput
    $owner: String
  ) {
    onCreatePendingAppointment(filter: $filter, owner: $owner) {
      id
      datetime
      ownerName
      placeID
      place {
        id
        name
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
      owner
    }
  }
`;
export const onUpdatePendingAppointment = /* GraphQL */ `
  subscription OnUpdatePendingAppointment(
    $filter: ModelSubscriptionPendingAppointmentFilterInput
    $owner: String
  ) {
    onUpdatePendingAppointment(filter: $filter, owner: $owner) {
      id
      datetime
      ownerName
      placeID
      place {
        id
        name
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
      owner
    }
  }
`;
export const onDeletePendingAppointment = /* GraphQL */ `
  subscription OnDeletePendingAppointment(
    $filter: ModelSubscriptionPendingAppointmentFilterInput
    $owner: String
  ) {
    onDeletePendingAppointment(filter: $filter, owner: $owner) {
      id
      datetime
      ownerName
      placeID
      place {
        id
        name
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
      owner
    }
  }
`;
