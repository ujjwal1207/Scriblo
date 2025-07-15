import conf from '../conf/conf'
import { Client, Account, ID } from 'appwrite'

export class Authservice {
  client = new Client();
  account ;
  constructor () {
    this.client
      .setEndpoint(conf.appwriteurl)
      .setProject(conf.appwriteprojid)
    this.account = new Account(this.client)
  }
  async createAccount ({ email, password, name }) {
    try {
      const useraccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      )
      if (useraccount) {
        console.log('account created')
        return this.loginaccount({ email, password })
      } else {
        return useraccount
      }
    } catch (error) {
      throw error
    }
  }
  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(email, password)
      if (session) {
        console.log('login successful')
      } else {
        return session
      }
    } catch (error) {
      throw error
    }
  }
  async getCurrentUser () {
    try {
      return await this.account.get()
    } catch (error) {
      throw error
    }
    return null
  }
  async logout () {
    try {
      return await this.account.deleteSession('current')
    } catch (error) {
      throw error
    }
  }
}
const authservice = new Authservice()

export default authservice
