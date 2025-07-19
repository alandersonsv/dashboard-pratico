import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { QuizProvider } from "@/contexts/QuizContext";
import Header from "@/components/Header";
import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";
import Solution from "./pages/Solution";
import Sales from "./pages/Sales";
import Offer from "./pages/Offer";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <QuizProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen bg-background">
              <Header />
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/solution" element={<Solution />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/offer" element={<Offer />} />
                <Route path="/thank-you" element={<ThankYou />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </QuizProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
