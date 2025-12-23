import LikeButton from "../../assets/likebutton.png";
import CommentButton from "../../assets/commentbutton.png";
import ShareButton from "../../assets/sharebutton.png";
import "../../styles/HomeSection/postCard.css";

export default function PostCard({ post }) {
  return (
    <div className="post-card-container">

      {/* Header */}
      <div className="post-card-header">
        <img src={post.avatar} alt={post.username} className="avatar" />
        <div className="user-info">
          <h3 className="username">{post.username}</h3>
          <p className="post-date">{post.date}</p>
        </div>
      </div>

      {/* Content */}
      <div className="post-card-content">
        <img src={post.image} alt="Post content" className="post-image" />
        <p className="post-caption">{post.caption}</p>
      </div>

      {/* Actions */}
      <div className="post-card-actions">
        <div className="action">
          <button className="icon-button">
            <img src={LikeButton} alt="Like" />
          </button>
          <span>{post.likes}</span>
        </div>

        <div className="action">
          <button className="icon-button">
            <img src={CommentButton} alt="Comment" />
          </button>
          <span>{post.comments}</span>
        </div>

        <div className="action">
          <button className="icon-button">
            <img src={ShareButton} alt="Share" />
          </button>
          <span>{post.shares}</span>
        </div>
      </div>

    </div>
  );
}
