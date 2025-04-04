
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Product } from "@/types";
import { ArrowRight } from "lucide-react";

// Sample data for featured products
const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Cookies & Cream",
    description: "Premium vanilla ice cream generously mixed with crushed chocolate cookie pieces, creating an irresistible combination of smooth and crunchy textures in every bite.",
    price: 0,
    image: "cookies.png",
    category: "Classic",
    featured: true,
  },
  {
    id: 2,
    name: "Peanut Butter",
    description: "Rich and creamy peanut butter ice cream swirled with smooth butter cream, delivering an indulgent nutty flavor that peanut butter enthusiasts will love.",
    price: 0,
    image: "peanut.png",
    category: "Classic",
    featured: true,
  },
  {
    id: 3,
    name: "Tiramisu Chocolate",
    description: "Luxurious chocolate ice cream infused with authentic Italian coffee and layered with mascarpone cream, capturing the essence of classic tiramisu in frozen form.",
    price: 0,
    image: "tiramisu.png",
    category: "Fruit",
    featured: true,
  },
  {
    id: 4,
    name: "Vanilla & Coconut",
    description: "Smooth Madagascar vanilla ice cream blended with real coconut cream and flakes, creating a tropical paradise of flavors that transport you to sandy beaches.",
    price: 0,
    image: "vanilla.png",
    category: "Nuts",
    featured: true,
  },
  {
    id: 5,
    name: "Salted Caramel",
    description: "Velvety vanilla ice cream ribboned with golden salted caramel swirls, perfectly balancing sweet and salty notes for a sophisticated dessert experience.",
    price: 0,
    image: "caramel.png",
    category: "Classic",
    featured: true,
  },
  {
    id: 6,
    name: "Chocolate Almond",
    description: "Decadent chocolate ice cream studded with premium roasted almonds, combining rich cocoa flavors with the satisfying crunch of carefully selected nuts.",
    price: 0,
    image: "chocolate.png",
    category: "Nuts",
    featured: true,
  }
];

const FeaturedProducts = () => {
  return (
    <section className="section bg-cream/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-mint text-primary text-sm font-medium rounded-full mb-4">Our Premium Selection</span>
            <h2 className="subheadline max-w-lg">Premium Ice Cream</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              to="/products" 
              className="group inline-flex items-center text-primary font-medium mt-4 md:mt-0 hover:underline"
            >
              <span>Explore All Products</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
        
        <div className="flex overflow-x-auto pb-4 gap-6 lg:gap-8 hide-scrollbar">
          {featuredProducts.map((product, index) => (
            <div className="flex-shrink-0 w-[280px]" key={product.id}>
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
