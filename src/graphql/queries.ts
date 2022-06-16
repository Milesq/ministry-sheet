/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlace = /* GraphQL */ `
  query GetPlace($id: ID!) {
    getPlace(id: $id) {
      id
      name
      desc
      appointments {
        items {
          id
          approved
          datetime
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          placeAppointmentsId
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
export const listPlaces = /* GraphQL */ `
  query ListPlaces(
    $filter: ModelPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        desc
        appointments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlaces = /* GraphQL */ `
  query SyncPlaces(
    $filter: ModelPlaceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlaces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        desc
        appointments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
      id
      place {
        id
        name
        desc
        appointments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      approved
      datetime
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      placeAppointmentsId
    }
  }
`;
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        place {
          id
          name
          desc
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        approved
        datetime
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        placeAppointmentsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAppointments = /* GraphQL */ `
  query SyncAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAppointments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        place {
          id
          name
          desc
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        approved
        datetime
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        placeAppointmentsId
      }
      nextToken
      startedAt
    }
  }
`;
