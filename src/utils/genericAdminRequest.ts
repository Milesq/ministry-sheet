import { Auth } from '@aws-amplify/auth'
import API from '@aws-amplify/api-rest'

async function genericAdminRequest(api: string, body: Record<string, unknown>) {
  const command = `/${api}`
  const config = {
    body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: (await Auth.currentSession())
        .getAccessToken()
        .getJwtToken(),
    },
  }

  return API.post('AdminQueries', command, config)
}

export default genericAdminRequest

export const confirmUser = (username: string) =>
  genericAdminRequest('confirmUserSignUp', { username })

export const removeUser = async (username: string) => {
  await genericAdminRequest('disableUser', { username })
  await genericAdminRequest('deleteUser', { username })
}
