
import React from 'react';
import { StoryCarousel } from './StoryCarousel';
import { FeedPost } from './FeedPost';

const samplePosts = [
  {
    id: 1,
    username: '_may.e',
    location: '헬스장',
    timeAgo: '9시간',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&h=600&fit=crop',
    likes: 135,
    caption: '_may.e 최근에 헬 가시고, 수영도 어느 정도 하고 있는데 분명 자세가 많이 틀렸을...',
    comments: [
      { username: 'nar106', comment: '헬스장에서 건강하게 활동하시는 모습!' }
    ]
  }
];

export const MainFeed = () => {
  return (
    <div className="flex-1 max-w-2xl mx-auto">
      {/* Story Carousel */}
      <div className="pt-6 pb-4">
        <StoryCarousel />
      </div>
      
      {/* Feed Posts */}
      <div className="space-y-6">
        {samplePosts.map((post) => (
          <FeedPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
