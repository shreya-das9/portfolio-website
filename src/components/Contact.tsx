import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    console.log('=== FORM FIELD CHANGE ===');
    console.log('Field name:', e.target.name);
    console.log('Field value:', e.target.value);
    console.log('Previous form data:', formData);
    
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value
    };
    
    setFormData(newFormData);
    console.log('Updated form data:', newFormData);
    console.log('=== END FIELD CHANGE ===\n');
  };

  const sendViaEmailJS = async (data) => {
    console.log('\n=== EMAILJS SEND ATTEMPT START ===');
    console.log('Input data received:', data);
    
    // Your EmailJS configuration
    const serviceId = 'service_wlmt70b';
    const templateId = 'template_q6jr2mv';
    const userId = 'jc6_JydFnuDpPq4F9';
    const toEmail = 'dshreya943@gmail.com';
    
    console.log('EmailJS Configuration:');
    console.log('- Service ID:', serviceId);
    console.log('- Template ID:', templateId);
    console.log('- User ID:', userId);
    console.log('- To Email:', toEmail);
    
    const emailjsPayload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: {
        // Match your template variables exactly
        name: data.name,           // This will fill {{name}} in template
        email: data.email,         // This will fill {{email}} in template  
        subject: data.subject,     // This will fill {{subject}} in template
        message: data.message,     // This will fill {{message}} in template
        
        // Additional fields for better email handling
        from_name: data.name,      // Backup field
        from_email: data.email,    // Backup field
        to_email: toEmail,
        reply_to: data.email,
        to_name: 'Shreya Das'
      }
    };

    console.log('EmailJS Full Payload:');
    console.log(JSON.stringify(emailjsPayload, null, 2));

    const apiUrl = 'https://api.emailjs.com/api/v1.0/email/send';
    console.log('API URL:', apiUrl);

    try {
      console.log('Making fetch request to EmailJS...');
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailjsPayload)
      });

      console.log('Response received!');
      console.log('Response status:', response.status);
      console.log('Response status text:', response.statusText);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        console.log('Response not OK, getting error details...');
        let errorText;
        try {
          errorText = await response.text();
          console.log('Error response body:', errorText);
        } catch (e) {
          console.log('Could not read error response body:', e);
          errorText = 'Unable to read error response';
        }
        
        const errorMessage = `EmailJS failed with status ${response.status}: ${errorText}`;
        console.log('FINAL ERROR MESSAGE:', errorMessage);
        throw new Error(errorMessage);
      }

      console.log('Response OK, getting success details...');
      let successText;
      try {
        successText = await response.text();
        console.log('Success response body:', successText);
      } catch (e) {
        console.log('Could not read success response body:', e);
        successText = 'Success but could not read response';
      }

      console.log('=== EMAILJS SUCCESS ===');
      console.log('Email sent successfully via EmailJS!');
      console.log('Response:', successText);
      console.log('=== EMAILJS SEND ATTEMPT END ===\n');
      
      return { success: true, service: 'EmailJS', response: successText };

    } catch (error) {
      console.log('=== EMAILJS ERROR ===');
      console.log('Error type:', error.constructor.name);
      console.log('Error message:', error.message);
      console.log('Error stack:', error.stack);
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        console.log('NETWORK ERROR: This might be a CORS or network connectivity issue');
      }
      
      console.log('=== EMAILJS SEND ATTEMPT END (FAILED) ===\n');
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('\n🚀 =========================');
    console.log('🚀 FORM SUBMISSION STARTED');
    console.log('🚀 =========================');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Current form data:', formData);
    
    // Validate form
    const requiredFields = ['name', 'email', 'subject', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field] || formData[field].trim() === '');
    
    if (missingFields.length > 0) {
      console.log('❌ VALIDATION FAILED');
      console.log('Missing fields:', missingFields);
      console.log('Form submission aborted');
      setSubmitStatus('error');
      return;
    }
    
    console.log('✅ VALIDATION PASSED');
    console.log('All required fields present');
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      console.log('📧 ATTEMPTING EMAIL SEND...');
      const result = await sendViaEmailJS(formData);
      
      if (result.success) {
        console.log('🎉 EMAIL SENT SUCCESSFULLY!');
        console.log('Service used:', result.service);
        console.log('Response:', result.response);
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        console.log('✅ Form reset to empty state');
      } else {
        throw new Error('EmailJS returned success:false');
      }
      
    } catch (error) {
      console.log('💥 EMAIL SEND FAILED');
      console.log('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      
      // Additional debugging for common issues
      if (error.message.includes('404')) {
        console.log('🔍 404 Error suggests wrong service/template ID or EmailJS account issue');
      } else if (error.message.includes('401') || error.message.includes('403')) {
        console.log('🔍 Authorization error - check your User ID and EmailJS account settings');
      } else if (error.message.includes('CORS')) {
        console.log('🔍 CORS error - EmailJS should handle this, might be network issue');
      } else if (error.name === 'TypeError') {
        console.log('🔍 Network error - check internet connection or EmailJS service status');
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      console.log('🏁 FORM SUBMISSION ENDED');
      console.log('🏁 =========================\n');
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email",
      value: "dshreya943@gmail.com",
      link: "mailto:dshreya943@gmail.com"
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: "Location",
      value: "Kolkata, West Bengal",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="text-gray-700" size={24} />,
      title: "GitHub",
      value: "github.com/shreya-das9",
      link: "https://github.com/shreya-das9"
    },
    {
      icon: <Linkedin className="text-blue-700" size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/shreya-das-2079b2269",
      link: "https://www.linkedin.com/in/shreya-das-2079b2269"
    }
  ];

  // Log current state on every render
  console.log('🔄 Component render - Current state:', {
    formData,
    isSubmitting,
    submitStatus
  });

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interested in collaborating on MERN stack projects or AI-powered applications? 
            Let's discuss how we can create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I'm always excited to work on innovative projects, especially those involving 
                AI integration, full-stack development, or modern web technologies. Whether you have 
                a project idea or want to discuss opportunities, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-900">Contact Information</h4>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="flex-shrink-0">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-900">Connect With Me</h4>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="flex-shrink-0">{social.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{social.title}</h4>
                    <p className="text-gray-600">{social.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Available For
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Full-stack web development projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>AI-powered application development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>MERN stack consulting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>Freelance opportunities</span>
                </li>
              </ul>
            </div>

            {/* Debug Instructions */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                🔧 Debug Instructions
              </h4>
              <p className="text-blue-800 text-sm mb-2">
                <strong>Open Browser Console (F12 → Console tab)</strong> to see detailed logs:
              </p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Form field changes</li>
                <li>• EmailJS configuration details</li>
                <li>• API request/response data</li>
                <li>• Error details and suggestions</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                <CheckCircle className="text-green-600" size={24} />
                <div>
                  <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
                  <p className="text-green-600">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                <AlertCircle className="text-red-600" size={24} />
                <div>
                  <h4 className="font-semibold text-red-800">Failed to Send Message</h4>
                  <p className="text-red-600">Check the browser console (F12) for detailed error information, or email me directly at dshreya943@gmail.com</p>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project or how I can help you..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send size={20} className={isSubmitting ? 'animate-pulse' : ''} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
