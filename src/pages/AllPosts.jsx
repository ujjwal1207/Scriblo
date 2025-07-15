import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components/index'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className="flex flex-wrap -m-2">
  {posts.map((post) => (
    <div key={post.$id} className="p-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="bg-white border rounded-lg overflow-hidden shadow-md h-full flex flex-col">
        <PostCard {...post} />
      </div>
    </div>
  ))}
</div>

            </Container>
    </div>
  )
}

export default AllPosts