import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Navbar from "@/components/layout/Navbar";
import BackButton from "@/components/layout/BackButton";
import BackgroundImage from "@/components/ui/BackgroundImage";
import FloatingAnimation from "@/components/ui/FloatingAnimation";
import Logo from "@/components/ui/Logo";
import LoginForm from "@/components/ui/LoginForm";

// Using standard img tag instead of Next.js Image

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Handle successful login (will be handled by auth context/router)
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Subtle floating animation for decorative elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Back button - Visible on all screen sizes */}
      <div className="fixed top-6 left-4 md:left-6 z-20">
        <Link 
          to="/" 
          className={cn(
            "inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2.5 shadow-sm",
            "border-2 border-gray-200 hover:border-brand-200 hover:bg-white",
            "text-sm font-medium text-gray-700 hover:text-brand-700",
            "transition-all duration-300"
          )}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Back to Home</span>
          <span className="sm:hidden">Home</span>
        </Link>
      </div>

      {/* Left side - Logo and Welcome */}
      <div className="w-full md:w-1/2 relative overflow-hidden hidden md:flex items-center justify-center p-12">
        
        {/* Background image container */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom right, rgba(46, 139, 87, 0.1), rgba(46, 139, 87, 0.1)), url(/mike-von-2UTk-Nip5aM-unsplash.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
        </div>

        {/* Content container */}
        <div className="relative z-10 w-full max-w-md text-center px-4">
          <div className="mb-12">
            <img 
              src="/logo-white.svg" 
              alt="Re:YVE Logo" 
              className="h-20 mx-auto mb-4"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))' }}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>
              Welcome Back to Re:YVE
            </h1>
            <p className="text-gray-200">
              Your hub for sustainable fashion innovation and collaboration.
            </p>
          </motion.div>

          {/* Decorative elements with subtle animation */}
          <motion.div 
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand1-100/20 opacity-30"
            animate={floatingAnimation}
          />
          <motion.div 
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand3-100/20 opacity-30"
            animate={{
              ...floatingAnimation,
              y: [0, 15, 0],
              transition: { ...floatingAnimation.transition, delay: 2 }
            }}
          />
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8 bg-white pt-24 md:pt-6">
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="md:hidden mb-8 text-center relative overflow-hidden rounded-2xl p-8"
            style={{
              background: 'linear-gradient(to bottom right, rgba(46, 139, 87, 0), rgba(46, 139, 87, 0)), url(/mike-von-2UTk-Nip5aM-unsplash.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="relative z-10">
              <img 
                src="/logo-white.svg" 
                alt="Re:YVE Logo" 
                className="h-16 mx-auto mb-4"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))' }}
              />
              <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Brockmann, Inter, sans-serif', textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                Welcome Back
              </h2>
              <p className="text-white/90 text-sm">to Re:YVE Partner Portal</p>
            </div>
            <div className="absolute inset-0 bg-black/30 z-0"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>
              Partner Login
            </h2>
            <p className="text-gray-600 text-sm font-medium">
              Sign in to your Re:YVE management dashboard
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className={`relative rounded-full border border-gray-200 transition-all duration-200 ${isFocused.email ? 'ring-2 ring-brand-500 ring-opacity-50' : ''}`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className={`h-5 w-5 ${isFocused.email ? 'text-brand-500' : 'text-gray-400'}`} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused({...isFocused, email: true})}
                  onBlur={() => setIsFocused({...isFocused, email: false})}
                  className="block w-full pl-10 pr-4 py-3 bg-white rounded-full focus:outline-none focus:ring-0 border-none text-gray-900 text-sm placeholder-gray-400"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <a href="/forgot-password" className="text-sm font-medium text-brand1-600 hover:text-brand1-500">
                  Forgot password?
                </a>
              </div>
              <div className={`relative rounded-full border border-gray-200 transition-all duration-200 ${isFocused.password ? 'ring-2 ring-brand-500 ring-opacity-50' : ''}`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className={`h-5 w-5 ${isFocused.password ? 'text-brand-500' : 'text-gray-400'}`} />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsFocused({...isFocused, password: true})}
                  onBlur={() => setIsFocused({...isFocused, password: false})}
                  className="block w-full pl-10 pr-10 py-3 bg-white rounded-full focus:outline-none focus:ring-0 border-none text-gray-900 text-sm placeholder-gray-400"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-4 px-10 border border-transparent rounded-full text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all duration-200 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Need help?{' '}
              <a href="mailto:support@reyve.eco" className="font-medium text-brand1-600 hover:text-brand1-500">
                Contact support
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
