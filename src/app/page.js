import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Guarantee from "@/components/Guarantee";
// import LeadCaptureForm from "@/components/LeadForm";
import Testimonials from "@/components/ProofTestimonials";
import FAQSection from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import BrandsShowcase from "@/components/BrandShowcase";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <HowItWorks />
      <Guarantee />
      {/* <LeadCaptureForm /> */}
      <BrandsShowcase/>
      {/* <Testimonials /> */}
      <FAQSection />
      <CallToAction/>
      <Footer/>
    </div>
  );
};

export default page;
