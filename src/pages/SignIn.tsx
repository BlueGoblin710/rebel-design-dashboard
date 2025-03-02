
import React from 'react';
import { SignIn as ClerkSignIn } from '@clerk/clerk-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const SignIn = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-rebel-muted mt-2">Sign in to your account</p>
          </div>
          
          <div className="bg-rebel-secondary p-8 rounded-lg border border-rebel-muted">
            <ClerkSignIn 
              appearance={{
                elements: {
                  formButtonPrimary: 'bg-rebel-accent hover:bg-opacity-80 text-white',
                  card: 'bg-transparent shadow-none',
                  headerTitle: 'text-white',
                  headerSubtitle: 'text-rebel-muted',
                  socialButtonsBlockButton: 'border-rebel-muted text-white hover:bg-rebel-muted',
                  dividerLine: 'bg-rebel-muted',
                  dividerText: 'text-rebel-muted',
                  formFieldLabel: 'text-white',
                  formFieldInput: 'bg-rebel-bg border-rebel-muted text-white',
                  footerActionLink: 'text-rebel-accent hover:text-rebel-accent'
                }
              }}
              signUpUrl="/sign-up"
              redirectUrl="/"
            />
          </div>
        </div>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default SignIn;
