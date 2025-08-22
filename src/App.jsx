import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Title from "./components/Titles";
import Feature from "./components/Feature";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import OnboardingSection from "./components/OnboardingSection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import AppDownload from "./components/AppDownload";
import { Routes, Route } from "react-router-dom";

import FAQPage from "./pages/FAQPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <section id="hero">
                <Navbar />
                <Hero />
              </section>

              <Title
                title="Featured"
                subTitle="Recognized and celebrated by leading publications – Amrutam in the spotlight!"
              />
              <Feature />

              <section id="aboutus">
                <Title
                  title="Why Doctors Choose Us"
                  subTitle="Unlock the Benefits of Smarter Healthcare Management and Patient Care"
                />
                <AboutUs />
              </section>

              <section id="obsec">
                <Title
                  title="Join Our Circle of Care"
                  subTitle="Becoming a part of Amrutam is simple"
                />
                <OnboardingSection />
              </section>

              <section id="test">
                <Title
                  title="What other Ayurvedic Doctors are Saying"
                  subTitle="Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!"
                />
                <Testimonials />
              </section>

              <section id="faq">
                <Title
                  title="Frequently Asked Questions"
                  subTitle="Find quick answers to common questions to help you navigate the app and its features easily."
                />
                <FAQ />
              </section>

              <AppDownload />
              <Title
                title="Let's Connect"
                subTitle="We're here to help you on your wellness journey. Reach out to us for any questions, product inquiries, or personalised advice"
              />
              <Contact />
              <Footer />
            </div>
          }
        />

        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </>
  );
};

export default App;
