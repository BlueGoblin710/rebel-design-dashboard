
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import Testimonial from '@/components/Testimonial';
import Chatbot from '@/components/Chatbot';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const webDesignPackages = [
    {
      title: "Single Page",
      price: 100,
      description: "Perfect for landing pages",
      features: [
        "Custom single page design",
        "Mobile responsive",
        "Contact form",
        "SEO optimization",
        "1 revision round"
      ]
    },
    {
      title: "Starter",
      price: 200,
      description: "Great for small businesses",
      features: [
        "2 custom pages",
        "Mobile responsive",
        "Contact form",
        "SEO optimization",
        "2 revision rounds",
        "Basic analytics"
      ],
      isPopular: true
    },
    {
      title: "Business",
      price: 300,
      description: "Complete business solution",
      features: [
        "3 custom pages",
        "Mobile responsive",
        "Contact form",
        "Advanced SEO optimization",
        "3 revision rounds",
        "Google Analytics integration",
        "Social media integration"
      ]
    },
    {
      title: "Enterprise",
      price: 500,
      description: "Full-featured website",
      features: [
        "5 custom pages",
        "Mobile responsive",
        "Advanced contact & booking forms",
        "Premium SEO optimization",
        "Unlimited revisions",
        "Advanced analytics dashboard",
        "Social media integration",
        "Content management system"
      ]
    }
  ];

  const graphicDesignPackage = {
    title: "Graphic Design",
    price: 150,
    description: "Custom design solutions",
    features: [
      "Logo design",
      "Business cards",
      "Social media assets",
      "Brochures and flyers",
      "Custom illustrations",
      "3 revision rounds"
    ]
  };

  const testimonials = [
    {
      quote: "Rebel Web Designs transformed our online presence with a stunning website that perfectly captures our brand identity!",
      author: "Sarah Johnson",
      role: "CEO, Innovative Tech"
    },
    {
      quote: "Working with the Rebel team was fantastic. They delivered our project on time and the results exceeded our expectations.",
      author: "Michael Chen",
      role: "Marketing Director, GrowFast"
    },
    {
      quote: "The attention to detail and creative solutions that Rebel Web Designs provided made all the difference for our new brand launch.",
      author: "Emma Rodriguez",
      role: "Founder, Artisan Collective"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              <span className="text-rebel-text">We Create </span>
              <span className="text-rebel-accent">Rebel</span>
              <span className="text-rebel-text">lious Designs</span>
            </h1>
            <p className="text-xl md:text-2xl text-rebel-muted mb-8 max-w-3xl mx-auto animate-fade-in">
              Web & graphic design that breaks the mold and captures attention
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-rebel-accent hover:bg-opacity-80">
                Get Started
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Web Design Pricing */}
        <section className="py-16 px-4 bg-rebel-secondary bg-opacity-30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Web Design Packages</h2>
              <p className="text-rebel-muted max-w-2xl mx-auto">
                Choose the perfect web design package that suits your needs and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {webDesignPackages.map((pkg, index) => (
                <PricingCard 
                  key={index}
                  title={pkg.title}
                  price={pkg.price}
                  description={pkg.description}
                  features={pkg.features}
                  isPopular={pkg.isPopular}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Graphic Design Pricing */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Graphic Design</h2>
              <p className="text-rebel-muted max-w-2xl mx-auto">
                Stand out with custom graphic design solutions tailored to your brand
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <PricingCard 
                title={graphicDesignPackage.title}
                price={graphicDesignPackage.price}
                description={graphicDesignPackage.description}
                features={graphicDesignPackage.features}
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-rebel-secondary bg-opacity-30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-rebel-muted max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Testimonial 
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-rebel-accent bg-opacity-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-rebel-muted max-w-2xl mx-auto mb-8">
              Let's create something amazing together. Contact us today to discuss your ideas.
            </p>
            <Button size="lg" className="bg-rebel-accent hover:bg-opacity-80" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
