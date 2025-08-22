import React from "react";
import dp from "../assets/dp.png";

const testimonials = [
  {
    name: "Dr. Pooja Deshmukh, BAMS",
    text: "Amrutam's formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing.",
    stars: 5,
    img: dp,
  },
  {
    name: "Dr. Rajesh Iyer, Ayurvedic Practitioner",
    text: "Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle.",
    stars: 5,
    img: dp,
  },
  {
    name: "Dr. Ananya Sharma, BAMS",
    text: "As an Ayurvedic doctor, I appreciate Amrutam's commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I've personally seen positive results in my patients using their products.",
    stars: 5,
    img: dp,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#FFF7E2] py-7 px-6 pb-15">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`bg-[#FFE8B6] p-6 rounded-xl shadow-md text-left transition-all duration-300 hover:shadow-lg ${
                index === 1
                  ? "md:flex-[1.4] md:scale-110 md:z-10 md:shadow-xl"
                  : "md:flex-1"
              }`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className={`rounded-full mr-3 ${
                    index === 1 ? "w-14 h-14" : "w-12 h-12"
                  }`}
                />
                <div>
                  <h3
                    className={`font-semibold text-green-900 ${
                      index === 1 ? "text-lg" : "text-base"
                    }`}
                  >
                    {t.name}
                  </h3>
                  <div className="flex text-yellow-500">
                    {"★".repeat(t.stars)}
                  </div>
                </div>
              </div>
              <p
                className={`text-gray-700 ${
                  index === 1 ? "text-base" : "text-sm"
                }`}
              >
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
