import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#f3f4f6'}}>
      <div className="text-center p-8 rounded-lg shadow-lg" style={{backgroundColor: '#ffffff'}}>
        <h2 className="text-4xl font-bold mb-4" style={{color: '#1f2937'}}>Page Not Found</h2>
        <p className="mb-8" style={{color: '#6b7280'}}>Sorry, we couldn't find the page you're looking for.</p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 rounded font-bold transition-colors duration-200"
          style={{
            backgroundColor: '#3b82f6',
            color: '#ffffff'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
