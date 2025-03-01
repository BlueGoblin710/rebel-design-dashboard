
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: 'web-design'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      service: 'web-design'
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 bg-rebel-secondary bg-opacity-30">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Get In Touch
            </h1>
            <p className="text-xl text-rebel-muted max-w-3xl mx-auto animate-fade-in">
              Have a project in mind? Let's discuss how we can bring your vision to life.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-rebel-secondary p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-rebel-muted text-rebel-text"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email"
                      className="bg-rebel-muted text-rebel-text"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Service</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-10 rounded-md border border-input bg-rebel-muted px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    >
                      <option value="web-design">Web Design</option>
                      <option value="web-development">Web Development</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="seo">SEO Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject"
                      className="bg-rebel-muted text-rebel-text"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message"
                      rows={5}
                      className="w-full rounded-md border border-input bg-rebel-muted px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-rebel-accent hover:bg-opacity-80">
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-rebel-muted mb-6">
                    We'd love to hear from you! Fill out the form or reach out to us directly using the information below.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-rebel-muted">hello@rebelwebdesigns.com</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-rebel-muted">(123) 456-7890</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Location</h3>
                      <p className="text-rebel-muted">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-rebel-muted">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-rebel-muted">Saturday</span>
                      <span>10:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-rebel-muted">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-rebel-accent bg-opacity-10 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Start a Project</h3>
                  <p className="mb-4">
                    Ready to bring your ideas to life? We're here to help you create a website that truly represents your brand.
                  </p>
                  <Button className="bg-rebel-accent hover:bg-opacity-80">Schedule a Call</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map or Additional Info */}
        <section className="py-16 px-4 bg-rebel-secondary bg-opacity-30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Create Something Amazing</h2>
            <p className="text-rebel-muted max-w-2xl mx-auto">
              Whether you're starting a new project or looking to redesign an existing site, we're here to help you every step of the way.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Contact;
