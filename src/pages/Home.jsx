import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components/index';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
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
  );
}

export default Home;
