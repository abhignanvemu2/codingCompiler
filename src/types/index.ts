export type Language = 'javascript' | 'typescript' | 'python' | 'java' | 'c' | 'cpp' | 'csharp' | 'php' | 'ruby' | 'go' | 'rust';

export type EditorTheme = 'vs-dark' | 'light';

export interface Output {
  result: string;
  error: string;
  isLoading: boolean;
}

export interface CodeExecutionResult {
  output: string;
  error: string | null;
}

export interface CodeTemplate {
  [key: string]: string;
}