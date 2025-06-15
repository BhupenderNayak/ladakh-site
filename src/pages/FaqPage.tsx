
import Header from '@/components/Header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the best time to visit Ladakh?",
    answer: "The best time to visit Ladakh is during the summer season from late May to early September. During this time, the weather is pleasant, roads are open, and the landscape is in full bloom."
  },
  {
    question: "Do I need a permit to visit Ladakh?",
    answer: "Indian tourists do not need a permit for most parts of Leh. However, permits (called 'Inner Line Permits') are required for visiting restricted areas like Nubra Valley, Pangong Tso, and Tso Moriri. Foreign nationals need a Protected Area Permit (PAP) for these regions. Permits can be applied for online."
  },
  {
    question: "How do I deal with altitude sickness (AMS)?",
    answer: "Acclimatization is key. On your first day in Leh, it's crucial to rest and not exert yourself. Drink plenty of water (3-4 liters daily), avoid alcohol, and eat light meals. You can also consult a doctor about taking Diamox (Acetazolamide) as a preventive measure."
  },
  {
    question: "What kind of clothing should I pack?",
    answer: "Ladakh's weather can be unpredictable. It's best to dress in layers. Pack thermal wear, fleece jackets, a windproof/waterproof outer layer, warm socks, gloves, a cap, and sunglasses. Even in summer, evenings and nights can be very cold."
  },
  {
    question: "Is it safe to travel solo in Ladakh?",
    answer: "Yes, Ladakh is generally considered very safe for solo travelers, including women. The local people are friendly and helpful. However, always take standard safety precautions, inform someone of your itinerary, and be prepared for the remote and rugged terrain."
  },
  {
    question: "What mobile networks work in Ladakh?",
    answer: "Only postpaid connections from other states work in Ladakh. BSNL, Airtel, and Jio have the best coverage, especially in Leh and nearby areas. In more remote regions, connectivity can be sparse or non-existent."
  }
];

const FaqPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dairycream">
      <Header />
      <main id="main-content" className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-crimson font-tinos">Frequently Asked Questions</h1>
            <p className="mt-2 text-lg text-jetblack max-w-3xl mx-auto">Find answers to common questions about planning your trip to Ladakh.</p>
          </div>
          <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold text-jetblack text-left hover:text-crimson focus:text-crimson">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FaqPage;
