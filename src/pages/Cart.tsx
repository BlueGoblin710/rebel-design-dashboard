
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const { isSignedIn } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-rebel-muted mb-6">Your cart is empty</p>
            <Button asChild variant="outline">
              <Link to="/services">Browse Services</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              {items.map((item) => (
                <Card key={item.id} className="mb-4 bg-rebel-secondary border-rebel-muted">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-rebel-muted">{item.description}</p>
                        <div className="text-rebel-accent font-semibold mt-1">
                          ${item.price.toFixed(2)}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="mb-2 text-rebel-muted hover:text-destructive"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                        
                        <div className="flex items-center">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          
                          <span className="mx-3 min-w-[30px] text-center">
                            {item.quantity}
                          </span>
                          
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button 
                variant="outline" 
                className="mt-4 text-rebel-muted"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
            
            <div>
              <Card className="bg-rebel-secondary border-rebel-muted sticky top-4">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                  
                  <div className="space-y-2 mb-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span className="text-rebel-muted">
                          {item.name} x {item.quantity}
                        </span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-rebel-muted my-4 pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-rebel-accent">${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {isSignedIn ? (
                    <Button className="w-full mt-4 bg-rebel-accent hover:bg-opacity-80">
                      Proceed to Checkout
                    </Button>
                  ) : (
                    <div className="mt-4 space-y-2">
                      <Button asChild className="w-full bg-rebel-accent hover:bg-opacity-80">
                        <Link to="/sign-in">Sign In to Checkout</Link>
                      </Button>
                      <p className="text-center text-sm text-rebel-muted">
                        New customer? <Link to="/sign-up" className="text-rebel-accent hover:underline">Create an account</Link>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Cart;
