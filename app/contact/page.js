import ContactUs from "../_components/ContactUs";
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "Contact Us | AI Course Generator",
  description: "Get in touch with AI Course Generator for any inquiries, feedback, or support.",
  keywords: "contact, customer support, AI courses"
};

const Contact = () => {
  return (
    <>
      <ContactUs />
      <Toaster
        position="top-center"
        reverseOrder={false} 
      />
    </>
  );
};

export default Contact;
