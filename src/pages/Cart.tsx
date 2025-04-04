
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import Footer from "@/components/Footer";
import { ArrowLeft, CreditCard, ShoppingCart, Trash2 } from "lucide-react";
import { toast } from "sonner";

const Cart = () => {
  const { cartItems, clearCart, cartTotal } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  
  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty. Add some products before checking out.");
      return;
    }
    
    navigate("/checkout");
  };
  
  return (
    <>
      <Helmet>
        <title>Shopping Cart - Adejola and Sons Enterprise</title>
        <meta name="description" content="View and manage your shopping cart." />
      </Helmet>
      
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-serif text-3xl font-bold text-softBlack">Your Cart</h1>
            <Link 
              to="/products" 
              className="inline-flex items-center text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
          </div>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-soft p-6">
                  <div className="mb-4 pb-2 border-b border-gray-100">
                    <h2 className="font-serif text-xl font-semibold">Cart Items ({cartItems.length})</h2>
                  </div>
                  
                  <div className="space-y-1">
                    {cartItems.map((item, index) => (
                      <CartItem key={item.product.id} item={item} index={index} />
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
                    <button 
                      onClick={clearCart}
                      className="flex items-center text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl shadow-soft p-6 sticky top-24"
                >
                  <h2 className="font-serif text-xl font-semibold mb-4 pb-2 border-b border-gray-100">
                    Order Summary
                  </h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-charcoal/70">Subtotal</span>
                      <span className="font-medium">₦{cartTotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal/70">Shipping</span>
                      <span className="font-medium">₦{(500).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal/70">Tax</span>
                      <span className="font-medium">₦{(cartTotal * 0.08).toLocaleString()}</span>
                    </div>
                    <div className="pt-3 mt-3 border-t border-gray-100 flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold text-lg">
                        ₦{(cartTotal + 500 + cartTotal * 0.08).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleProceedToCheckout}
                    disabled={isProcessing || cartItems.length === 0}
                    className="button-primary w-full justify-center"
                  >
                    {isProcessing ? (
                      <span className="flex items-center">
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <CreditCard className="w-5 h-5 mr-2" />
                        Proceed to Checkout
                      </span>
                    )}
                  </button>
                  
                  <div className="mt-4 flex items-center justify-center text-xs text-charcoal/60">
                    <div className="flex items-center space-x-2">
                      <span>Secure Payment</span>
                      <span>•</span>
                      <span>Fast Delivery</span>
                      <span>•</span>
                      <span>Premium Quality</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="bg-cream/50 max-w-md mx-auto rounded-xl p-8">
                <div className="flex justify-center mb-4">
                  <ShoppingCart className="w-16 h-16 text-primary/70" />
                </div>
                <h2 className="font-serif text-2xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-charcoal/70 mb-6">
                  Looks like you haven't added any products to your cart yet.
                </p>
                <Link to="/products" className="button-primary inline-flex">
                  Browse Products
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Cart;
