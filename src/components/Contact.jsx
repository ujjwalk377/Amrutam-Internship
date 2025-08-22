import React from "react";
import img from "../assets/contact.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8a8e5fc8-13c4-4295-a1ef-5cfaee3c8130");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
      setResult();
    }
  };

  return (
    <section className="bg-[#FFF7E2] py-12 pt-1">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 max-w-5xl mx-auto">
          <div className="w-full lg:w-80 xl:w-120 aspect-square">
            <img
              src={img}
              alt="Let's Connect"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="w-full lg:w-80 xl:w-150 flex flex-col justify-center">
            <form
              className="bg-transparent p-6 xl:p-8 rounded-lg shadow-md space-y-4 border h-full flex flex-col justify-center"
              onSubmit={onSubmit}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-[#3A643B] text-sm mb-1 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Vikas Kumar"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-[#3A643B] text-sm mb-1 font-medium">
                    Your Contact Number
                  </label>
                  <input
                    type="text"
                    placeholder="8743434476"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#3A643B] text-sm mb-1 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="vikass@gmail.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-[#3A643B] text-sm mb-1 font-medium">
                  Message (Optional)
                </label>
                <textarea
                  placeholder="I Want to On-board as a Doctor"
                  rows="3"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition-colors duration-200 w-full"
              >
                {result ? result : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
