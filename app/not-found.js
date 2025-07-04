'use client'

import Link from 'next/link'
 
export default function NotFound() {
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
    padding: '1rem'
  };

  const cardStyle = {
    textAlign: 'center',
    padding: '2rem',
    borderRadius: '0.5rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    maxWidth: '28rem',
    width: '100%'
  };

  const headingStyle = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1f2937'
  };

  const textStyle = {
    marginBottom: '2rem',
    color: '#6b7280',
    fontSize: '1rem'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    fontWeight: 'bold',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease-in-out'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>404 - Page Not Found</h2>
        <p style={textStyle}>Sorry, we couldn't find the page you're looking for.</p>
        <Link 
          href="/"
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
