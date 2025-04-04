
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useCart } from "@/context/CartContext";
import Footer from "@/components/Footer";
import { Product } from "@/types";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";

// Import the sample product data
import { allProducts } from "./Products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  
  useEffect(() => {
    // Find the product by ID
    const foundProduct = allProducts.find(p => p.id === Number(id));
    
    if (foundProduct) {
      setProduct(foundProduct);
    }
    
    setLoading(false);
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-semibold mb-4">Product Not Found</h1>
          <p className="text-charcoal/70 mb-6">Sorry, we couldn't find the product you're looking for.</p>
          <Link to="/products" className="button-primary inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{product.name} - Fanice Ice Cream</title>
        <meta name="description" content={product.description} />
      </Helmet>
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <Link 
            to="/products" 
            className="inline-flex items-center mb-8 text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square bg-secondary/30 rounded-xl overflow-hidden"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              {product.featured && (
                <span className="absolute top-4 left-4 bg-primary text-white text-xs uppercase tracking-wide px-3 py-1 rounded-full">
                  Premium
                </span>
              )}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 bg-mint text-primary text-sm font-medium rounded-full mb-3">
                {product.category}
              </span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-softBlack mb-4">
                {product.name}
              </h1>
              
              <div className="text-2xl font-semibold text-primary mb-6">
                ₦{product.price.toLocaleString()}
              </div>
              
              <p className="text-charcoal/80 mb-8">
                {product.description}
              </p>
              
              {/* Nutrition Facts or Additional Info */}
              <div className="mb-8 p-5 bg-cream/50 rounded-lg">
                <h3 className="font-serif font-semibold mb-3">Why You'll Love It</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                    Made with premium natural ingredients
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                    No artificial colors or preservatives
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                    Rich, authentic flavor profile
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                    Smooth, creamy texture
                  </li>
                </ul>
              </div>
              
              {/* Quantity Selector and Add to Cart */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
                  <button 
                    onClick={decreaseQuantity}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  
                  <span className="px-6 py-2 text-center min-w-[50px]">{quantity}</span>
                  
                  <button 
                    onClick={increaseQuantity}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="button-primary flex items-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      




      
      <Footer />
    </>
  );
};

export default ProductDetail;
