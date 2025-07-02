
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PostImageCarousel } from './PostImageCarousel';
import { PostComments } from './PostComments';

// Sample post data - in a real app this would come from an API
const samplePost = {
  id: 1,
  username: '_may.e',
  userAvatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=32&h=32&fit=crop&crop=face',
  location: '헬스장',
  timeAgo: '9시간',
  images: [
    'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1594736797933-d0d6bbd4f6bd?w=800&h=1000&fit=crop'
  ],
  likes: 135,
  caption: '최근에 헬스장 가면서 건강하게 활동하고 있어요! 💪 운동하는 재미를 알아가고 있는 중이에요. 모두들 건강한 하루 보내세요 ✨\n\n#헬스 #운동 #건강 #일상',
  comments: [
    {
      id: 1,
      username: 'nar106',
      userAvatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=24&h=24&fit=crop&crop=face',
      comment: '헬스장에서 건강하게 활동하시는 모습이 멋져요! 👍',
      timeAgo: '5시간',
      likes: 12
    },
    {
      id: 2,
      username: 'fitness_lover',
      userAvatar: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=24&h=24&fit=crop&crop=face',
      comment: '운동 루틴 공유해주세요!',
      timeAgo: '3시간',
      likes: 8
    },
    {
      id: 3,
      username: 'healthy_life',
      userAvatar: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=24&h=24&fit=crop&crop=face',
      comment: '저도 운동 시작해야겠어요 😊',
      timeAgo: '2시간',
      likes: 5
    }
  ]
};

interface PostDetailViewProps {
  postId?: string;
}

export const PostDetailView: React.FC<PostDetailViewProps> = ({ postId }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-instagram-dark">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-instagram-dark border-b border-instagram-border px-4 py-3">
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleBack}
            className="text-instagram-text hover:text-instagram-muted transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-semibold text-instagram-text">게시물</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-65px)]">
        {/* Left: Image Carousel */}
        <div className="lg:flex-[3] bg-black flex items-center justify-center">
          <PostImageCarousel images={samplePost.images} />
        </div>

        {/* Right: Post Details & Comments */}
        <div className="lg:flex-[2] bg-instagram-dark border-l border-instagram-border flex flex-col">
          <PostComments post={samplePost} />
        </div>
      </div>
    </div>
  );
};
