import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "What is Amrutam?",
    answer:
      "Amrutam is a holistic Ayurvedic platform that provides authentic herbal products and services to promote natural healing and wellness.",
  },
  {
    question: "How does Amrutam help me grow as a practitioner?",
    answer:
      "Amrutam connects practitioners with patients, offers resources, and promotes your practice through its trusted platform.",
  },
  {
    question: "How do I become a part of Amrutam Doctor?",
    answer:
      "You can join by signing up on the platform and submitting the required documents for verification.",
  },
  {
    question: "What is Amrutam Global as a platform?",
    answer:
      "Amrutam Global is a wellness platform that connects Ayurvedic doctors and patients worldwide.",
  },
  {
    question: "What documents do I need to provide?",
    answer:
      "You may need to provide your BAMS degree, practitioner license, and ID proof for verification.",
  },
  {
    question: "Is there a fee to join Amrutam?",
    answer: "Currently, joining Amrutam as a doctor is free of cost.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/faq");
    window.scrollTo(0, 0);
  };

  return (
    <section className="bg-[#FFF7E2] py-1 px-6 pb-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-lg text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-green-700 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-2 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button
            onClick={handleClick}
            className="bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
