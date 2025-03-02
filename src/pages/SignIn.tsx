
import React from 'react';
import { SignIn as ClerkSignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-16 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Sign In</h1>
      <div className="w-full max-w-md">
        <ClerkSignIn 
          routing="path" 
          path="/signin" 
          signUpUrl="/signup"
          afterSignInUrl="/"
          appearance={{
            elements: {
              rootBox: "mx-auto w-full",
              card: "bg-rebel-secondary rounded-lg shadow-xl",
              headerTitle: "text-rebel-text text-2xl",
              headerSubtitle: "text-rebel-muted",
              formButtonPrimary: "bg-rebel-accent hover:bg-opacity-80",
              formFieldInput: "border-rebel-muted bg-rebel-background",
              footerActionLink: "text-rebel-accent hover:text-rebel-accent-hover",
            }
          }}
        />
      </div>
    </div>
  );
};

export default SignIn;
