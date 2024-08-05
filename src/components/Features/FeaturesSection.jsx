import React from 'react';
import { features } from '../../constants/data';
const FeaturesSection = () => {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className="mt-20  border-b border-neutral-800">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight font-semibold font-customFontEn text-center">
          Easily Build{' '}
          <span className="bg-gradient-to-r from-indigo-200 to bg-indigo-800 text-transparent bg-clip-text">
            Your Code
          </span>
        </h2>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          {features.map((item, idx) => (
            <div key={idx} className="w-full lg:w-1/3 sm:w-1/2">
              <div className="flex">
                <div>
                  <h5 className="mt-1 mb-6 text-xl font-customFontKn ">
                    {item.text}
                  </h5>
                  <p className="block text-base p-2 mb-10 text-neutral-500 font-customFontEn sm:h-[112px]">
                    {item.description}
                  </p>
                  <div className="flex justify-center">
                    <button
                      className="flex mx-6 h-16 w-10 p-2 bg-neutral-900 text-indigo-700  rounded-full mb-10 "
                      onClick={handleClick}
                    >
                      {item.icon}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
