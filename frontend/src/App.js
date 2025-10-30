import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandCarousel from "./components/BrandCarousel";
import DiscoverSection from "./components/DiscoverSection";
import TestimonialHero from "./components/TestimonialHero";
import InfinityAISection from "./components/InfinityAISection";
import AwardsSection from "./components/AwardsSection";
import FeaturesSection from "./components/FeaturesSection";
import WhySection from "./components/WhySection";
import IntegrationsSection from "./components/IntegrationsSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import { CTASection, Footer } from "./components/Footer";
import LeadFormModal from "./components/LeadFormModal";

function App() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const openLeadForm = () => setIsLeadFormOpen(true);
  const closeLeadForm = () => setIsLeadFormOpen(false);

  return (
    <div className="App">
      <Header onOpenLeadForm={openLeadForm} />
      <Hero onOpenLeadForm={openLeadForm} />
      <BrandCarousel />
      <DiscoverSection />
      <TestimonialHero />
      <InfinityAISection onOpenLeadForm={openLeadForm} />
      <AwardsSection />
      <FeaturesSection onOpenLeadForm={openLeadForm} />
      <WhySection />
      <IntegrationsSection />
      <TestimonialsCarousel />
      <CTASection onOpenLeadForm={openLeadForm} />
      <Footer />
      <LeadFormModal isOpen={isLeadFormOpen} onClose={closeLeadForm} />
    </div>
  );
}

export default App;
