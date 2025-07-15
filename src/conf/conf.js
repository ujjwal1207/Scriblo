const conf={
    appwriteurl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteprojid:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwritedbid:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritecollid:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwritebucketid:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}
export default conf;