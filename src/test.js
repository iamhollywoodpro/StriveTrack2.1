import React from 'react';
import { createRoot } from 'react-dom/client';

function TestApp() {
  console.log('✅ Simple React app working!');
  return (
    <div style={{padding: '2rem', fontFamily: 'system-ui'}}>
      <h1 style={{color: '#6366f1'}}>StriveTrack Test Page</h1>
      <p>If you see this, React is working properly!</p>
      <div style={{backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem'}}>
        <strong>Status:</strong> React loaded successfully ✅
      </div>
    </div>
  );
}

// Initialize React app
const container = document.getElementById('test-root');
const root = createRoot(container);
root.render(<TestApp />);