import { Auth } from '@aws-amplify/auth'
import API from '@aws-amplify/api-rest'

async function removeUser(username: string) {
  const command = '/confirmUserSignUp'
  const config = {
    body: {
      username,
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: (await Auth.currentSession())
        .getAccessToken()
        .getJwtToken(),
    },
  }

  // return API.post('AdminQueries', command, config)
}

export default removeUser
