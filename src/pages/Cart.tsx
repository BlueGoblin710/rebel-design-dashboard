
import React from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice, updateQuantity, clearCart } = useCart();
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isSignedIn) {
      toast({
        title: "Authentication required",
        description: "Please sign in to complete your purchase",
        variant: "destructive",
      });
      navigate('/signin');
      return;
    }

    // In a real app, this would connect to a payment processor
    toast({
      title: "Order placed!",
      description: "Your order has been successfully placed.",
    });
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="flex flex-col items-center justify-center py-12">
          <ShoppingBag className="w-16 h-16 text-rebel-muted mb-4" />
          <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
          <p className="text-rebel-muted mb-6">Add some services to get started</p>
          <Button onClick={() => navigate('/')} className="bg-rebel-accent">
            Browse Services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-rebel-secondary bg-opacity-30 rounded-lg p-6">
            {cart.map((item) => (
              <div 
                key={item.id} 
                className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-rebel-muted last:border-0"
              >
                <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-rebel-muted text-sm">{item.description}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="px-2"
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-2 min-w-8 text-center">{item.quantity || 1}</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="px-2"
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="font-medium min-w-20 text-right">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-rebel-accent"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-rebel-secondary bg-opacity-30 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-rebel-muted">Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
            
            <Button 
              className="w-full bg-rebel-accent hover:bg-opacity-80"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full mt-2"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
