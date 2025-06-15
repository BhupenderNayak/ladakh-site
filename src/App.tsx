
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LiveUpdatesCurrentStatus from "./pages/LiveUpdatesCurrentStatus";
import AwardsRecognition from "./pages/AwardsRecognition";
import FestivalsAndEvents from "./pages/FestivalsAndEvents";
import FestivalDetailsPage from "./pages/FestivalDetailsPage";
import FaqPage from "./pages/FaqPage";
import HelpPage from "./pages/HelpPage";
import FeedbackPage from "./pages/FeedbackPage";
import PlanYourTrip from "./pages/PlanYourTrip";
import HistoricalMonumentsPage from "./pages/culture/HistoricalMonumentsPage";
import ArtAndCraftPage from "./pages/culture/ArtAndCraftPage";
import LocalCuisinePage from "./pages/culture/LocalCuisinePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow lg:pb-0">
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="/awards" element={<AwardsRecognition />} />
              <Route path="/updates/weather" element={<LiveUpdatesCurrentStatus />} />
              <Route path="/festivals" element={<FestivalsAndEvents />} />
              <Route path="/festivals/:festivalId" element={<FestivalDetailsPage />} />
              <Route path="/contact/faq" element={<FaqPage />} />
              <Route path="/contact/help" element={<HelpPage />} />
              <Route path="/contact/feedback" element={<FeedbackPage />} />
              <Route path="/plan" element={<PlanYourTrip />} />
              <Route path="/culture/monuments" element={<HistoricalMonumentsPage />} />
              <Route path="/culture/art-craft" element={<ArtAndCraftPage />} />
              <Route path="/culture/cuisine" element={<LocalCuisinePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
