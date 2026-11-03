import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ClinicalDistinction from '../components/ClinicalDistinction';
import CarePhilosophy from '../components/CarePhilosophy';
import Journey90Days from '../components/Journey90Days';
import Mind360Curriculum from '../components/Mind360Curriculum';
import Life360Aftercare from '../components/Life360Aftercare';
import FacilitySpaces from '../components/FacilitySpaces';
import TeamStaffing from '../components/TeamStaffing';
import SuitabilityScreener from '../components/SuitabilityScreener';
import AdmissionWorkflow from '../components/AdmissionWorkflow';
import FAQ from '../components/FAQ';
import ConsultationModal from '../components/ConsultationModal';
import Footer from '../components/Footer';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleScrollToScreener = () => {
    const el = document.getElementById('screener');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>RESET 360° | Residential Rehabilitation Sanctuary | SPJ Bengaluru</title>
        <meta 
          name="description" 
          content="An integrated, evidence-informed residential rehabilitation sanctuary in Bengaluru for alcohol and substance-use disorders. Combining 90 days of psychiatric care & behavioural transformation with 12 months aftercare." 
        />
        <meta name="keywords" content="rehabilitation centre bangalore, alcohol deaddiction bangalore, residential rehab karnataka, dual diagnosis psychiatric treatment, RESET 360, SPJ de-addiction, non coercive rehab, luxury rehab india, sanctuary wellness bangalore" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="RESET 360° | A New Beginning. A Different Way of Living." />
        <meta property="og:description" content="15-bed boutique residential sanctuary in Bengaluru. 90-day clinical pathway, MIND360 curriculum, and 12 months of structured continuing care." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-ivory text-charcoal-900 flex flex-col selection:bg-sage-200 selection:text-forest-950 font-sans">
        {/* Navigation Bar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Hero Section */}
        <main className="flex-1">
          <Hero 
            onOpenBooking={handleOpenBooking} 
            onExploreScreener={handleScrollToScreener} 
          />

          {/* Clinical Distinction (Rehab Institution vs Acute Detox) */}
          <ClinicalDistinction />

          {/* Care Philosophy & Non-Coercive Promise */}
          <CarePhilosophy />

          {/* The 90-Day Residential Journey (RESET 360°) */}
          <Journey90Days />

          {/* MIND360 Behavioural Curriculum & Trigger Simulation Lab */}
          <Mind360Curriculum />

          {/* LIFE360 12-Month Aftercare Framework */}
          <Life360Aftercare />

          {/* 15-Bed Sanctuary (2,710 Sq. Ft. Facility Plan & Daily Schedule) */}
          <FacilitySpaces />

          {/* 20+ Member Multidisciplinary Team & Governance */}
          <TeamStaffing />

          {/* Interactive Confidential Suitability Screener */}
          <SuitabilityScreener onOpenBooking={handleOpenBooking} />

          {/* Admission Workflow */}
          <AdmissionWorkflow onOpenBooking={handleOpenBooking} />

          {/* Frequently Asked Questions */}
          <FAQ />
        </main>

        {/* Footer */}
        <Footer />

        {/* Consultation Booking Modal */}
        <ConsultationModal 
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)} 
        />
      </div>
    </>
  );
}
