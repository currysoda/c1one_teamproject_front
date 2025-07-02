
import React from 'react';

const suggestions = [
  { username: 'yes.sae98', subtitle: '회원님을 위한 추천', image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=40&h=40&fit=crop&crop=face' },
  { username: 'u.jean_cycle', subtitle: 'Training_99_님 외 42명이 팔로우합니다', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=40&h=40&fit=crop&crop=face' },
  { username: 'ahnhelina', subtitle: 'yurridia 님 외 43명이 팔로우합니다', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=40&h=40&fit=crop&crop=face' },
  { username: 'jangyunseon753', subtitle: 'Training_99_님 외 34명이 팔로우합니다', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=40&h=40&fit=crop&crop=face' },
  { username: 'yxaphxe', subtitle: 'summeriairl 팔로우합니다', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=40&h=40&fit=crop&crop=face' },
];

export const RightPanel = () => {
  return (
    <div className="w-80 p-6 hidden lg:block">
      {/* User Profile Summary */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=56&h=56&fit=crop&crop=face"
              alt="Your profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-instagram-text">ts_jdu</div>
            <div className="text-sm text-instagram-muted">회원님을 위한 추천</div>
          </div>
        </div>
        <button className="text-instagram-blue text-sm font-semibold hover:text-blue-400">
          전환
        </button>
      </div>

      {/* Suggestions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-instagram-muted font-semibold text-sm">회원님을 위한 추천</span>
          <button className="text-instagram-text text-sm hover:text-instagram-muted">
            모두 보기
          </button>
        </div>

        <div className="space-y-3">
          {suggestions.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={user.image}
                    alt={user.username}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm text-instagram-text">{user.username}</div>
                  <div className="text-xs text-instagram-muted line-clamp-1">{user.subtitle}</div>
                </div>
              </div>
              <button className="text-instagram-blue text-sm font-semibold hover:text-blue-400">
                팔로우
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-xs text-instagram-muted space-y-2">
        <div className="space-x-2">
          <span>소개</span>
          <span>도움말</span>
          <span>API</span>
          <span>채용 정보</span>
        </div>
        <div className="space-x-2">
          <span>개인정보처리방침</span>
          <span>약관</span>
          <span>위치</span>
          <span>언어</span>
          <span>Meta Verified</span>
        </div>
        <div>© 2025 UNIQRAM FROM META</div>
      </div>
    </div>
  );
};
