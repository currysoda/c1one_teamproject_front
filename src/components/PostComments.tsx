
import React, { useState } from 'react';
import { Heart, MoreHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Comment {
  id: number;
  username: string;
  userAvatar: string;
  comment: string;
  timeAgo: string;
  likes: number;
}

interface Post {
  id: number;
  username: string;
  userAvatar: string;
  location: string;
  timeAgo: string;
  likes: number;
  caption: string;
  comments: Comment[];
}

interface PostCommentsProps {
  post: Post;
}

export const PostComments: React.FC<PostCommentsProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [commentLikes, setCommentLikes] = useState<{[key: number]: boolean}>({});

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleCommentLike = (commentId: number) => {
    setCommentLikes(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      // In a real app, this would submit to an API
      console.log('새 댓글:', newComment);
      setNewComment('');
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4 border-b border-instagram-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 story-ring rounded-full p-0.5">
            <div className="w-full h-full bg-instagram-dark rounded-full p-0.5">
              <img
                src={post.userAvatar}
                alt={post.username}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-sm text-instagram-text">{post.username}</span>
              <span className="text-instagram-muted">•</span>
              <span className="text-sm text-instagram-muted">{post.timeAgo}</span>
            </div>
            <span className="text-xs text-instagram-muted">{post.location}</span>
          </div>
        </div>
        <button className="text-instagram-muted hover:text-instagram-text">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Post Caption */}
      <div className="p-4 border-b border-instagram-border">
        <div className="flex items-start space-x-3">
          <img
            src={post.userAvatar}
            alt={post.username}
            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1">
            <div className="text-sm">
              <span className="font-semibold text-instagram-text mr-2">{post.username}</span>
              <span className="text-instagram-text whitespace-pre-wrap">{post.caption}</span>
            </div>
            <div className="mt-2 text-xs text-instagram-muted">{post.timeAgo}</div>
          </div>
        </div>
      </div>

      {/* Likes */}
      <div className="px-4 py-3 border-b border-instagram-border">
        <button 
          onClick={handleLike}
          className={`flex items-center space-x-1 transition-colors ${
            liked ? 'text-instagram-red' : 'text-instagram-text hover:text-instagram-muted'
          }`}
        >
          <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
        </button>
        <div className="mt-2 text-sm font-semibold text-instagram-text">
          좋아요 {liked ? post.likes + 1 : post.likes}개
        </div>
      </div>

      {/* Comments List */}
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-4 p-4">
          {post.comments.map((comment) => (
            <div key={comment.id} className="flex items-start space-x-3">
              <img
                src={comment.userAvatar}
                alt={comment.username}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <div className="text-sm">
                  <span className="font-semibold text-instagram-text mr-2">{comment.username}</span>
                  <span className="text-instagram-text">{comment.comment}</span>
                </div>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-xs text-instagram-muted">{comment.timeAgo}</span>
                  <span className="text-xs text-instagram-muted">좋아요 {comment.likes}개</span>
                  <button className="text-xs text-instagram-muted hover:text-instagram-text">답글 달기</button>
                </div>
              </div>
              <button 
                onClick={() => handleCommentLike(comment.id)}
                className={`flex-shrink-0 transition-colors ${
                  commentLikes[comment.id] ? 'text-instagram-red' : 'text-instagram-muted hover:text-instagram-text'
                }`}
              >
                <Heart size={12} fill={commentLikes[comment.id] ? 'currentColor' : 'none'} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Comment Input */}
      <div className="border-t border-instagram-border p-4">
        <form onSubmit={handleSubmitComment} className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=24&h=24&fit=crop&crop=face"
            alt="Your avatar"
            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
          />
          <Input
            type="text"
            placeholder="댓글 달기..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 bg-transparent border-none text-sm text-instagram-text placeholder-instagram-muted focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            type="submit"
            disabled={!newComment.trim()}
            className="text-instagram-blue bg-transparent hover:bg-transparent text-sm font-semibold p-0 h-auto disabled:opacity-50"
          >
            게시
          </Button>
        </form>
      </div>
    </div>
  );
};
