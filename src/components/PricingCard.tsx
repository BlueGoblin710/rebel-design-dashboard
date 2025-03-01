
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
}) => {
  return (
    <Card className={`card-hover bg-rebel-secondary border-rebel-muted h-full flex flex-col ${
      isPopular ? 'border-rebel-accent' : ''
    }`}>
      <CardHeader className={`pb-8 ${isPopular ? 'bg-rebel-accent bg-opacity-10' : ''}`}>
        {isPopular && (
          <div className="absolute top-0 right-0 -mt-2 -mr-2">
            <span className="bg-rebel-accent px-3 py-1 text-xs font-semibold rounded-full">
              Popular
            </span>
          </div>
        )}
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-rebel-muted">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center justify-center mb-6">
          <DollarSign className="h-5 w-5 text-rebel-accent" />
          <span className="text-4xl font-bold">{price}</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-rebel-accent mr-2">✓</span>
              <span className="text-sm text-rebel-muted">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-rebel-accent hover:bg-opacity-80">
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
