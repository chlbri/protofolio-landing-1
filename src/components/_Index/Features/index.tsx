import React, { FC } from 'react';
import Feature from './Feature';
import data from './data.json';

const Features: FC = () => {
  return (
    <div
      id="features"
      className="relative bg-gray-100 py-20 mt-20 lg:mt-60"
    >
      {/* Heading */}
      <div className="sm:w-3/4 lg:5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-indigo-500 mb-3">
          {data.title}
        </h1>
        <p className="text-center text-gray-500">{data.description}</p>
      </div>
      {data.features.map((feature, i) => (
        <Feature key={i} {...feature} />
      ))}
    </div>
  );
};

export default Features;
