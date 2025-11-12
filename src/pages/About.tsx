import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: ShoppingBag, label: "Products", value: "50,000+" },
    { icon: Users, label: "Happy Customers", value: "1M+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: TrendingUp, label: "Growth Rate", value: "200%" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">About ShopHub</h1>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground text-center mb-8">
              Your trusted online shopping destination for quality products at unbeatable prices
            </p>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2014, ShopHub has grown from a small startup to one of India's leading 
                  e-commerce platforms. We started with a simple mission: to make quality products 
                  accessible to everyone at affordable prices.
                </p>
                <p className="text-muted-foreground">
                  Today, we serve over 1 million customers across the country, offering a vast selection 
                  of products ranging from electronics to fashion, home goods to beauty products.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <p className="text-2xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  To revolutionize online shopping in India by providing:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Best quality products at competitive prices</li>
                  <li>Seamless shopping experience across all devices</li>
                  <li>Fast and reliable delivery nationwide</li>
                  <li>Exceptional customer service and support</li>
                  <li>Secure payment options and buyer protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Verified Products</h3>
                    <p>All products on our platform are 100% authentic and come with manufacturer warranties.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Easy Returns</h3>
                    <p>Not satisfied? Return products within 30 days for a full refund, no questions asked.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Secure Shopping</h3>
                    <p>Your data is protected with industry-standard encryption and secure payment gateways.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
                    <p>Our customer care team is always ready to assist you with any queries or concerns.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
