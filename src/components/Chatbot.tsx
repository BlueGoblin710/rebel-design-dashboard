
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { MessageSquare, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: 'Hi there! How can I help you with Rebel Web Designs?', isUser: false },
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');

    // Simulate response after a short delay
    setTimeout(() => {
      let response = "I'm sorry, I don't have an answer for that yet. Please contact us for more information!";
      
      // Simple response logic based on keywords
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('pricing') || lowerInput.includes('cost') || lowerInput.includes('price')) {
        response = "Our web design pricing starts at $100 for a single page. You can see all our pricing options on the homepage!";
      } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) {
        response = "You can reach us through our contact page or email us at hello@rebelwebdesigns.com";
      } else if (lowerInput.includes('service') || lowerInput.includes('offer')) {
        response = "We offer web design, development, and graphic design services. Check our services page for more details!";
      }

      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            className="h-12 w-12 rounded-full bg-rebel-accent hover:bg-opacity-80 shadow-lg"
            aria-label={isOpen ? 'Close chat' : 'Open chat'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="mt-2 w-[300px] md:w-[350px] bg-rebel-secondary rounded-lg shadow-xl border border-rebel-muted overflow-hidden animate-fade-in">
            <div className="bg-black p-3 border-b border-rebel-muted">
              <h3 className="font-semibold">Rebel Web Support</h3>
              <p className="text-xs text-rebel-muted">We typically reply within minutes</p>
            </div>
            
            <div className="h-[300px] overflow-y-auto p-4 flex flex-col space-y-3">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser 
                      ? 'bg-rebel-accent text-white ml-auto rounded-br-none' 
                      : 'bg-rebel-muted text-rebel-text mr-auto rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSubmit} className="p-3 border-t border-rebel-muted">
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="rounded-r-none bg-rebel-muted text-rebel-text"
                />
                <Button 
                  type="submit"
                  className="rounded-l-none bg-rebel-accent hover:bg-opacity-80"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Chatbot;
