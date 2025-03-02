
import React from 'react';
import { SignUp as ClerkSignUp } from '@clerk/clerk-react';

const SignUp = () => {
  return (
    <div className="container mx-auto py-16 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Create Account</h1>
      <div className="w-full max-w-md">
        <ClerkSignUp 
          routing="path" 
          path="/signup" 
          signInUrl="/signin"
          afterSignUpUrl="/"
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

export default SignUp;
