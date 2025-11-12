import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Truck, CheckCircle2 } from "lucide-react";
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";

const Orders = () => {
  const orders = [
    {
      id: "ORD-2024-001",
      date: "March 15, 2024",
      status: "delivered",
      total: 79999,
      items: [
        {
          name: "Latest Smartphone Pro Max 5G",
          image: productPhone,
          price: 79999,
          quantity: 1,
        },
      ],
    },
    {
      id: "ORD-2024-002",
      date: "March 18, 2024",
      status: "shipped",
      total: 2999,
      items: [
        {
          name: "Premium Wireless Headphones",
          image: productHeadphones,
          price: 2999,
          quantity: 1,
        },
      ],
    },
    {
      id: "ORD-2024-003",
      date: "March 20, 2024",
      status: "processing",
      total: 6998,
      items: [
        {
          name: "Premium Wireless Headphones",
          image: productHeadphones,
          price: 2999,
          quantity: 2,
        },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "shipped":
        return <Truck className="h-5 w-5 text-primary" />;
      default:
        return <Package className="h-5 w-5 text-warning" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "outline"> = {
      delivered: "default",
      shipped: "secondary",
      processing: "outline",
    };
    
    return (
      <Badge variant={variants[status]} className="capitalize">
        {status}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">My Orders</h1>

        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(order.status)}
                    <div>
                      <CardTitle className="text-lg">{order.id}</CardTitle>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                  </div>
                  {getStatusBadge(order.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded border border-border"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₹{item.price}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-semibold">Total Amount:</span>
                    <span className="text-xl font-bold text-primary">₹{order.total}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">Track Order</Button>
                    <Button variant="outline" className="flex-1">View Invoice</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Orders;
