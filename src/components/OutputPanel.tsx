import React from 'react';
import { Terminal, AlertCircle } from 'lucide-react';
import { Output, EditorTheme } from '../types';

interface OutputPanelProps {
  output: Output;
  theme: EditorTheme;
}

const OutputPanel: React.FC<OutputPanelProps> = ({ output, theme }) => {
  const isDark = theme === 'vs-dark';
  const hasError = !!output.error;
  const hasOutput = !!output.result;
  
  return (
    <div className={`h-full flex flex-col ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'
    }`}>
      <div className={`px-4 py-2 flex items-center border-b ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <Terminal className="h-4 w-4 mr-2" />
        <h2 className="text-sm font-medium">Output</h2>
      </div>
      
      <div className={`flex-1 p-4 font-mono text-sm overflow-auto ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        {!hasOutput && !hasError && !output.isLoading && (
          <div className="text-gray-500 italic">
            Run your code to see the output here
          </div>
        )}
        
        {hasOutput && (
          <pre className={`mb-4 whitespace-pre-wrap ${
            isDark ? 'text-green-400' : 'text-green-600'
          }`}>
            {output.result}
          </pre>
        )}
        
        {hasError && (
          <div className="mt-2">
            <div className={`flex items-start ${
              isDark ? 'text-red-400' : 'text-red-600'
            }`}>
              <AlertCircle className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
              <pre className="whitespace-pre-wrap">
                {output.error}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputPanel;