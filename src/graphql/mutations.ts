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
export const updatePlace = /* GraphQL */ `
  mutation UpdatePlace(
    $input: UpdatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    updatePlace(input: $input, condition: $condition) {
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
export const deletePlace = /* GraphQL */ `
  mutation DeletePlace(
    $input: DeletePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    deletePlace(input: $input, condition: $condition) {
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
export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $input: CreateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    createAppointment(input: $input, condition: $condition) {
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
export const updateAppointment = /* GraphQL */ `
  mutation UpdateAppointment(
    $input: UpdateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    updateAppointment(input: $input, condition: $condition) {
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
export const deleteAppointment = /* GraphQL */ `
  mutation DeleteAppointment(
    $input: DeleteAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    deleteAppointment(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserAppointment = /* GraphQL */ `
  mutation CreateUserAppointment(
    $input: CreateUserAppointmentInput!
    $condition: ModelUserAppointmentConditionInput
  ) {
    createUserAppointment(input: $input, condition: $condition) {
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
export const updateUserAppointment = /* GraphQL */ `
  mutation UpdateUserAppointment(
    $input: UpdateUserAppointmentInput!
    $condition: ModelUserAppointmentConditionInput
  ) {
    updateUserAppointment(input: $input, condition: $condition) {
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
export const deleteUserAppointment = /* GraphQL */ `
  mutation DeleteUserAppointment(
    $input: DeleteUserAppointmentInput!
    $condition: ModelUserAppointmentConditionInput
  ) {
    deleteUserAppointment(input: $input, condition: $condition) {
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
