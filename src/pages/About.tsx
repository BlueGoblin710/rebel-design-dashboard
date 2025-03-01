
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "Founder & Lead Designer",
      bio: "With over 10 years of experience in web design, Alex brings creative vision and technical expertise to every project."
    },
    {
      name: "Jordan Chen",
      role: "Senior Developer",
      bio: "Jordan specializes in frontend development and creating seamless, intuitive user experiences across all devices."
    },
    {
      name: "Taylor Morgan",
      role: "Graphic Designer",
      bio: "Taylor's background in fine arts and digital media allows for truly unique and captivating visual designs."
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
              About Rebel Web Designs
            </h1>
            <p className="text-xl text-rebel-muted max-w-3xl mx-auto animate-fade-in">
              We're a team of creative professionals who are passionate about designing exceptional digital experiences.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-rebel-muted mb-4">
                  Founded in 2018, Rebel Web Designs began with a simple mission: to create websites that stand out in a sea of templated designs.
                </p>
                <p className="text-rebel-muted mb-4">
                  We believe that your online presence should be as unique as your business. That's why we take the time to understand your brand, your audience, and your goals before we start designing.
                </p>
                <p className="text-rebel-muted mb-6">
                  Over the years, we've grown from a solo designer to a team of dedicated professionals, but our core values remain the same: creativity, quality, and exceptional client service.
                </p>
                <Button className="bg-rebel-accent hover:bg-opacity-80" asChild>
                  <Link to="/contact">Work With Us</Link>
                </Button>
              </div>
              <div className="order-1 md:order-2 bg-rebel-secondary rounded-lg p-8 h-72 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-rebel-accent mb-2">Est. 2018</p>
                  <p className="text-rebel-muted">Creating unique digital experiences</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4 bg-rebel-secondary bg-opacity-30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-rebel-secondary p-6 rounded-lg hover:shadow-lg transition-shadow card-hover">
                <div className="text-rebel-accent mb-4 text-4xl font-bold">01</div>
                <h3 className="text-xl font-bold mb-3">Creativity</h3>
                <p className="text-rebel-muted">
                  We push boundaries and think outside the box to deliver unique designs that capture your brand's essence.
                </p>
              </div>
              
              <div className="bg-rebel-secondary p-6 rounded-lg hover:shadow-lg transition-shadow card-hover">
                <div className="text-rebel-accent mb-4 text-4xl font-bold">02</div>
                <h3 className="text-xl font-bold mb-3">Quality</h3>
                <p className="text-rebel-muted">
                  We never compromise on quality. Every pixel, every line of code is crafted with precision and care.
                </p>
              </div>
              
              <div className="bg-rebel-secondary p-6 rounded-lg hover:shadow-lg transition-shadow card-hover">
                <div className="text-rebel-accent mb-4 text-4xl font-bold">03</div>
                <h3 className="text-xl font-bold mb-3">Client Focus</h3>
                <p className="text-rebel-muted">
                  Your satisfaction is our priority. We listen, collaborate, and deliver results that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-rebel-secondary p-6 rounded-lg hover:shadow-lg transition-shadow card-hover">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-rebel-accent flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{member.name}</h3>
                  <p className="text-rebel-accent mb-4 text-center">{member.role}</p>
                  <p className="text-rebel-muted text-center">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-rebel-accent bg-opacity-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Something Amazing?</h2>
            <p className="text-rebel-muted max-w-2xl mx-auto mb-8">
              Let our team of experts help bring your vision to life.
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

export default About;
