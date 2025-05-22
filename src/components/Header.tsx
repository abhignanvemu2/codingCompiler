import React from 'react';
import { Code2, Moon, Sun } from 'lucide-react';
import { EditorTheme } from '../types';

interface HeaderProps {
  theme: EditorTheme;
  onThemeChange: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onThemeChange }) => {
  const isDark = theme === 'vs-dark';
  
  return (
    <header className={`px-4 py-3 flex items-center justify-between border-b ${
      isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-800'
    }`}>
      <div className="flex items-center space-x-2">
        <Code2 className="h-6 w-6 text-indigo-500" />
        <h1 className="text-xl font-bold">CodePlayground</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <button
          onClick={onThemeChange}
          className={`p-2 rounded-full transition-colors ${
            isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;