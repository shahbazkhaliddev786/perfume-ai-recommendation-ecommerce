
"use client";

import PostCard from "./card";

export default function Community() {

  const UserPosts = [
    {
      profileImage: "/1.jpg",
      userName: "John Doe",
      timestamp: "2 hrs ago",
      postText: "Had an amazing day at the beach! 🏖️",
      postImage: "/1.jpg",
    },
    {
      profileImage: "/2.jpg",
      userName: "Jane Smith",
      timestamp: "1 day ago",
      postText: "Here's a quick photo of my breakfast! 🍳🥑",
      postImage: "/2.jpg",
    },
    {
      profileImage: "/3.jpg",
      userName: "Mike Johnson",
      timestamp: "3 days ago",
      postText: "Loving the new book I'm reading. 📚",
    },
  ];

  return (
    <div className="min-h-screen  px-6 py-10">
      <div className="w-full">
        <div className="w-full py-4 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6 text-center">Community</h1>
          {/* Create a new post */}
          <div className="mb-6">
            <div className="pb-2">
              <textarea
                placeholder="Share your thoughts about perfumes..."
                className="w-full border rounded-lg p-4 mb-1"
                rows={4}
              ></textarea>
              <button className="border mb-4 rounded bg-green-500 text-white py-2 px-4 hover:bg-green-400">Upload Media</button>
            </div>
            <button
              className="py-2 px-6 rounded border hover:bg-gray-100"
            >
              Post
            </button>
          </div>
        </div>

        <div className=" w-full flex flex-wrap">
          {UserPosts.map((post, index) => (
            <PostCard
              key={index}
              profileImage='https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400'
              userName={post.userName}
              timestamp={post.timestamp}
              postText={post.postText}
              postImage={post.postImage}
            />
          ))}
        </div>

      </div>
    </div>
  );
}


// "use client";

// import { useState, useEffect } from "react";
// import PostCard from "./card";

// interface Post {
//   id: number;
//   text: string;
//   likes: number;
//   comments: string[];
// }

// export default function Community() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [newPost, setNewPost] = useState<string>("");
//   const [commentInputs, setCommentInputs] = useState<Record<number, string>>({});

//   const UserPosts = [
//     {
//       profileImage: "/1.jpg",
//       userName: "John Doe",
//       timestamp: "2 hrs ago",
//       postText: "Had an amazing day at the beach! 🏖️",
//       postImage: "/1.jpg",
//     },
//     {
//       profileImage: "/2.jpg",
//       userName: "Jane Smith",
//       timestamp: "1 day ago",
//       postText: "Here's a quick photo of my breakfast! 🍳🥑",
//       postImage: "/2.jpg",
//     },
//     {
//       profileImage: "/3.jpg",
//       userName: "Mike Johnson",
//       timestamp: "3 days ago",
//       postText: "Loving the new book I'm reading. 📚",
//     },
//   ];

//   useEffect(() => {
//     const savedPosts = localStorage.getItem("communityPosts");
//     if (savedPosts) {
//       setPosts(JSON.parse(savedPosts));
//     } else {
//       const initialPosts: Post[] = [
//         {
//           id: 1,
//           text: "I love the floral notes in Jasmine Bliss!",
//           likes: 12,
//           comments: ["Amazing scent!", "Totally agree!"],
//         },
//         {
//           id: 2,
//           text: "Citrus Burst is my go-to for summer vibes.",
//           likes: 8,
//           comments: ["Fresh and energetic!"],
//         },
//       ];
//       setPosts(initialPosts);
//       localStorage.setItem("communityPosts", JSON.stringify(initialPosts));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("communityPosts", JSON.stringify(posts));
//   }, [posts]);

//   const handlePost = () => {
//     if (newPost.trim() !== "") {
//       const newPostObject: Post = {
//         id: posts.length + 1,
//         text: newPost,
//         likes: 0,
//         comments: [],
//       };
//       const updatedPosts = [newPostObject, ...posts];
//       setPosts(updatedPosts);
//       setNewPost("");
//     }
//   };

