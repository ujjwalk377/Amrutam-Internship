import React from "react";
import { FaPhoneAlt, FaComments, FaWallet, FaCalendarCheck } from "react-icons/fa";
import img1 from '..//assets/one.png'
import img2 from '..//assets/two.png'
import img3 from '..//assets/three.png'
import img4 from '..//assets/four.png'
import img5 from '..//assets/five.png'

const AboutUs = () => {
  const features = [
    {
      title: "Instant FREE 5-Min Call",
      desc: "We understand the importance of building trust with your patients. That’s why Amrutam offers a free 5-minute call, helping you connect instantly and foster lasting patient relationships with ease.",
      icon: <FaPhoneAlt className="text-green-600 text-5xl" />,
      img: img1
    },
    {
      title: "Forum for Meaningful Connections",
      desc: "We value your journey in Ayurveda .The Amrutam Forum helps you engage with patients, answer questions, while the ''Thoughts'' section allows you to share deeper Ayurvedic wisdom.Join a thriving Ayurvedic forum where doctors and patients interact, share insights, and create stronger patient-doctor relationships.",
      icon: <FaComments className="text-green-600 text-5xl" />,
      img: img2
    },
    {
      title: "Choose Your Session Mode",
      desc: "Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs.",
      icon: <FaCalendarCheck className="text-green-600 text-5xl" />,
      img: img3
    },
    {
      title: "Smart Wallet",
      desc: "We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.",
      icon: <FaWallet className="text-green-600 text-5xl" />,
      img: img4
    },
    {
      title: "Flexible Work Timing",
      desc: "We recognize the importance of managing your time. With the availability toggle in the doctor’s app, you control when patients can book consultations, ensuring a balanced and stress-free practice.",
      icon: <FaCalendarCheck className="text-green-600 text-5xl" />,
      img: img5
    },
  ];

  return (
    <section className="bg-[#FFF7E2] py-16 px-6 md:px-20">
      <div className="space-y-25 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="grid md:grid-cols-2 items-center gap-30">
            <div
              className={`space-y-4 ${
                idx % 2 === 1 ? "md:order-1" : "md:order-2"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#EAF7EB] p-3 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-semibold text-[#33643F]">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-l leading-relaxed">
                {feature.desc}
              </p>
            </div>

     
            <div
              className={`flex justify-center ${
                idx % 2 === 1 ? "md:order-2" : "md:order-1"
              }`}
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full max-w-3xl rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
