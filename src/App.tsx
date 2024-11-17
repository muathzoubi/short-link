import React, { useState } from 'react';

// This is a mock function to generate a short code
const generateShortCode = () => {
  return Math.random().toString(36).substring(2, 8);
};

export default function ShortLinkGenerator() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [hover, setHover] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setShortUrl('');

    if (!longUrl) {
      setError('Please enter a URL');
      return;
    }

    try {
      new URL(longUrl);
    } catch {
      setError('Please enter a valid URL');
      return;
    }

    const shortCode = generateShortCode();
    setShortUrl(`https://short.link/${shortCode}`);
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '480px',
    margin: '0 auto',
    padding: '20px',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  };

  const formStyle: React.CSSProperties = {
    backgroundColor: '#f6f8fa',
    borderRadius: '6px',
    padding: '20px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 600,
    marginBottom: '20px',
    textAlign: 'center',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '8px 12px',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#24292e',
    verticalAlign: 'middle',
    backgroundColor: '#ffffff',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 8px center',
    border: '1px solid #e1e4e8',
    borderRadius: '6px',
    outline: 'none',
    boxShadow: 'inset 0 1px 0 rgba(225,228,232,0.2)',
  };

  const buttonStyle: React.CSSProperties = {
    color: '#ffffff',
    background: hover
      ? 'radial-gradient(circle, rgba(33,94,251,1) 0%, rgba(222,70,107,1) 100%)'
      : 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    border: '1px solid rgba(27,31,35,0.15)',
    borderRadius: '6px',
    width: '100%',
    marginTop: '10px',
  };

  const errorStyle: React.CSSProperties = {
    color: '#cb2431',
    fontSize: '14px',
    marginTop: '10px',
  };

  const resultStyle: React.CSSProperties = {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#ffffff',
    border: '1px solid #e1e4e8',
    borderRadius: '6px',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h1 style={headingStyle}>Short Link Generator</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={longUrl}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLongUrl(e.target.value)
            }
            placeholder="Enter your long URL"
            aria-label="Long URL"
            style={inputStyle}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Generate Short Link
          </button>
        </form>

        {error && <p style={errorStyle}>{error}</p>}

        {shortUrl && (
          <div style={resultStyle}>
            <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>
              Your short URL:
            </p>
            <div style={{ display: 'flex' }}>
              <p style={{ wordBreak: 'break-all' }}>{shortUrl}</p>

              <svg
                style={{ marginLeft: 'auto', cursor: 'pointer' }}
                xmlns="http://www.w3.org/2000/svg"
                width="23px"
                height="23px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.9983 10C20.9862 7.82497 20.8897 6.64706 20.1213 5.87868C19.2426 5 17.8284 5 15 5H12C9.17157 5 7.75736 5 6.87868 5.87868C6 6.75736 6 8.17157 6 11V16C6 18.8284 6 20.2426 6.87868 21.1213C7.75736 22 9.17157 22 12 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V15"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M3 10V16C3 17.6569 4.34315 19 6 19M18 5C18 3.34315 16.6569 2 15 2H11C7.22876 2 5.34315 2 4.17157 3.17157C3.51839 3.82475 3.22937 4.69989 3.10149 6"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
