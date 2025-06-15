
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HelpPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dairycream">
      <Header />
      <main id="main-content" className="flex-grow">
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-crimson font-tinos">Help Center</h1>
                <p className="mt-2 text-lg text-jetblack max-w-3xl mx-auto">We're here to assist you. Find the best way to get in touch with us.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                <CardTitle className="flex items-center gap-3 text-crimson">
                    <Phone size={24} />
                    <span className="text-2xl font-tinos">Contact Us</span>
                </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                <p className="text-jetblack">For immediate assistance, please call our helpline.</p>
                <div>
                    <p className="font-semibold text-lg text-jetblack">Tourism Helpline:</p>
                    <a href="tel:+91-1982-252094" className="text-crimson font-bold text-xl hover:underline">
                        +91-1982-252094
                    </a>
                </div>
                </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                <CardTitle className="flex items-center gap-3 text-crimson">
                    <Mail size={24} />
                    <span className="text-2xl font-tinos">Email Support</span>
                </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                <p className="text-jetblack">Send us an email with your query, and we'll get back to you within 24 hours.</p>
                <div>
                    <p className="font-semibold text-lg text-jetblack">Support Email:</p>
                    <a href="mailto:support@discoverladakh.gov" className="text-crimson font-bold text-xl hover:underline">
                        support@discoverladakh.gov
                    </a>
                </div>
                </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                <CardTitle className="flex items-center gap-3 text-crimson">
                    <HelpCircle size={24} />
                    <span className="text-2xl font-tinos">FAQs</span>
                </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                <p className="text-jetblack">Have a question? Find answers to common queries in our FAQ section.</p>
                <Button asChild className="bg-crimson hover:bg-crimson/90 w-full">
                    <Link to="/contact/faq">
                    Browse FAQs
                    </Link>
                </Button>
                </CardContent>
            </Card>
            </div>
        </div>
      </main>
    </div>
  );
};

export default HelpPage;
