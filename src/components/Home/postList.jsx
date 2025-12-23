import PostCard from "./postCard";
import image from "../../assets/nopfpicon.jpg";
import postpic1 from "../../assets/postpic1.jpeg";
import postpic2 from "../../assets/postpic2.jpg";

import "../../styles/HomeSection/PostList.css";
export default function PostList() {
  // Temporary static data (later → API)
  const posts = [
    {
      id: 1,
      username: "Omar",
      avatar: image,
      date: "2 hours ago",
      image: postpic1,
      caption: "This is my first post!",
    },
    {
      id: 2,
      username: "TabFood",
      avatar: image,
      date: "Yesterday",
      image: postpic2,
      caption: "Welcome to the platform 🚀",
    },
  ];

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
