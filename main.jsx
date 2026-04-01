import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('React render error:', error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', maxWidth: 640 }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 12 }}>
            Something went wrong while rendering the app
          </h1>
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              fontSize: 13,
              color: '#b91c1c',
              background: '#fef2f2',
              padding: 12,
              borderRadius: 8,
            }}
          >
            {String(this.state.error)}
          </pre>
          <p style={{ marginTop: 16, color: '#57534e', fontSize: 14 }}>
            Check the browser console (F12 → Console) for details.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Could not find #root in index.html');
}

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
