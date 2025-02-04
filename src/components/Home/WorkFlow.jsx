import React from 'react';
import codeImg from '../../assets/code.jpg';
import { checklistItems } from '../../constants/data';
import { CheckCircle2 } from 'lucide-react';

const WorkFlow = () => {
  return (
    <div className="mt-20 ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-tight font-customFontEn font-semibold">
        Accelerate Your{' '}
        <span className="bg-gradient-to-r from-indigo-200 to bg-indigo-800 text-transparent bg-clip-text">
          Coding Workflow
        </span>
      </h2>
      <div className="flex justify-center mb:block lg:flex">
        <div className="p-2 w-full lg:w-1/2 ">
          <img src={codeImg} alt="Coding Screen" />
        </div>
        <div className="p-12 w-full lg:w-1/2 ">
          {checklistItems.map((itme, idx) => (
            <div key={idx} className="flex md-12">
              <div className="text-indigo-400 mx-6 bg-neutral-900 h-10 w-10 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl font-customFontKn">
                  {itme.title}
                  <p className="text-base text-neutral-500 font-customFontEn">
                    {itme.description}
                  </p>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
