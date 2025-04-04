
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative pb-[100%] overflow-hidden bg-mint/10">
          <img 
            src={product.image} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {product.featured && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs uppercase tracking-wider rounded-full">
              Premium
            </span>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="font-serif text-xl font-semibold text-softBlack group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
