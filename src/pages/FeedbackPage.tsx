
import Header from '@/components/Header';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500, { message: "Message cannot exceed 500 characters."}),
});

const FeedbackPage = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Feedback Submitted!",
      description: "Thank you for your valuable feedback. We appreciate you taking the time.",
    });
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen bg-dairycream">
      <Header />
      <main id="main-content" className="flex-grow">
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-crimson font-tinos">Feedback Portal</h1>
                <p className="mt-2 text-lg text-jetblack max-w-3xl mx-auto">We value your opinion. Please share your thoughts, suggestions, or issues with us.</p>
            </div>
            <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-jetblack font-semibold">Full Name</FormLabel>
                            <FormControl>
                            <Input placeholder="John Doe" {...field} className="h-12 border-gray-300 focus:border-crimson focus:ring-crimson"/>
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
                            <FormLabel className="text-jetblack font-semibold">Email Address</FormLabel>
                            <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} className="h-12 border-gray-300 focus:border-crimson focus:ring-crimson"/>
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
                            <FormLabel className="text-jetblack font-semibold">Subject</FormLabel>
                            <FormControl>
                            <Input placeholder="e.g., Suggestion for website improvement" {...field} className="h-12 border-gray-300 focus:border-crimson focus:ring-crimson"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-jetblack font-semibold">Your Message</FormLabel>
                            <FormControl>
                            <Textarea placeholder="Please provide your detailed feedback here." {...field} className="min-h-[150px] border-gray-300 focus:border-crimson focus:ring-crimson"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full bg-crimson hover:bg-crimson/90 text-lg h-12">Submit Feedback</Button>
                    </form>
                </Form>
            </div>
        </div>
      </main>
    </div>
  );
};

export default FeedbackPage;
