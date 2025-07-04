import React from 'react'
import Header from './Header'
import Footer from './Footer'

const AboutUs = () => {
  return (
    <>
    <Header/>
    
    {/* Sky.gif background for About Us */}
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('/sky.gif')`
      }}
    >
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">About Us</h1>
          <p className="mb-4 text-xl text-white drop-shadow-lg">
            Welcome to AI Course Generator, your ultimate tool for creating personalized AI courses. Our mission is to simplify the learning process by leveraging the power of artificial intelligence to provide tailored educational experiences for users of all levels.
          </p>
          <p className="mb-4 text-xl text-white drop-shadow-lg">
            At AI Course Generator, we believe that everyone should have access to high-quality education. Our platform uses the Gemini API to generate comprehensive course content that meets the needs of students and professionals alike. Whether you are a beginner looking to learn the basics of AI or an experienced practitioner seeking advanced topics, we have something for you.
          </p>
          <p className="mb-4 text-xl text-white drop-shadow-lg">
            Our team consists of passionate educators and AI enthusiasts dedicated to enhancing the learning experience. We continually update our courses to reflect the latest advancements in technology and education, ensuring that our users receive the best possible resources.
          </p>
          <p className="mb-4 text-lg text-white drop-shadow-lg">
            Join us on this exciting journey and unlock the potential of AI in your education!
          </p>
        </div>
      </div>
    </div>
  <Footer/>
    </>
  )
}

export default AboutUs