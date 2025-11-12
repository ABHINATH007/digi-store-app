import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import heroBanner from "@/assets/hero-banner.jpg";
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productWatch from "@/assets/product-watch.jpg";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 2999,
      originalPrice: 4999,
      image: productHeadphones,
      rating: 4.5,
      reviews: 1250,
      discount: 40,
    },
    {
      id: 2,
      name: "Latest Smartphone Pro Max",
      price: 79999,
      originalPrice: 89999,
      image: productPhone,
      rating: 4.8,
      reviews: 3420,
      discount: 11,
    },
    {
      id: 3,
      name: "Ultra-Slim Laptop 15.6\"",
      price: 54999,
      originalPrice: 69999,
      image: productLaptop,
      rating: 4.6,
      reviews: 890,
      discount: 21,
    },
    {
      id: 4,
      name: "Smart Fitness Watch",
      price: 3499,
      originalPrice: 5999,
      image: productWatch,
      rating: 4.4,
      reviews: 2100,
      discount: 42,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={heroBanner}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Shop Smart, Live Better
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Discover amazing deals on electronics, fashion, and more. Your one-stop destination for quality products.
              </p>
              <Link to="/products">
                <Button size="lg" className="gap-2">
                  Explore Products <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Best deals of the season</p>
            </div>
            <Link to="/products">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Electronics", "Fashion", "Home & Kitchen", "Sports"].map((category) => (
              <Link
                key={category}
                to="/products"
                className="p-8 bg-card border border-border rounded-lg text-center hover:border-primary transition-colors"
              >
                <h3 className="font-semibold">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
