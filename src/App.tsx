import React, { useState } from 'react';
import { DemoNoticeBanner } from './components/DemoNoticeBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { WhyForgeFit } from './components/WhyForgeFit';
import { Trainers } from './components/Trainers';
import { Facilities } from './components/Facilities';
import { Membership } from './components/Membership';
import { SampleTestimonials } from './components/SampleTestimonials';
import { LocationHours } from './components/LocationHours';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { StickyMobileCTA } from './components/StickyMobileCTA';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPrefill, setModalPrefill] = useState<{
    plan?: string;
    program?: string;
    trainer?: string;
  } | undefined>(undefined);

  const handleOpenEnquiry = (prefill?: { plan?: string; program?: string; trainer?: string }) => {
    setModalPrefill(prefill);
    setModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setModalOpen(false);
    setModalPrefill(undefined);
  };

  const handleSelectProgram = (programName: string) => {
    handleOpenEnquiry({ program: programName });
  };

  const handleSelectTrainer = (trainerName: string) => {
    handleOpenEnquiry({ trainer: trainerName });
  };

  const handleSelectPlan = (planName: string) => {
    handleOpenEnquiry({ plan: planName });
  };

  return (
    <div className="min-h-screen bg-[#0A0C10] text-zinc-100 flex flex-col font-sans selection:bg-orange-600 selection:text-white pb-14 md:pb-0">
      {/* 1. DEMO NOTICE */}
      <DemoNoticeBanner />

      {/* 2. NAVBAR */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      <main className="flex-1">
        {/* 3. HERO */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 4. PROGRAMS */}
        <Programs onSelectProgram={handleSelectProgram} />

        {/* 5. WHY FORGEFIT */}
        <WhyForgeFit />

        {/* 6. TRAINERS */}
        <Trainers onSelectTrainer={handleSelectTrainer} />

        {/* 7. FACILITIES */}
        <Facilities />

        {/* 8. MEMBERSHIP */}
        <Membership onSelectPlan={handleSelectPlan} />

        {/* 9. SUCCESS/TESTIMONIAL SECTION */}
        <SampleTestimonials />

        {/* 10. LOCATION + HOURS */}
        <LocationHours />

        {/* 11. CONTACT */}
        <ContactSection initialPrefill={modalPrefill} />

        {/* 12. FINAL CTA */}
        <FinalCTA onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* INTERACTIVE ENQUIRY MODAL */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={handleCloseEnquiry}
        prefill={modalPrefill}
      />

      {/* STICKY MOBILE CTA (Strictly < 15% mobile viewport height) */}
      <StickyMobileCTA onOpenEnquiry={() => handleOpenEnquiry()} />
    </div>
  );
}
