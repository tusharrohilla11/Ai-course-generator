import Head from 'next/head';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const TermsAndCondition = () => {
  return (
    <>
      <Head>
        <title>Terms & Conditions | AI Course Generator</title>
        <meta
          name="description"
          content="Understand the terms and conditions for using AI Course Generator. We value transparency and trust."
        />
        <meta name="keywords" content="AI courses, terms, policies, legal agreement" />
        <link rel="canonical" href="https://www.yourwebsite.com/terms-and-conditions" />
      </Head>

      <Header />

      {/* Sky.gif background for Terms & Conditions */}
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('/sky.gif')`
        }}
      >
        <div className="min-h-screen">
          <section className="max-w-4xl mx-auto px-4 py-12 text-white drop-shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-lg">Terms & Conditions</h1>
        <p className="mb-6 text-center text-gray-200 drop-shadow-lg">
          Last updated: July 2025
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-2 text-white drop-shadow-lg">1. Introduction</h2>
            <p>
              Welcome to <strong>AI Course Generator</strong>. These terms govern your use of our platform.
              By accessing or using our services, you agree to these terms. If you disagree with any part, please discontinue usage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-white drop-shadow-lg">2. Eligibility & Usage</h2>
            <p>
              Our platform is intended for individuals aged 13 and older. You are responsible for ensuring that your use of our tools complies with applicable laws and policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-white drop-shadow-lg">3. Intellectual Property</h2>
            <p>
              All content, logos, branding, and generated AI content are owned by AI Course Generator unless otherwise stated. You may not reuse or redistribute any materials without written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-white drop-shadow-lg">4. Your Responsibilities</h2>
            <p>
              You agree not to misuse our platform — including spamming, distributing malware, scraping data, or attempting unauthorized access to private features.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-white drop-shadow-lg">5. Service Modifications</h2>
            <p>
              We may update, suspend, or terminate services without notice. We are not liable for any interruptions or data losses due to service changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-white drop-shadow-lg">6. Limitations of Liability</h2>
            <p>
              While we strive for accuracy and uptime, AI Course Generator is not liable for any indirect damages, lost data, or interruptions caused by use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-white drop-shadow-lg">7. Updates to This Agreement</h2>
            <p>
              We reserve the right to update these terms at any time. Updates will be posted on this page with the updated date. Continued use indicates your agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-white drop-shadow-lg">8. Contact Us</h2>
            <p>
              For questions, feedback, or legal concerns, please email us at:
              <br />
              <strong className="text-indigo-600 dark:text-indigo-400">
                tusharrohilla1121@gmail.com
              </strong>
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-200 drop-shadow-lg">
            Thank you for using AI Course Generator 🚀
          </p>
        </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsAndCondition;
