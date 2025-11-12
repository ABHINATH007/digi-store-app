import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productWatch from "@/assets/product-watch.jpg";

const Products = () => {
  const products = [
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
      id: 2,
      name: "Latest Smartphone Pro Max 5G",
      price: 79999,
      originalPrice: 89999,
      image: productPhone,
      rating: 4.8,
      reviews: 3420,
      discount: 11,
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
    {
      id: 5,
      name: "Bluetooth Wireless Earbuds Pro",
      price: 1999,
      originalPrice: 3499,
      image: productHeadphones,
      rating: 4.3,
      reviews: 890,
      discount: 43,
    },
    {
      id: 6,
      name: "Gaming Laptop RTX Graphics",
      price: 89999,
      originalPrice: 109999,
      image: productLaptop,
      rating: 4.7,
      reviews: 670,
      discount: 18,
    },
    {
      id: 7,
      name: "Professional DSLR Camera Bundle",
      price: 45999,
      image: productPhone,
      rating: 4.9,
      reviews: 340,
    },
    {
      id: 8,
      name: "Smart Home Security Camera",
      price: 4999,
      originalPrice: 7999,
      image: productWatch,
      rating: 4.2,
      reviews: 1560,
      discount: 38,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">All Products</h1>
          <p className="text-muted-foreground">Explore our wide range of products</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
