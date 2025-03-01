
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description: "Custom, responsive websites that capture your brand's essence",
      details: [
        "Custom design tailored to your brand",
        "Responsive layouts for all devices",
        "User experience (UX) focused design",
        "Interactive elements and animations",
        "Accessibility compliance"
      ]
    },
    {
      title: "Web Development",
      description: "Turning designs into fully functional websites with clean code",
      details: [
        "Frontend development (HTML, CSS, JavaScript)",
        "Content Management System integration",
        "E-commerce functionality",
        "Performance optimization",
        "Cross-browser compatibility"
      ]
    },
    {
      title: "Graphic Design",
      description: "Visual assets that strengthen your brand identity",
      details: [
        "Logo design and branding",
        "Business cards and stationery",
        "Social media graphics",
        "Marketing materials",
        "Custom illustrations"
      ]
    },
    {
      title: "SEO Optimization",
      description: "Improve your visibility in search engines",
      details: [
        "Keyword research and implementation",
        "On-page SEO optimization",
        "Technical SEO improvements",
        "Content strategy development",
        "Search engine submission"
      ]
    }
  ];

  const process = [
    {
      step: "Discovery",
      description: "We start by understanding your business, goals, and target audience to create a tailored strategy."
    },
    {
      step: "Planning",
      description: "Based on our findings, we create a detailed project plan with timelines and deliverables."
    },
    {
      step: "Design",
      description: "Our designers create mockups and prototypes for your review and feedback."
    },
    {
      step: "Development",
      description: "We bring the designs to life with clean, efficient code and functionality."
    },
    {
      step: "Testing",
      description: "Rigorous testing ensures everything works perfectly across all devices and browsers."
    },
    {
      step: "Launch",
      description: "Your project goes live! We provide training and support to ensure a smooth transition."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 bg-rebel-secondary bg-opacity-30">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-rebel-muted max-w-3xl mx-auto animate-fade-in">
              Comprehensive web and graphic design solutions to elevate your brand
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-rebel-secondary border-rebel-muted card-hover">
                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-rebel-muted">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-rebel-accent mr-2">✓</span>
                          <span className="text-rebel-muted">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 px-4 bg-rebel-secondary bg-opacity-30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
            
            <div className="relative">
              {/* Process Line (hidden on mobile) */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-rebel-muted -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {process.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Step Number */}
                    <div className="w-12 h-12 mx-auto bg-rebel-accent rounded-full flex items-center justify-center mb-4 z-10 relative">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    
                    {/* Step Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">{step.step}</h3>
                      <p className="text-rebel-muted">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-rebel-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">How long does a website project take?</h3>
                <p className="text-rebel-muted">
                  Project timelines vary based on complexity. A simple website might take 2-3 weeks, while more complex projects can take 1-2 months. We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>
              
              <div className="bg-rebel-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Do you offer website maintenance?</h3>
                <p className="text-rebel-muted">
                  Yes, we offer ongoing maintenance packages to keep your website secure, up-to-date, and performing optimally. Ask about our maintenance plans.
                </p>
              </div>
              
              <div className="bg-rebel-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">What information do you need to start?</h3>
                <p className="text-rebel-muted">
                  To begin, we'll need information about your business, your target audience, any existing brand guidelines, and your goals for the project. We provide a detailed questionnaire to gather this information.
                </p>
              </div>
              
              <div className="bg-rebel-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">How are payments structured?</h3>
                <p className="text-rebel-muted">
                  We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we may establish a milestone-based payment schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-rebel-accent bg-opacity-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-rebel-muted max-w-2xl mx-auto mb-8">
              Contact us today to discuss your project and how we can help bring your vision to life.
            </p>
            <Button size="lg" className="bg-rebel-accent hover:bg-opacity-80" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Services;
