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
      users {
        items {
          id
          appointmentID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
      users {
        items {
          id
          appointmentID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
      users {
        items {
          id
          appointmentID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      appointments {
        items {
          id
          appointmentID
          userID
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      appointments {
        items {
          id
          appointmentID
          userID
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      appointments {
        items {
          id
          appointmentID
          userID
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
export const onCreateUserAppointment = /* GraphQL */ `
  subscription OnCreateUserAppointment {
    onCreateUserAppointment {
      id
      appointmentID
      userID
      appointment {
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
        users {
          nextToken
          startedAt
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
      user {
        id
        name
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserAppointment = /* GraphQL */ `
  subscription OnUpdateUserAppointment {
    onUpdateUserAppointment {
      id
      appointmentID
      userID
      appointment {
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
        users {
          nextToken
          startedAt
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
      user {
        id
        name
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserAppointment = /* GraphQL */ `
  subscription OnDeleteUserAppointment {
    onDeleteUserAppointment {
      id
      appointmentID
      userID
      appointment {
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
        users {
          nextToken
          startedAt
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
      user {
        id
        name
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
