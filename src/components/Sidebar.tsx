
import React from 'react';
import { Home, Search, Plus, User, Bell, MessageSquare, MoreHorizontal } from 'lucide-react';

const menuItems = [
  { icon: Home, label: '홈', active: true },
  { icon: Search, label: '검색' },
  { icon: Plus, label: '탐색 탭' },
  { icon: Plus, label: '릴스' },
  { icon: MessageSquare, label: '메시지' },
  { icon: Bell, label: '알림' },
  { icon: Plus, label: '만들기' },
  { icon: User, label: '대시보드' },
  { icon: User, label: '프로필' },
  { icon: MessageSquare, label: 'Threads' },
  { icon: MoreHorizontal, label: '더 보기' },
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-instagram-dark border-r border-instagram-border h-screen sticky top-0 p-4">
      {/* Logo */}
      <div className="mb-8 p-4">
        <h1 className="text-2xl font-bold text-instagram-text">Uniqram</h1>
      </div>
      
      {/* Menu Items */}
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
              item.active 
                ? 'bg-instagram-gray text-instagram-text' 
                : 'text-instagram-muted hover:bg-instagram-gray hover:text-instagram-text'
            }`}
          >
            <item.icon size={24} />
            <span className="text-base font-medium">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};
