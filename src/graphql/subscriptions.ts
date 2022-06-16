/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlace = /* GraphQL */ `
  subscription OnCreatePlace {
    onCreatePlace {
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
export const onUpdatePlace = /* GraphQL */ `
  subscription OnUpdatePlace {
    onUpdatePlace {
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
export const onDeletePlace = /* GraphQL */ `
  subscription OnDeletePlace {
    onDeletePlace {
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
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment {
    onCreateAppointment {
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
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment {
    onUpdateAppointment {
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
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment {
    onDeleteAppointment {
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
