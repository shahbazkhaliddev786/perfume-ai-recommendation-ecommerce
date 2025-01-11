import React from "react";

type PostCardProps = {
  profileImage: string;
  userName: string;
  timestamp: string;
  postText: string;
  postImage?: string;
};

const PostCard: React.FC<PostCardProps> = ({
  profileImage,
  userName,
  timestamp,
  postText,
  postImage,
}) => {
  return (
    <div className="w-[25rem] h-fit mx-auto bg-white border shadow-md rounded-lg p-4 mb-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <img
          src={profileImage}
          alt={`${userName}'s profile`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{userName}</h3>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>

      {/* Post Text */}
      <div className="mt-4 text-gray-800">
        <p>{postText}</p>
      </div>

      {/* Post Image */}
      {postImage && (
        <div className="mt-4">
          <img
            src={postImage}
            alt="Post content"
            className="w-full rounded-lg object-cover"
          />
        </div>
      )}

      {/* Actions */}
      <div className="mt-4 flex items-center justify-between text-gray-600">
        <div className="flex justify-between w-[50%]">
        <button className="flex items-center gap-2 hover:text-blue-600">
          <span>Like 12</span>
        </button>
        <button className="flex items-center gap-2 hover:text-blue-600">
          <span>Comment 2</span>
        </button>
        </div>
        <div className="w-[50%]">
            {/* Keeping empty for future */}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
