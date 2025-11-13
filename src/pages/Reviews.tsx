import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const reviewSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  productName: z.string().trim().min(1, "Product name is required").max(200, "Product name must be less than 200 characters"),
  rating: z.number().min(1, "Please select a rating").max(5, "Rating must be between 1 and 5"),
  review: z.string().trim().min(10, "Review must be at least 10 characters").max(1000, "Review must be less than 1000 characters"),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

interface Review {
  id: number;
  name: string;
  productName: string;
  rating: number;
  review: string;
  date: string;
}

const Reviews = () => {
  const { toast } = useToast();
  const [hoveredStar, setHoveredStar] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "John Doe",
      productName: "Premium Wireless Headphones",
      rating: 5,
      review: "Excellent sound quality and very comfortable to wear for long periods. Highly recommended!",
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Sarah Smith",
      productName: "Smart Watch Pro",
      rating: 4,
      review: "Great features and battery life. The fitness tracking is very accurate.",
      date: "2024-01-14",
    },
  ]);

  const form = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      email: "",
      productName: "",
      rating: 0,
      review: "",
    },
  });

  const onSubmit = (data: ReviewFormData) => {
    const newReview: Review = {
      id: reviews.length + 1,
      name: data.name,
      productName: data.productName,
      rating: data.rating,
      review: data.review,
      date: new Date().toISOString().split('T')[0],
    };
    
    setReviews([newReview, ...reviews]);
    form.reset();
    
    toast({
      title: "Review Submitted!",
      description: "Thank you for your feedback.",
    });
  };

  const renderStars = (rating: number, interactive = false, fieldOnChange?: (value: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              interactive ? 'cursor-pointer' : ''
            } ${
              (interactive ? hoveredStar || rating : rating) >= star
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-muted-foreground'
            }`}
            onMouseEnter={() => interactive && setHoveredStar(star)}
            onMouseLeave={() => interactive && setHoveredStar(0)}
            onClick={() => interactive && fieldOnChange?.(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 pt-20 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-2">Product Reviews</h1>
          <p className="text-muted-foreground mb-8">Share your experience with our products</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Review Form */}
            <Card>
              <CardHeader>
                <CardTitle>Write a Review</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="productName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter product name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="rating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rating</FormLabel>
                          <FormControl>
                            <div>
                              {renderStars(field.value, true, field.onChange)}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="review"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Review</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Share your experience with this product..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">
                      Submit Review
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Reviews List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Recent Reviews</h2>
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{review.name}</h3>
                        <p className="text-sm text-muted-foreground">{review.productName}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="mb-2">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-sm text-foreground">{review.review}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;
