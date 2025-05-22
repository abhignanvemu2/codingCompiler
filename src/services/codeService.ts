import axios from 'axios';
import { Language, CodeExecutionResult } from '../types';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

export const executeCode = async (code: string, language: Language): Promise<CodeExecutionResult> => {
  try {
    const response = await axios.post(`${API_URL}/execute`, {
      code,
      language
    });
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Error executing code');
    }
    throw new Error('Failed to connect to the server');
  }
};