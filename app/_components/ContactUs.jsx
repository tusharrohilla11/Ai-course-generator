"use client"
import Head from 'next/head'
import React, { useState, useRef } from 'react'
import Header from './Header'
import Footer from './Footer'
import emailjs from "@emailjs/browser"

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useRef();

  const handleName = (e) => {
    setName(e.target.value);
  };
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    emailjs
      .sendForm("service_c6vd6xd", "template_rzpxhdh", form.current, {
        publicKey: "tDjBmJETE1h2ToL87",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Successfully! 🎉 I will get back to you soon.");
          setIsLoading(false);
          setTimeout(() => setSuccess(""), 5000); // Clear success message after 5 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess("Failed to send message. Please try again or email me directly.");
          setIsLoading(false);
          setTimeout(() => setSuccess(""), 5000);
        }
      );
  };
  return (
    <>
    <Header/>
     <Head>
        <title>Contact Us | AI Course Generator</title>
        <meta name="description" content="Get in touch with AI Course Generator for any inquiries, feedback, or support." />
        <meta name="keywords" content="contact, customer support, AI courses" />
        <link rel="canonical" href="https://https://mrpankajpandey-ai-course.vercel.app/contact-us" />
      </Head>
      
      {/* Sky.gif background for Contact Us */}
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('/sky.gif')`
        }}
      >
        <div className="min-h-screen">
          <div name="Contact" className='max-w-screen-2xl ontainer mx-auto px-4 md:px-20 py-10 '>
            <h2 className='text-3xl font-semibold mb-4 text-white drop-shadow-lg'>Contact Me</h2>
            
            {/* Email Contact Information */}
            <div className='mb-8 text-center'>
              <h3 className='text-xl font-semibold mb-2 text-white drop-shadow-lg'>Get In Touch</h3>
              <p className='text-lg text-white drop-shadow-lg mb-2'>
                Feel free to reach out to me directly at:
              </p>
              <a 
                href="mailto:tusharrohilla1121@gmail.com" 
                className='text-2xl font-bold text-blue-300 hover:text-blue-100 drop-shadow-lg transition-colors duration-300'
              >
                tusharrohilla1121@gmail.com
              </a>
            </div>

            <div className=''>
              {/* Success/Error Message */}
              {success && (
                <div className='mb-4 text-center'>
                  <p className={`text-lg font-semibold drop-shadow-lg ${success.includes('Successfully') ? 'text-green-300' : 'text-red-300'}`}>
                    {success}
                  </p>
                </div>
              )}
              
              <form ref={form} onSubmit={sendEmail} className='flex w-full flex-col items-center gap-5 border bottom-1 p-3 shadow-sm bg-white/90 rounded-lg'>
                <h2 className='text-2xl font-normal'>Send me a Message</h2>
                <h4 className="text-xl font-mono">I'm Very Responsive To Messages</h4>
                
                <div className='w-full md:w-1/2 flex flex-col gap-2'>
                  <input 
                    type="text"
                    name="from_name"
                    value={name} 
                    onChange={handleName} 
                    className='w-full h-[50px] rounded-full leading-tight border border-black py-2 px-4 dark:bg-[#1c1b23]' 
                    placeholder='Your Name'
                    required
                  />
                </div>
                
                <div className='w-full md:w-1/2 flex flex-col gap-2'>
                  <input 
                    type="email"
                    name="from_email"
                    value={email} 
                    onChange={handleEmail} 
                    className='w-full h-[50px] rounded-full border border-black py-2 px-4 dark:bg-[#1c1b23]' 
                    placeholder='Your Email'
                    required
                  />
                </div>
                
                <div className='w-full md:w-1/2 flex flex-col gap-2'>
                  <textarea 
                    name="message"
                    value={message} 
                    onChange={handleMessage} 
                    className='w-full h-[140px] rounded-md border border-black py-2 px-4 dark:bg-[#1c1b23]' 
                    placeholder='Enter Your Message'
                    required
                  />
                </div>
                
                <div className='w-1/2 flex items-center justify-center'>
                  <button 
                    type='submit' 
                    disabled={isLoading}
                    className={`px-10 text-white font-medium py-3 outline-none border rounded-full transition-all duration-300 ${
                      isLoading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-400 hover:bg-blue-600'
                    }`}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ContactUs