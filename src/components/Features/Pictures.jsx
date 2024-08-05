import React from 'react';
import { features } from '../../constants/data';

const Pictures = () => {
  return (
    <div className="apsolute backdrop-blur-lg ">
      <div className="apsolute border">
        <div className="">
          {features.map((item, idx) => (
            <div key={idx}>
              <h4>{item.text}</h4>
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pictures;
