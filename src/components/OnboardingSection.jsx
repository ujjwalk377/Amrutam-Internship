import React from "react";
import img from "..//assets/joc.png";
import vop from "..//assets/vop.png";
import tj from "..//assets/tj.png";
import cd from "..//assets/cd.png";

const OnboardingSection = () => {
  return (
    <section className="bg-[#FFF7E2] py-16 px-6 md:px-50">
      <div className="grid md:grid-cols-2 gap-1 items-center">
        <div className="space-y-4 flex flex-col items-center">
          {[
            "Step 1: Get your referral code",
            "Step 2: Register on Amrutam",
            "Step 3: Complete KYC",
            "Step 4: Start consulting",
          ].map((step, index) => (
            <div
              key={index}
              className="border border-[#3A643B] bg-transparent rounded-lg p-4 shadow-sm w-full max-w-xl"
            >
              <p className="text-sm md:text-base text-[#3A643C] font-medium">
                {step}
              </p>
              <p className="text-xs md:text-sm text-[#3A643C] mt-1">
                {index === 0 &&
                  "Contact us to receive your unique referral code."}
                {index === 1 &&
                  "Sign up on the Amrutam Doctors app or website to join our specialist network."}
                {index === 2 &&
                  "Fill in your details and upload the required documents for verification."}
                {index === 3 &&
                  "Once verified, begin offering consultations and helping patients."}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <img
            src={img}
            alt="Onboarding preview"
            className="rounded-xl max-w-3xl"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-10 bg-transparent">
        <button className="px-6 py-2 bg-green-700 text-white rounded-md shadow hover:bg-green-800 transition">
          Consultations
        </button>
        <button className="px-6 py-2 border text-[#3A643C] border-[#3A643C] rounded-md shadow hover:bg-green-700 hover:text-white transition">
          Payment withdrawal
        </button>
        <button className="px-6 py-2 border text-[#3A643C] border-[#3A643C] rounded-md shadow hover:bg-green-700 hover:text-white transition">
          Schedule
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-1 mt-16 font-bold text-center">
        <div>
          <p className="mb-5 text-[#3A643C] text-2xl">Value Your Practice</p>
          <img
            src={vop}
            alt="Value Your Practice"
            className="mx-auto rounded-xl shadow-lg"
          />
        </div>
        <div>
          <img
            src={tj}
            alt="Today's Healing Journey"
            className="mx-auto rounded-xl shadow-lg"
          />
          <p className="mt-6 text-2xl text-[#3A643C]">
            Today’s Healing Journey
          </p>
        </div>
        <div>
          <p className="mb-5 text-[#3A643C] text-2xl">Consultation Details</p>
          <img
            src={cd}
            alt="Consultation Details"
            className="mx-auto mb-5 rounded-xl shadow-lg"
          />
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-green-700 text-white font-medium rounded-md shadow hover:bg-green-800 transition">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default OnboardingSection;
