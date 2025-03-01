
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter } from '@/components/ui/card';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <Card className="card-hover bg-rebel-secondary border-rebel-muted">
      <CardContent className="pt-6">
        <div className="mb-4 text-rebel-accent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
        </div>
        <p className="text-rebel-text mb-4">{quote}</p>
      </CardContent>
      <CardFooter className="border-t border-rebel-muted pt-4">
        <div>
          <p className="font-semibold text-rebel-text">{author}</p>
          <CardDescription className="text-rebel-muted text-sm">{role}</CardDescription>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Testimonial;
