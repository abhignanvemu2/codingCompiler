import React from 'react';
import { Language, EditorTheme } from '../types';
import { Play, Maximize, Minimize, Loader2 } from 'lucide-react';

const LANGUAGES = [
  { id: 'javascript', name: 'JavaScript' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'python', name: 'Python' },
  { id: 'java', name: 'Java' },
  { id: 'c', name: 'C' },
  { id: 'cpp', name: 'C++' },
  { id: 'csharp', name: 'C#' },
  { id: 'php', name: 'PHP' },
  { id: 'ruby', name: 'Ruby' },
  { id: 'go', name: 'Go' },
  { id: 'rust', name: 'Rust' }
];

interface ControlPanelProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  onRunCode: () => void;
  onFullScreen: () => void;
  isFullScreen?: boolean;
  theme: EditorTheme;
  isLoading: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  language,
  onLanguageChange,
  onRunCode,
  onFullScreen,
  isFullScreen = false,
  theme,
  isLoading
}) => {
  const isDark = theme === 'vs-dark';
  
  return (
    <div className={`px-4 py-2 flex items-center justify-between border-b ${
      isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-800'
    }`}>
      <div className="flex items-center">
        <select
          value={language}
          onChange={(e) => onLanguageChange(e.target.value as Language)}
          className={`mr-4 px-3 py-1.5 rounded border ${
            isDark 
              ? 'bg-gray-700 border-gray-600 text-white' 
              : 'bg-white border-gray-300 text-gray-800'
          } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.id} value={lang.id}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={onRunCode}
          disabled={isLoading}
          className={`px-4 py-1.5 rounded flex items-center space-x-1 transition-colors ${
            isLoading 
              ? 'opacity-70 cursor-not-allowed' 
              : ''
          } ${
            isDark 
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
              : 'bg-indigo-500 hover:bg-indigo-600 text-white'
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Running...</span>
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              <span>Run</span>
            </>
          )}
        </button>
        
       
      </div>
    </div>
  );
};

export default ControlPanel;