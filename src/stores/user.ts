import { unimplemented } from '@/common'
import { Auth, type CognitoUser } from '@aws-amplify/auth'
import { API } from 'aws-amplify'
import { defineStore } from 'pinia'

interface UserState {
  user: string | null
  name: string | null
  isAdmin: boolean
}

const DEFAULT_PASS = 'zaq1@WSX'

export function transformUserName(name: string): string {
  return name.toLowerCase().replaceAll(/\s/g, '')
}

async function confirm(username: string) {
  const apiName = 'AdminQueries'
  const path = '/confirmUserSignUp'
  const myInit = {
    body: {
      username,
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
  }

  return API.post(apiName, path, myInit)
}

const useUser = defineStore('user', {
  state: (): UserState => ({
    user: null,
    name: null,
    isAdmin: false,
  }),
  getters: {
    isLoggedIn: state => !!state.user,
  },
  actions: {
    async requestAccess(username: string) {
      await Auth.signUp({
        username: transformUserName(username),
        password: DEFAULT_PASS,
        attributes: {
          name: username,
        },
      })
    },
    async login(
      username: string,
      pass: string = DEFAULT_PASS,
      newPasswordCb: () => Promise<string> = unimplemented
    ) {
      const user = (await Auth.signIn(
        transformUserName(username),
        pass
      )) as CognitoUser
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const aUser = user as any

      if (aUser.challengeName === 'NEW_PASSWORD_REQUIRED') {
        await Auth.completeNewPassword(user, await newPasswordCb())
      }

      this.user = user.getUsername()

      const { name } = aUser.attributes as { name: string }
      this.name = name

      await this.checkIfAdmin()
    },
    async asd() {
      const users = `Oćwieja Sebastian
Oćwieja Estera
Martynenko Michał
Martynenko Nadeżda
Nadolska Alina
Wiśniewski Miłosz
Wiśniewski Bartosz
Hrynczuk Jana
Krzok Gabriela
Kolesnikova Yevhenia
Molchanovska Ludmiła
Hutnik Wiktoria
Tarnawski Jarosław
Petryszyna Diana
Kuchmenko Hanna
Charczylawa Natalia
Hohilczyn Mariana
Grodzicki Paweł
Grodzicka Alicja
Melnyk Wasyl
Melnyk Oksana
Melnyk Dżulia
Łukaszewicz Filip
Podstawna Aurelia
Sopilniak Natalia
Bondar Elena
Subotina Olesa
Bodnar Julia
Owczarz Beniamin
Owczarz Aleksandra
Kloska Arkadiusz
Kloska Ilona
Grycz Beniamin
Grycz Joanna
Urbaniak Zbigniew
Urbaniak Joanna
Goerke Adrian
Goerke Agnieszka
Dombrowski Mateusz
Dombrowska Tamara
Żurek Danuta
Marszał Bożena
Rozkosz Maurycy
Rozkosz Olga
Sobieraj Sylwia
Schirakowski Piotr
Schirakowska Edyta
Gowor Mateusz
Gowor Michelle
Grocholewski Ryszard
Grocholewska Irena
Nowak Robert
Nowak Maria
Nowak Zofia
Narożny Waldemar
Narożna Sabina
Rembacz Androna
Nowak Mariola
Skoropiński Jacek
Skoropińska Żaneta
Pawlik Wiktor
Klimkiewicz Jarosław
Klimkiewicz Wioletta
Marciniak Daniel
Marciniak Małgorzata
Marciniak Emilia
Pankau Agnieszka
Kurek Ewa
Deranek Karolina
Kutowińska Wanda
Malinowski Dariusz
Kmieć Łukasz
Kmieć Natalia
Schirakowski Marcin
Schirakowska Agata
Owczarz Ewa
Owczarz Pascal
Kabat Witold
Kabat Anna
Piech Ewa
Ziółkowski Janusz
Ziółkowska Marlena
Suchecki Hieronim
Suchecka Krystyna
Majka Ewa
Walczak Krystyna`

      for (let name of users.split('\n')) {
        console.log(name)
        await confirm(transformUserName(name)).catch(() => {})

        name = name.split(' ').reverse().join(' ')
        await confirm(transformUserName(name)).catch(() => {})

        // await Auth.signUp({
        //   username: transformUserName(name),
        //   password: DEFAULT_PASS,
        //   attributes: {
        //     name,
        //   },
        // }).catch(() => console.log('name already exists', name))
      }
      console.log('finished')
    },
    async checkIfAdmin() {
      if (!this.isLoggedIn) {
        return
      }

      const userPool = (await Auth.currentUserPoolUser()) as CognitoUser
      const { payload } = userPool.getSignInUserSession()!.getAccessToken()!

      const groups: string[] | undefined = payload['cognito:groups']

      if (groups?.includes('admins')) {
        this.isAdmin = true
      }
    },
    async logout(): Promise<void> {
      this.$reset()

      await Auth.signOut()
    },
  },
  persist: true,
})

export default useUser
