import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featureimage }) {
  return (
    <Link to={`/post/${$id}`} className="block h-full">
      <div className="w-full h-full bg-gray-100 rounded-xl p-4 flex flex-col shadow-md transition hover:shadow-lg">
        <div className="w-full h-48 mb-4 overflow-hidden rounded-md">
          {featureimage && (
            <img
              src={appwriteService.getFilePreview(featureimage)}
              alt={title}
              className="w-full h-48 object-cover rounded-md"
            />
          )}
        </div>
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 flex-grow">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
