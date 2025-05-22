import { useState } from 'react';
import Header from './components/Header';
import CodeEditor from './components/CodeEditor';
import OutputPanel from './components/OutputPanel';
import ControlPanel from './components/ControlPanel';
import { Language, EditorTheme, Output } from './types';
import { getDefaultCode } from './utils/codeTemplates';
import useLocalStorage from './hooks/useLocalStorage';
import { executeCode } from './services/codeService';
import { useMediaQuery } from 'react-responsive';
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from 'react-resizable-panels';



function App() {
  const [language, setLanguage] = useLocalStorage<Language>('language', 'javascript');
  const [code, setCode] = useLocalStorage<string>('code', getDefaultCode('javascript'));
  const [theme, setTheme] = useLocalStorage<EditorTheme>('theme', 'vs-dark');
  const [output, setOutput] = useState<Output>({ result: '', error: '', isLoading: false });
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setCode(getDefaultCode(newLanguage));
  };

  const handleThemeChange = () => {
    setTheme(theme === 'vs-dark' ? 'light' : 'vs-dark');
  };

  const handleCodeChange = (value: string) => {
    setCode(value);
  };

  const handleRunCode = async () => {
    setOutput({ result: '', error: '', isLoading: true });

    try {
      const result = await executeCode(code, language);
      setOutput({ result: result.output, error: result.error || '', isLoading: false });
    } catch (error) {
      setOutput({
        result: '',
        error: error instanceof Error ? error.message : 'An unknown error occurred',
        isLoading: false,
      });
    }
  };

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };
const isMediumUp = useMediaQuery({ minWidth: 768 });
  return (
    <div className={`md:flex md:flex-col h-screen ${theme === 'vs-dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header theme={theme} onThemeChange={handleThemeChange} />

      <div className="h-full w-full overflow-hidden">
        <PanelGroup direction={isMediumUp ? 'horizontal' : 'vertical'} className="h-full w-full">
  <Panel defaultSize={50}>
    <div className={`h-full flex ${isMediumUp ? 'flex-col' : 'flex-col-reverse'}`}>
      <ControlPanel
        language={language}
        onLanguageChange={handleLanguageChange}
        onRunCode={handleRunCode}
        onFullScreen={handleFullScreen}
        theme={theme}
        isLoading={output.isLoading}
      />
      <div className="flex-1">
        <CodeEditor
          code={code}
          language={language}
          onChange={handleCodeChange}
          theme={theme}
          isFullScreen={isFullScreen}
        />
      </div>
    </div>
  </Panel>

  <PanelResizeHandle
    className={`bg-gray-400 ${
      isMediumUp ? 'w-1 cursor-col-resize' : 'h-1 cursor-row-resize'
    }`}
  />

  <Panel defaultSize={50}>
    <OutputPanel output={output} theme={theme} />
  </Panel>
</PanelGroup>
      </div>
    </div>
  );
}

export default App;
