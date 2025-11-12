import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productWatch from "@/assets/product-watch.jpg";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Premium Wireless Headphones with Noise Cancellation",
      price: 2999,
      originalPrice: 4999,
      image: productHeadphones,
      rating: 4.5,
      reviews: 1250,
      discount: 40,
    },
    {
      id: 3,
      name: "Ultra-Slim Laptop 15.6\" Full HD",
      price: 54999,
      originalPrice: 69999,
      image: productLaptop,
      rating: 4.6,
      reviews: 890,
      discount: 21,
    },
    {
      id: 4,
      name: "Smart Fitness Watch with Heart Monitor",
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
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
          <p className="text-muted-foreground">{wishlistItems.length} items saved</p>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">Your wishlist is empty</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
