import React, { useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { Language, EditorTheme } from '../types';

interface CodeEditorProps {
  code: string;
  language: Language;
  onChange: (value: string) => void;
  theme: EditorTheme;
  isFullScreen?: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  language,
  onChange,
  theme,
  isFullScreen = false
}) => {
  const editorRef = useRef<any>(null);
  
  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
    
    // Focus the editor
    editor.focus();
    
    // Add keyboard shortcuts
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      // Run code on Ctrl+Enter
      const runEvent = new CustomEvent('run-code');
      window.dispatchEvent(runEvent);
    });
  };
  
  useEffect(() => {
    const handleRunShortcut = () => {
      // Custom event handler for run code
      const runCodeBtn = document.querySelector('[aria-label="Run code"]');
      if (runCodeBtn) {
        (runCodeBtn as HTMLButtonElement).click();
      }
    };
    
    window.addEventListener('run-code', handleRunShortcut);
    
    return () => {
      window.removeEventListener('run-code', handleRunShortcut);
    };
  }, []);
  
  // Map languages to Monaco editor languages
  const getMonacoLanguage = (lang: Language): string => {
    const languageMap: Record<Language, string> = {
      javascript: 'javascript',
      typescript: 'typescript',
      python: 'python',
      java: 'java',
      c: 'c',
      cpp: 'cpp',
      csharp: 'csharp',
      php: 'php',
      ruby: 'ruby',
      go: 'go',
      rust: 'rust'
    };
    
    return languageMap[lang];
  };
  
  return (
    <div className={`h-full ${isFullScreen ? 'fixed inset-0 z-50' : ''}`}>
      <Editor
        height="100%"
        language={getMonacoLanguage(language)}
        value={code}
        theme={theme}
        onChange={(value) => onChange(value || '')}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          wordWrap: 'on',
          automaticLayout: true,
          tabSize: 2,
          scrollBeyondLastLine: false,
          lineNumbers: 'on',
          glyphMargin: false,
          folding: true,
          lineDecorationsWidth: 10,
          renderLineHighlight: 'all',
        }}
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default CodeEditor;