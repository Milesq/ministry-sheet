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
export const onCreatePendingAppointment = /* GraphQL */ `
  subscription OnCreatePendingAppointment(
    $filter: ModelSubscriptionPendingAppointmentFilterInput
    $owner: String
  ) {
    onCreatePendingAppointment(filter: $filter, owner: $owner) {
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
export const onUpdatePendingAppointment = /* GraphQL */ `
  subscription OnUpdatePendingAppointment(
    $filter: ModelSubscriptionPendingAppointmentFilterInput
    $owner: String
  ) {
    onUpdatePendingAppointment(filter: $filter, owner: $owner) {
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
export const onDeletePendingAppointment = /* GraphQL */ `
  subscription OnDeletePendingAppointment(
    $filter: ModelSubscriptionPendingAppointmentFilterInput
    $owner: String
  ) {
    onDeletePendingAppointment(filter: $filter, owner: $owner) {
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
