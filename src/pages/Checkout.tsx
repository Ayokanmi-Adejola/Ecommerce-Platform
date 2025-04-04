
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Footer from "@/components/Footer";
import { ArrowLeft, CreditCard, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  });
  
  // Calculate total with tax and shipping
  const shipping = 500;
  const tax = cartTotal * 0.08;
  const orderTotal = cartTotal + shipping + tax;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    const requiredFields = [
      "firstName", "lastName", "email", "address", 
      "city", "state", "zipCode", "cardName", 
      "cardNumber", "expMonth", "expYear", "cvv"
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Card validation (basic)
    if (formData.cardNumber.replace(/\s/g, "").length !== 16) {
      toast.error("Please enter a valid 16-digit card number");
      return;
    }
    
    if (formData.cvv.length < 3) {
      toast.error("Please enter a valid CVV");
      return;
    }
    
    // Process payment
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      
      // Clear cart after successful order
      setTimeout(() => {
        clearCart();
        navigate("/");
        toast.success("Thank you for your order! You will receive a confirmation email shortly.");
      }, 3000);
    }, 2000);
  };
  
  if (orderComplete) {
    return (
      <>
        <Helmet>
          <title>Order Confirmation - Adejola and Sons Enterprise</title>
        </Helmet>
        
        <main className="pt-24 pb-16 min-h-screen">
          <div className="container-custom max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-soft p-8 text-center"
            >
              <div className="mb-6 flex justify-center">
                <CheckCircle className="w-20 h-20 text-green-500" />
              </div>
              
              <h1 className="font-serif text-3xl font-bold text-softBlack mb-4">
                Order Confirmed!
              </h1>
              
              <p className="text-charcoal/80 mb-6">
                Thank you for your purchase. Your order has been received and is now being processed.
                You will receive a confirmation email shortly.
              </p>
              
              <div className="mb-8 p-4 bg-green-50 rounded-lg text-left">
                <h3 className="font-semibold mb-2">Order Summary</h3>
                <div className="flex justify-between mb-1">
                  <span>Order Number:</span>
                  <span>ASE-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Amount:</span>
                  <span className="font-medium">₦{orderTotal.toLocaleString()}</span>
                </div>
              </div>
              
              <Link to="/" className="button-primary inline-flex">
                Return to Home
              </Link>
            </motion.div>
          </div>
        </main>
        
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>Checkout - Adejola and Sons Enterprise</title>
        <meta name="description" content="Complete your purchase securely." />
      </Helmet>
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <div className="mb-8">
            <Link to="/cart" className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cart
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-soft p-6">
                <h1 className="font-serif text-2xl font-bold text-softBlack mb-6">Checkout</h1>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <h2 className="font-serif text-xl font-semibold mb-4">Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                          First Name*
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="font-serif text-xl font-semibold mb-4">Shipping Address</h2>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium mb-1">
                          Street Address*
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium mb-1">
                            City*
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium mb-1">
                            State/Province*
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-medium mb-1">
                            Zip/Postal Code*
                          </label>
                          <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="font-serif text-xl font-semibold mb-4">Payment Information</h2>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center">
                      <CreditCard className="w-5 h-5 text-primary mr-2" />
                      <span className="text-sm">All transactions are secure and encrypted.</span>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium mb-1">
                          Name on Card*
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">
                          Card Number*
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="XXXX XXXX XXXX XXXX"
                          className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                          required
                          maxLength={19}
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="expMonth" className="block text-sm font-medium mb-1">
                            Expiry Month*
                          </label>
                          <input
                            type="text"
                            id="expMonth"
                            name="expMonth"
                            value={formData.expMonth}
                            onChange={handleInputChange}
                            placeholder="MM"
                            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                            required
                            maxLength={2}
                          />
                        </div>
                        <div>
                          <label htmlFor="expYear" className="block text-sm font-medium mb-1">
                            Expiry Year*
                          </label>
                          <input
                            type="text"
                            id="expYear"
                            name="expYear"
                            value={formData.expYear}
                            onChange={handleInputChange}
                            placeholder="YY"
                            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                            required
                            maxLength={2}
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium mb-1">
                            CVV*
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                            required
                            maxLength={4}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button 
                      type="submit"
                      disabled={isProcessing || cartItems.length === 0}
                      className="button-primary w-full justify-center"
                    >
                      {isProcessing ? (
                        <span className="flex items-center">
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                          Processing Payment...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <CreditCard className="w-5 h-5 mr-2" />
                          Complete Purchase
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-soft p-6 sticky top-24">
                <h2 className="font-serif text-xl font-semibold mb-4 pb-2 border-b border-gray-100">
                  Order Summary
                </h2>
                
                <div className="space-y-4 mb-4">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex justify-between">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-secondary/30 rounded overflow-hidden flex-shrink-0 mr-3">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">{item.product.name}</h4>
                          <p className="text-xs text-charcoal/70">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-medium">
                        ₦{(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Subtotal</span>
                    <span className="font-medium">₦{cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Shipping</span>
                    <span className="font-medium">₦{shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Tax</span>
                    <span className="font-medium">₦{tax.toLocaleString()}</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-100 flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold text-lg">
                      ₦{orderTotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Checkout;
