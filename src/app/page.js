import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Guarantee from "@/components/Guarantee";
import FAQSection from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import BrandsShowcase from "@/components/BrandShowcase";
import Footer from "@/components/Footer";
import Results from "@/components/Result";
import ClientReferences from "@/components/ClientReferences";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <ClientReferences/>
      <HowItWorks />
      <Guarantee />
      <BrandsShowcase />
      <FAQSection />
      <Results />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default page;
