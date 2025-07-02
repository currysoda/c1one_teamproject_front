
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Facebook } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 구현 (현재는 프로필 페이지로 이동)
    navigate('/');
  };

  const handleFacebookLogin = () => {
    // Facebook 로그인 로직
    console.log('Facebook 로그인');
  };

  return (
    <div className="w-full max-w-sm space-y-6">
      {/* Logo */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-instagram-text tracking-tight">
          <span className="bg-gradient-to-r from-instagram-blue to-purple-400 bg-clip-text text-transparent">
            Uniqram
          </span>
        </h1>
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-instagram-muted text-xs">
            전화번호, 사용자 이름 또는 이메일
          </Label>
          <Input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-instagram-gray border-instagram-border text-instagram-text placeholder:text-instagram-muted focus:border-instagram-blue"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-instagram-muted text-xs">
            비밀번호
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-instagram-gray border-instagram-border text-instagram-text placeholder:text-instagram-muted focus:border-instagram-blue"
            placeholder="비밀번호"
            required
          />
        </div>

        <Button 
          type="submit"
          className="w-full bg-instagram-blue hover:bg-instagram-blue/90 text-white font-semibold py-2"
        >
          로그인
        </Button>
      </form>

      {/* Divider */}
      <div className="relative">
        <Separator className="bg-instagram-border" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-instagram-dark px-4 text-instagram-muted text-sm font-semibold">
            또는
          </span>
        </div>
      </div>

      {/* Facebook Login */}
      <Button
        onClick={handleFacebookLogin}
        variant="outline"
        className="w-full border-instagram-border text-instagram-blue hover:bg-instagram-gray/50 font-semibold"
      >
        <Facebook size={16} className="mr-2" />
        Facebook으로 로그인
      </Button>

      {/* Forgot Password */}
      <div className="text-center">
        <button className="text-instagram-blue text-sm hover:underline">
          비밀번호를 잊으셨나요?
        </button>
      </div>

      {/* Sign Up Link */}
      <div className="text-center border-t border-instagram-border pt-6 mt-8">
        <p className="text-instagram-muted text-sm">
          계정이 없으신가요?{' '}
          <button className="text-instagram-blue font-semibold hover:underline">
            가입하기
          </button>
        </p>
      </div>
    </div>
  );
};
