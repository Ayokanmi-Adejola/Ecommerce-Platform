
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CartItem as CartItemType } from "@/types";
import { motion } from "framer-motion";

interface CartItemProps {
  item: CartItemType;
  index: number;
}

const CartItem: React.FC<CartItemProps> = ({ item, index }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="flex items-center py-4 border-b border-gray-200"
    >
      <div className="w-20 h-20 rounded-md overflow-hidden bg-secondary/30 flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h3 className="font-serif text-lg font-medium text-softBlack">{product.name}</h3>
        <p className="text-charcoal/70 text-sm">${product.price.toFixed(2)} each</p>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
          <button 
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          
          <span className="px-4 py-1">{quantity}</span>
          
          <button 
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <div className="ml-4 w-24 text-right">
          <span className="font-medium">₦{(product.price * quantity).toFixed(2)}</span>
        </div>
        
        <button 
          onClick={() => removeFromCart(product.id)}
          className="ml-3 text-red-500 hover:text-red-700 transition-colors"
          aria-label={`Remove ₦{product.name} from cart`}
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default CartItem;
