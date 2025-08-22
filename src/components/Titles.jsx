import React from "react";

const Title = ({ subTitle, title }) => {
  return (
    <div className="max-w-6xl mx-auto text-center pt-7">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800">
        {title}
      </h2>
      <p className="text-gray-600 mt-2 mb-12">{subTitle}</p>
    </div>
  );
};

export default Title;