//   const handleLike = (id: number) => {
//     const updatedPosts = posts.map((post) =>
//       post.id === id ? { ...post, likes: post.likes + 1 } : post
//     );
//     setPosts(updatedPosts);
//   };

//   const handleCommentToggle = (id: number) => {
//     setCommentInputs((prev) => ({
//       ...prev,
//       [id]: prev[id] === undefined ? "" : prev[id],
//     }));
//   };

//   const handleCommentChange = (id: number, value: string) => {
//     setCommentInputs((prev) => ({
//       ...prev,
//       [id]: value,
//     }));
//   };

//   const handleCommentSubmit = (id: number) => {
//     const comment = commentInputs[id]?.trim();
//     if (comment) {
//       const updatedPosts = posts.map((post) =>
//         post.id === id
//           ? { ...post, comments: [...post.comments, comment] }
//           : post
//       );
//       setPosts(updatedPosts);
//       setCommentInputs((prev) => ({
//         ...prev,
//         [id]: "",
//       }));
//     }
//   };

//   return (
//     <div className="min-h-screen  px-6 py-10">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-center">Community</h1>
//         {/* Create a new post */}
//         <div className="mb-6">
//           <textarea
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//             placeholder="Share your thoughts about perfumes..."
//             className="w-full border rounded-lg p-4 mb-4"
//             rows={4}
//           ></textarea>
//           <button
//             onClick={handlePost}
//             className="bg-[#f68cba] py-2 px-6 text-white rounded hover:bg-[#e678a6]"
//           >
//             Post
//           </button>
//         </div>

//         <div className="min-h-screen p-6">
//                 {UserPosts.map((post, index) => (
//                   <PostCard
//                     key={index}
//                     profileImage='https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400'
//                     userName={post.userName}
//                     timestamp={post.timestamp}
//                     postText={post.postText}
//                     postImage={post.postImage}
//                   />
//                 ))}
//               </div>

//         {/* Posts Section */}
//         <div className="space-y-6">
//           {posts.map((post) => (
//             <div
//               key={post.id}
//               className="bg-white p-6 rounded-lg shadow-md flex flex-col"
//             >
//               <p className="text-gray-800 text-lg mb-4">{post.text}</p>
//               <div className="flex gap-4 flex-wrap items-center justify-between">
//                 <button
//                   onClick={() => handleLike(post.id)}
//                   className="bg-[#f68cba] py-2 px-4 text-white rounded hover:bg-[#e678a6]"
//                 >
//                   Like ({post.likes})
//                 </button>
//                 <button
//                   onClick={() => handleCommentToggle(post.id)}
//                   className="bg-[#f68cba] py-2 px-4 text-white rounded hover:bg-[#e678a6]"
//                 >
//                   Comment ({post.comments.length})
//                 </button>
//               </div>

//               {/* Comment Input */}
//               {commentInputs[post.id] !== undefined && (
//                 <div className="mt-4">
//                   <textarea
//                     value={commentInputs[post.id]}
//                     onChange={(e) =>
//                       handleCommentChange(post.id, e.target.value)
//                     }
//                     placeholder="Write a comment..."
//                     className="w-full border rounded-lg p-2 mb-2"
//                     rows={2}
//                   ></textarea>
//                   <button
//                     onClick={() => handleCommentSubmit(post.id)}
//                     className="bg-[#f68cba] py-2 px-4 text-white rounded hover:bg-[#e678a6]"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               )}
           
//               {/* Display Comments */}
//               {post.comments.length > 0 && (
//                 <div className="mt-4 space-y-2">
//                   {post.comments.map((comment, index) => (
//                     <div
//                       key={index}
//                       className="bg-gray-100 p-3 rounded-lg text-gray-700"
//                     >
//                       {comment}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
