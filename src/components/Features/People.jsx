import React from 'react';
import { testimonials } from '../../constants/data';

const People = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight font-semibold font-customFontEn text-center mb-10">
        <span className="bg-gradient-to-r from-indigo-800 to bg-indigo-200 text-transparent bg-clip-text">
          What People{' '}
        </span>
        are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((item, idx) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-customFontEn">
              <div key={idx}>
                <p>{item.text}</p>
                <div className="flex mt-8 items-start">
                  <img
                    src={item.image}
                    alt=""
                    className="w-10 h-10 rounded-full border border-neutral-600"
                  />
                  <div className="mx-2">
                    <h6>{item.user}</h6>
                    <sapn className="text-sm font-normal italic text-neutral-600">
                      {item.company}
                    </sapn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
