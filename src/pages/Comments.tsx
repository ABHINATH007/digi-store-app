import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageSquare } from "lucide-react";
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

const commentSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  comment: z.string().trim().min(5, "Comment must be at least 5 characters").max(1000, "Comment must be less than 1000 characters"),
});

type CommentFormData = z.infer<typeof commentSchema>;

interface Comment {
  id: number;
  name: string;
  subject: string;
  comment: string;
  date: string;
  replies: number;
}

const Comments = () => {
  const { toast } = useToast();
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      name: "Alice Johnson",
      subject: "Great Shopping Experience",
      comment: "I love shopping here! The delivery is always on time and products are of excellent quality.",
      date: "2024-01-15",
      replies: 2,
    },
    {
      id: 2,
      name: "Michael Brown",
      subject: "Suggestion for Improvement",
      comment: "Would be great to have more payment options. Overall, very satisfied with the service.",
      date: "2024-01-14",
      replies: 1,
    },
    {
      id: 3,
      name: "Emma Wilson",
      subject: "Product Quality",
      comment: "The products match their descriptions perfectly. Very happy with my recent purchases!",
      date: "2024-01-13",
      replies: 0,
    },
  ]);

  const form = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      comment: "",
    },
  });

  const onSubmit = (data: CommentFormData) => {
    const newComment: Comment = {
      id: comments.length + 1,
      name: data.name,
      subject: data.subject,
      comment: data.comment,
      date: new Date().toISOString().split('T')[0],
      replies: 0,
    };
    
    setComments([newComment, ...comments]);
    form.reset();
    
    toast({
      title: "Comment Posted!",
      description: "Your comment has been successfully submitted.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 pt-20 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-2">Community Comments</h1>
          <p className="text-muted-foreground mb-8">Share your thoughts and feedback with us</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Comment Form */}
            <Card>
              <CardHeader>
                <CardTitle>Leave a Comment</CardTitle>
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
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Comment subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="comment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Comment</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Write your comment here..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">
                      Post Comment
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Comments List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Recent Comments</h2>
              {comments.map((comment) => (
                <Card key={comment.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{comment.name}</h3>
                        <p className="text-sm font-medium text-primary">{comment.subject}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{comment.date}</span>
                    </div>
                    <p className="text-sm text-foreground mb-3">{comment.comment}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MessageSquare className="w-4 h-4" />
                      <span>{comment.replies} {comment.replies === 1 ? 'reply' : 'replies'}</span>
                    </div>
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

export default Comments;
