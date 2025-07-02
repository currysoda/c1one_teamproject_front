
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Settings } from 'lucide-react';

export const ProfileHeader = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-8">
      {/* Profile Picture */}
      <div className="flex justify-center md:justify-start">
        <Avatar className="w-32 h-32 md:w-40 md:h-40">
          <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop&crop=face" alt="프로필" />
          <AvatarFallback className="text-2xl bg-instagram-gray">UN</AvatarFallback>
        </Avatar>
      </div>

      {/* Profile Info */}
      <div className="flex-1 text-center md:text-left">
        {/* Username and Actions */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <h1 className="text-2xl font-light">uniqram_user</h1>
          <div className="flex gap-2">
            <Button variant="secondary" className="bg-instagram-gray text-instagram-text hover:bg-instagram-border">
              프로필 편집
            </Button>
            <Button variant="secondary" size="icon" className="bg-instagram-gray text-instagram-text hover:bg-instagram-border">
              <Settings size={16} />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center md:justify-start gap-8 mb-4">
          <div className="text-center">
            <div className="font-semibold">42</div>
            <div className="text-instagram-muted text-sm">게시물</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">1,234</div>
            <div className="text-instagram-muted text-sm">팔로워</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">567</div>
            <div className="text-instagram-muted text-sm">팔로잉</div>
          </div>
        </div>

        {/* Bio */}
        <div className="text-sm">
          <div className="font-medium mb-1">김유니 👨‍💻</div>
          <div className="text-instagram-muted">
            Uniqram에서 일상을 공유합니다 ✨<br />
            📍 서울, 대한민국<br />
            🎯 웹 개발자 | 피트니스 | 여행<br />
            💌 문의: hello@uniqram.com
          </div>
        </div>
      </div>
    </div>
  );
};
