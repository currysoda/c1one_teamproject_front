
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ProfileGrid } from './ProfileGrid';
import { Grid3X3, Play, User } from 'lucide-react';

export const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className="border-t border-instagram-border">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full justify-center bg-transparent h-auto p-0">
          <TabsTrigger 
            value="posts" 
            className="flex items-center gap-2 px-6 py-4 text-instagram-muted data-[state=active]:text-instagram-text data-[state=active]:border-t-2 data-[state=active]:border-instagram-text bg-transparent rounded-none"
          >
            <Grid3X3 size={12} />
            <span className="text-xs font-semibold tracking-wider">게시물</span>
          </TabsTrigger>
          <TabsTrigger 
            value="reels" 
            className="flex items-center gap-2 px-6 py-4 text-instagram-muted data-[state=active]:text-instagram-text data-[state=active]:border-t-2 data-[state=active]:border-instagram-text bg-transparent rounded-none"
          >
            <Play size={12} />
            <span className="text-xs font-semibold tracking-wider">릴스</span>
          </TabsTrigger>
          <TabsTrigger 
            value="tagged" 
            className="flex items-center gap-2 px-6 py-4 text-instagram-muted data-[state=active]:text-instagram-text data-[state=active]:border-t-2 data-[state=active]:border-instagram-text bg-transparent rounded-none"
          >
            <User size={12} />
            <span className="text-xs font-semibold tracking-wider">태그됨</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-0">
          <ProfileGrid type="posts" />
        </TabsContent>
        
        <TabsContent value="reels" className="mt-0">
          <ProfileGrid type="reels" />
        </TabsContent>
        
        <TabsContent value="tagged" className="mt-0">
          <ProfileGrid type="tagged" />
        </TabsContent>
      </Tabs>
    </div>
  );
};
