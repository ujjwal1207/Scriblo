import conf from '../conf/conf'
import { Client, Databases, ID, Storage, Query } from 'appwrite'
export class Service {
  client = new Client()
  database
  storage
  constructor () {
    this.client.setEndpoint(conf.appwriteurl).setProject(conf.appwriteprojid)
    this.database = new Databases(this.client)
    this.storage = new Storage(this.client)
  }
  async createPost ({ title, slug, content, status, featureimage, userid }) {
    try {
      return await this.database.createDocument(
        conf.appwritedbid,
        conf.appwritecollid,
        ID.unique(),
        {
          title,
          slug,
          content,
          status,
          featureimage,
          userid // ✅ match field name in your Appwrite DB
        }
      )
    } catch (error) {
      console.error(
        '❌ Error creating post:',
        error.message,
        error.type,
        error.code,
        error.response
      )
      return null
    }
  }
  async updatePost (slug, { title, content, status, featureimage }) {
    try {
      return await this.database.updateDocument(
        conf.appwritedbid,
        conf.appwritecollid,
        slug,
        {
          title,
          content,
          status,
          featureimage
        }
      )
    } catch (error) {
      console.error('Error updating post:', error)
      throw error
    }
  }
  async getPost (slug) {
    try {
      return await this.database.getDocument(
        conf.appwritedbid,
        conf.appwritecollid,
        slug
      )
    } catch (error) {
      console.error('Error fetching post:', error)
      throw error
    }
  }
  async deletePost (slug) {
    try {
      await this.database.deleteDocument(
        conf.appwritedbid,
        conf.appwritecollid,
        slug
      )
      return { success: true, message: 'Post deleted successfully' }
    } catch (error) {
      console.error('Error deleteing post:', error)
      return { success: false, message: 'Post not found' }
    }
  }
  async getPosts (queries = [Query.equal('status', 'active')]) {
    try {
      return await this.database.listDocuments(
        conf.appwritedbid,
        conf.appwritecollid,
        queries
        //limit,
        //offset
      )
    } catch (error) {
      console.error('Error fetching posts:', error)
      return false
    }
  }

  // Storage methods
  async uploadFile (file) {
    try {
      return await this.storage.createFile(
        conf.appwritebucketid,
        ID.unique(),
        file
      )
    } catch (error) {
      console.error('Error uploading file:', error)
      return false
    }
  }

  async getFile (fileId) {
    try {
      return await this.storage.getFile(conf.appwritebucketid, fileId)
    } catch (error) {
      console.error('Error fetching file:', error)
      return false
    }
  }

  async deleteFile (fileid) {
    try {
      return await this.storage.deleteFile(conf.appwritebucketid, fileid)
    } catch (error) {
      console.error('Error deleting file:', error)
      return false
    }
  }
  getFilePreview (fileId) {
    // ❌ preview = blocked on free plan
    // return this.storage.getFilePreview(conf.appwritebucketid, fileId);

    // ✅ view = works fine on free plan
    return this.storage.getFileView(conf.appwritebucketid, fileId)
  }
}

const service = new Service()

export default service
