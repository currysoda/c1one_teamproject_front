
import React from 'react';
import { Heart, MessageCircle, Play } from 'lucide-react';

interface ProfileGridProps {
  type: 'posts' | 'reels' | 'tagged';
}

const samplePosts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=300&fit=crop', likes: 135, comments: 12, isReel: false },
  { id: 2, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop', likes: 89, comments: 7, isReel: true },
  { id: 3, image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=300&fit=crop', likes: 256, comments: 23, isReel: false },
  { id: 4, image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=300&h=300&fit=crop', likes: 198, comments: 15, isReel: false },
  { id: 5, image: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=300&h=300&fit=crop', likes: 342, comments: 28, isReel: true },
  { id: 6, image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300&h=300&fit=crop', likes: 167, comments: 11, isReel: false },
  { id: 7, image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=300&h=300&fit=crop', likes: 423, comments: 35, isReel: false },
  { id: 8, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=300&fit=crop', likes: 289, comments: 19, isReel: true },
  { id: 9, image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=300&fit=crop', likes: 156, comments: 8, isReel: false },
];

export const ProfileGrid: React.FC<ProfileGridProps> = ({ type }) => {
  const getFilteredPosts = () => {
    switch (type) {
      case 'reels':
        return samplePosts.filter(post => post.isReel);
      case 'tagged':
        return samplePosts.slice(0, 3); // 태그됨은 적게 표시
      default:
        return samplePosts;
    }
  };

  const filteredPosts = getFilteredPosts();

  if (filteredPosts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-instagram-muted">
        <div className="text-4xl mb-4">📷</div>
        <h3 className="text-lg font-medium mb-2">아직 {type === 'reels' ? '릴스' : type === 'tagged' ? '태그된 게시물' : '게시물'}이 없습니다</h3>
        <p className="text-sm">첫 번째 {type === 'reels' ? '릴스' : '게시물'}을 공유해보세요!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-1 pt-4">
      {filteredPosts.map((post) => (
        <div key={post.id} className="aspect-square relative group cursor-pointer">
          <img 
            src={post.image} 
            alt={`게시물 ${post.id}`}
            className="w-full h-full object-cover"
          />
          
          {/* Reel indicator */}
          {post.isReel && (
            <div className="absolute top-2 right-2">
              <Play size={16} className="text-white fill-current" />
            </div>
          )}
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-1">
                <Heart size={20} className="fill-current" />
                <span className="font-semibold">{post.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle size={20} className="fill-current" />
                <span className="font-semibold">{post.comments}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
