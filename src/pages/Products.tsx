import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Product } from "@/types";
import { Search, FilterX } from "lucide-react";

// Sample data for all products
export const allProducts: Product[] = [
  {
    id: 1,
    name: "Fanice Vanilla 120ml",
    description: "Classic vanilla ice cream made with pure vanilla extract, delivering a smooth, creamy texture and timeless flavor perfect for any occasion.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/120ml_vanilla?wid=480&fmt=png-alpha&fit=wrap",
    category: "120ml",
    featured: false,
  },
  {
    id: 2,
    name: "Fanice Strawberry 120ml",
    description: "Sweet and refreshing strawberry ice cream bursting with natural fruit flavor, creating a perfect balance of creaminess and berry freshness.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/120ml_stawberry?wid=480&fmt=png-alpha&fit=wrap",
    category: "120ml",
    featured: false,
  },
  {
    id: 3,
    name: "Fanice Banana 120ml",
    description: "Rich and creamy banana ice cream made with real banana puree, offering a tropical twist to your dessert experience.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/120ml_banana?wid=480&fmt=png-alpha&fit=wrap",
    category: "120ml",
    featured: false,
  },
  {
    id: 4,
    name: "Fanice Chocolate 120ml",
    description: "Indulgent chocolate ice cream crafted with premium cocoa, delivering an intense chocolate experience in every spoonful.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/120ml_chocolate?wid=480&fmt=png-alpha&fit=wrap",
    category: "120ml",
    featured: false,
  },
  {
    id: 5,
    name: "Fanice Vanilla 250ml",
    description: "Our signature vanilla ice cream in a larger size, perfect for sharing. Made with premium ingredients for a rich, creamy texture.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/250_Vanilla?wid=480&fmt=png-alpha&fit=wrap",
    category: "250ml",
    featured: false,
  },
  {
    id: 6,
    name: "Fanice Strawberry 250ml",
    description: "Family-sized strawberry ice cream packed with natural strawberry flavor, perfect for sharing or keeping your freezer stocked with summer freshness.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/250_Strawberry?wid=480&fmt=png-alpha&fit=wrap",
    category: "250ml",
    featured: false,
  },
  {
    id: 7,
    name: "Fanice Banana 250ml",
    description: "Creamy banana ice cream in a generous portion, made with real banana puree for an authentic tropical taste experience.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/250_Banana?wid=480&fmt=png-alpha&fit=wrap",
    category: "250ml",
    featured: false,
  },
  {
    id: 8,
    name: "Fanice Chocolate 250ml",
    description: "Rich chocolate ice cream in a sharing size, perfect for chocolate lovers. Made with premium cocoa for an intense chocolate experience.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/250_Chocolate?wid=480&fmt=png-alpha&fit=wrap",
    category: "250ml",
    featured: false,
  },
  {
    id: 9,
    name: "Fanice Vanilla 450ml",
    description: "Our premium vanilla ice cream in a family size, perfect for gatherings. Made with pure vanilla extract for a rich, authentic flavor.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/450ml+Vanilla?wid=480&fmt=png-alpha&fit=wrap",
    category: "450ml",
    featured: false,
  },
  {
    id: 10,
    name: "Fanice Strawberry 450ml",
    description: "Family-sized strawberry ice cream perfect for parties and gatherings. Bursting with natural strawberry flavor in every scoop.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/450ml+Strawberry?wid=480&fmt=png-alpha&fit=wrap",
    category: "450ml",
    featured: false,
  },
  {
    id: 11,
    name: "Fanice Vanilla 900ml",
    description: "Our largest size of premium vanilla ice cream, perfect for events and large gatherings. Rich, creamy, and authentically flavored.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/900ml+Vanilla?wid=480&fmt=png-alpha&fit=wrap",
    category: "900ml",
    featured: false,
  },
  {
    id: 12,
    name: "Fanice Strawberry 900ml",
    description: "Party-sized strawberry ice cream perfect for special occasions. Made with real strawberries for a fresh, natural taste.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/900ml+Strawberry?wid=480&fmt=png-alpha&fit=wrap",
    category: "900ml",
    featured: false,
  },
  {
    id: 13,
    name: "Goslo Cookies & Cream 320ml",
    description: "Premium ice cream blended with real cookie pieces, creating the perfect balance of smooth cream and crunchy cookie texture.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/sm_Cookies_cream?wid=480&fmt=png-alpha&fit=wrap",
    category: "320ml",
    featured: true,
  },
  {
    id: 14,
    name: "Goslo Peanut & Butter 320ml",
    description: "Rich peanut butter ice cream swirled with butter cream, offering a delightful nutty experience with every spoonful.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/sm_Peanut_butter?wid=480&fmt=png-alpha&fit=wrap",
    category: "320ml",
    featured: true,
  },
  {
    id: 15,
    name: "Goslo Salted Caramel 320ml",
    description: "Smooth vanilla ice cream with ribbons of salted caramel throughout, creating a perfect sweet and salty flavor combination.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/sm_Salted_caramel?wid=480&fmt=png-alpha&fit=wrap",
    category: "320ml",
    featured: true,
  },
  {
    id: 16,
    name: "Goslo Chocolate Almond 320ml",
    description: "Premium chocolate ice cream loaded with roasted almond pieces, delivering a perfect blend of rich chocolate and nutty crunch.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/sm_Chocolate_almond?wid=480&fmt=png-alpha&fit=wrap",
    category: "320ml",
    featured: true,
  },
  {
    id: 17,
    name: "Goslo Cookies & Cream 460ml",
    description: "Family-sized cookies and cream ice cream packed with premium cookie pieces, perfect for sharing this classic favorite.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/Cookies_cream?wid=480&fmt=png-alpha&fit=wrap",
    category: "460ml",
    featured: true,
  },
  {
    id: 18,
    name: "Goslo Peanut & Butter 460ml",
    description: "Generous portion of our signature peanut butter ice cream, perfect for peanut butter lovers seeking a rich, creamy treat.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/Peanut_butter?wid=480&fmt=png-alpha&fit=wrap",
    category: "460ml",
    featured: true,
  },
  {
    id: 19,
    name: "Goslo Salted Caramel 460ml",
    description: "Large format of our popular salted caramel ice cream, featuring perfect swirls of salted caramel in smooth vanilla ice cream.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/Salted_caramel?wid=480&fmt=png-alpha&fit=wrap",
    category: "460ml",
    featured: true,
  },
  {
    id: 20,
    name: "Goslo Chocolate Almond 460ml",
    description: "Family-sized chocolate almond ice cream, combining rich chocolate ice cream with premium roasted almonds for a luxurious dessert experience.",
    price: 0,
    image: "https://smartmedia.digital4danone.com//is/image/danonecs/Chocolate_almond?wid=480&fmt=png-alpha&fit=wrap",
    category: "460ml",
    featured: true,
  },
];

