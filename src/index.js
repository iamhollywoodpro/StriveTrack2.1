import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log('🎯 StriveTrack 2.1 - Starting application...');

try {
  // Initialize React app
  const container = document.getElementById('root');
  console.log('📱 Root container found:', container);
  
  if (!container) {
    throw new Error('Root container not found');
  }
  
  const root = createRoot(container);
  console.log('⚛️ React root created successfully');
  
  root.render(<App />);
  console.log('🎨 App rendered successfully');
} catch (error) {
  console.error('❌ Error starting StriveTrack:', error);
  
  // Fallback error display
  const container = document.getElementById('root') || document.body;
  container.innerHTML = `
    <div style="padding: 2rem; text-align: center; font-family: system-ui;">
      <h1 style="color: #dc2626;">StriveTrack Loading Error</h1>
      <p>Please check the console for details and try refreshing the page.</p>
      <button onclick="window.location.reload()" style="background: #6366f1; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.375rem; cursor: pointer;">Reload</button>
    </div>
  `;
}