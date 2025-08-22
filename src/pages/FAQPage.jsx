import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Search,
  ShoppingCart,
  Wallet,
  MessageSquare,
  Play,
  Apple,
  Star,
  Clock,
  MessageCircle,
  Bell,
  User,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import img from "..//assets/logo.png";
import bigphone from "..//assets/iphonefaq.png";
import callicon from "..//assets/callicon.png";
import faqicons from "..//assets/faqicons.png";

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState("Consultation");
  const [openFAQ, setOpenFAQ] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = ["Consultation", "Wallet", "Forum", "Shop"];

  const faqData = {
    Consultation: [
      {
        question: "What types of consultations are available?",
        answer:
          "We provide three types of consultations - video, instant call and chat consultation.",
      },
      {
        question: "Can I get refund for the wallet money?",
        answer:
          "Refund policies vary based on specific circumstances. Please contact our support team for detailed information about wallet refunds.",
      },
      {
        question: "What is the Amrutam Forum?",
        answer:
          "Amrutam Forum is a community platform where users can share experiences, ask questions, and connect with healthcare professionals.",
      },
      {
        question: "Can I pause the audio consultation?",
        answer:
          "Yes, audio consultations can be paused. However, please note that the consultation time will continue to run.",
      },
      {
        question: "Is there a minimum duration for an audio consultation?",
        answer:
          "Yes, there is a minimum duration requirement for audio consultations to ensure quality healthcare delivery.",
      },
      {
        question: "Can I het refund for the wallet money?",
        answer: "Yes, you can get refund for the wallet money.",
      },
      {
        question: "What is the Amrutam Forum?",
        answer:
          "Amrutam Forum is a community platform where users can share experiences, ask questions, and connect with healthcare professionals..",
      },
      {
        question: "Can i pause the Audio consultation?",
        answer: "Yes, there is an option to pause the audio consultation.",
      },
    ],
    Wallet: [
      {
        question: "How do I add money to my wallet?",
        answer:
          "You can add money to your wallet through various payment methods including credit/debit cards, net banking, and UPI.",
      },
      {
        question: "Is my wallet money refundable?",
        answer:
          "Wallet money refund policies depend on specific terms and conditions. Please contact support for assistance.",
      },
    ],
    Forum: [
      {
        question: "How do I participate in the forum?",
        answer:
          "Simply create an account and start engaging with the community by posting questions or sharing experiences.",
      },
      {
        question: "Are forum discussions moderated?",
        answer:
          "Yes, all forum discussions are moderated to ensure quality and appropriate content.",
      },
    ],
    Shop: [
      {
        question: "How do I place an order?",
        answer:
          "Browse our products, add items to cart, and proceed to checkout with your preferred payment method.",
      },
      {
        question: "What is the return policy?",
        answer:
          "We offer a hassle-free return policy within specified timeframes. Check product details for specific return conditions.",
      },
    ],
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  const getTabIcon = (tab) => {
    switch (tab) {
      case "Consultation":
        return <User className="w-4 h-4" />;
      case "Wallet":
        return <Wallet className="w-4 h-4" />;
      case "Forum":
        return <MessageSquare className="w-4 h-4 bg-tr" />;
      case "Shop":
        return <ShoppingCart className="w-4 h-4" />;
      default:
        return null;
    }
  };
  const [email, setEmail] = useState("");

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <header className="bg-[#FFF7E2] border-b border-gray-200">
          <nav className="bg-[#FFF7E2]">
            <div className="mt-8 ml-20 flex absolute">
              <img src={callicon} alt="phone icon" />
              <h1>+91 9826352321</h1>
            </div>

            <div className="flex justify-center pt-1">
              <img src={img} alt="logo" className="mb-5 h-15 w-auto" />
            </div>
            <div>
              <ul className="flex justify-center gap-15 text-lg font-semibold max-w-6xl mx-auto text-center text-[#3A643B] mb-2">
                <li>
                  <a href="/" className="hover:text-amber-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#obsec" className="hover:text-amber-500">
                    Find Doctors
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-amber-500">
                    Lab Tests
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-amber-500">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="hover:text-amber-500">
                    Forum
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-amber-500">
                    About Us
                  </a>
                </li>
                <div>
                  <img src={faqicons} alt="doc-icons" className="h-9" />
                </div>
              </ul>
            </div>
          </nav>
        </header>

        <section className="relative py-16 px-4 bg-blue-50">
          {/* Decorative leaves */}
          <div className="absolute left-0 top-0 w-32 h-32 opacity-50">
            <div className="w-full h-full bg-green-200 rounded-full transform rotate-12"></div>
          </div>
          <div className="absolute right-0 top-8 w-24 h-24 opacity-50">
            <div className="w-full h-full bg-green-300 rounded-full transform -rotate-12"></div>
          </div>
          <div className="absolute left-8 bottom-0 w-28 h-28 opacity-50">
            <div className="w-full h-full bg-green-200 rounded-full transform rotate-45"></div>
          </div>
          <div className="absolute right-8 bottom-8 w-36 h-36 opacity-50">
            <div className="w-full h-full bg-green-100 rounded-full transform -rotate-24"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              FAQ
            </h1>

            <div className="relative max-w-md mx-auto mb-12">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for any queries that you have"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        <section className="pb-16 px-4 bg-[#FFF7E2]">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex bg-transparent  rounded-lg shadow-md overflow-hidden">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center space-x-2 px-6 py-3 font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-green-600 text-white"
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {getTabIcon(tab)}
                    <span>{tab}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {faqData[activeTab].map((faq, index) => (
                <div
                  key={index}
                  className="bg-transparent rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-800 pr-4">
                      {faq.question}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>

                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <div className="border-t pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center text-[#3A643B] mt-8">
              <button className="inline-flex items-center px-6 py-3 bg-transparet border shadow-md border-gray-300 rounded-lg hover:bg-[#3A643B] hover:text-white transition-colors">
                <span className="mr-2">Load More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Download Amrutam Ayurveda
                  <br />
                  <span className="text-green-600">App Now</span>
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  The Amrutam Ayurveda App is your one-stop app
                  <br />
                  for all things Ayurveda! Apart from mimicking the
                  <br />
                  website, the app has added benefits
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 border rounded-xl">
                  <div className="w-12 h-12 bg-transparent rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#3A643B]">Access To</p>
                    <p className="text-sm text-[#3A643B]">Prescriptions</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 border rounded-xl">
                  <div className="w-12 h-12 bg-transparent rounded-full flex items-center justify-center ">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#3A643B]">Track Health</p>
                    <p className="text-sm text-[#3A643B]">Effectively</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 border rounded-xl">
                  <div className="w-12 h-12 bg-transparent rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#3A643B]">
                      Direct Chat With
                    </p>
                    <p className="text-sm text-[#3A643B]">Doctors</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 border rounded-xl">
                  <div className="w-12 h-12 bg-transparent rounded-full flex items-center justify-center">
                    <Bell className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#3A643B]">
                      In-App Reminders
                    </p>
                    <p className="text-sm text-[#3A643B]">For Consultations</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-16 cursor-pointer"
                />
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-16 cursor-pointer"
                />
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="bg-white rounded-3xl p-4 shadow-2xl max-w-[400px] w-full">
                <div className="flex justify-center">
                  <img
                    src={bigphone}
                    alt="App Screenshot"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="absolute top-20 -right-8 w-48 transform rotate-12">
                <div className="bg-white rounded-2xl p-3 shadow-xl">
                  <div className="bg-gradient-to-br from-yellow-200 to-green-300 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                      <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-xs text-gray-700 mb-2">100+</p>
                    <p className="text-xs font-semibold text-gray-800">
                      Downloads
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 left-8 w-20 h-20 bg-green-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-8 -left-4 w-16 h-16 bg-yellow-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        <footer className="bg-blue-50 text-black py-12">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-[#3A643B]">
                  Get in touch
                </h3>
                <p className="text-sm text-black mb-2">
                  support@amrutam.global
                </p>
                <div className="text-sm text-black space-y-1">
                  <p>Amrutam Pharmaceuticals Pvt Ltd.,</p>
                  <p>chitragupt ganj, Nai Sadak, Lashkar,</p>
                  <p>Gwalior - 474001</p>
                  <p className="mt-3">+91 9713171999</p>
                </div>

                <div className="flex space-x-3 pt-3">
                  <a
                    href="/"
                    className="bg-green-800 text-white p-2 rounded-full"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="/"
                    className="bg-green-800 text-white p-2 rounded-full"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="/"
                    className="bg-green-800 text-white p-2 rounded-full"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="/"
                    className="bg-green-800 text-white p-2 rounded-full"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="/"
                    className="bg-green-800 text-white p-2 rounded-full"
                  >
                    <Youtube size={18} />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 text-[#3A643B]">
                  Information
                </h3>
                <ul className="text-sm text-black space-y-2">
                  <li>
                    <a href="/" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy for Mobile Apps
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Shipping and returns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      International Delivery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      For Businesses, Hotels, and Resorts
                    </a>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2 flex-1 px-30 pl-15">
                <h3 className="font-semibold text-lg mb-4 text-[#3A643B]">
                  Subscribe to our Newsletter and join
                  <br />
                  Amrutam Family today!
                </h3>
                <div className="flex space-x-2 mb-6 border rounded-3xl">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500"
                  />
                  <button className="bg-black hover:bg-gray-800 text-white px-12 py-3 rounded-full font-semibold transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FAQPage;