// Get unique categories from the products
const categories = ["All", ...new Set(allProducts.map(product => product.category))];

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter products based on category and search term
  useEffect(() => {
    let filtered = allProducts;
    
    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
    }
    
    setFilteredProducts(filtered);
  }, [activeCategory, searchTerm]);
  
  const clearFilters = () => {
    setActiveCategory("All");
    setSearchTerm("");
  };
  
  return (
    <>
      <Helmet>
        <title>Our Products - Fanice Ice Cream</title>
        <meta name="description" content="Explore our range of premium artisanal ice cream flavors." />
      </Helmet>
      
      <main className="pt-24 pb-16">
        <section className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            
            <h1 className="headline mb-6">Discover All Flavors</h1>
            <p className="text-charcoal/80 max-w-2xl mx-auto">
            Indulge in the refreshing taste you know and love, delivered fresh.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            {/* Search bar */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search flavors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-secondary/50 text-softBlack hover:bg-secondary"
                  }`}
                >
                  {category}
                </button>
              ))}
              
              {(activeCategory !== "All" || searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 rounded-full bg-gray-100 text-softBlack text-sm hover:bg-gray-200 transition-colors flex items-center"
                >
                  <FilterX className="w-4 h-4 mr-1" />
                  Clear filters
                </button>
              )}
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-secondary/30 rounded-lg p-8 max-w-md mx-auto"
              >
                <h3 className="font-serif text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">
                  We couldn't find any products matching your current filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="button-primary inline-flex items-center"
                >
                  <FilterX className="w-4 h-4 mr-2" />
                  Clear all filters
                </button>
              </motion.div>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Products;
