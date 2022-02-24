import React, { FC } from 'react';
import useLang from '../../../lib/locales';
import Feature from './Feature';

const Features: FC = () => {
  const { get } = useLang();
  const title = get('main.features.title');
  const description = get('main.features.description');
  const features: any[] = get('main.features.features');
  return (
    <div
      id="features"
      className="relative bg-gray-100 py-20 mt-20 lg:mt-60"
    >
      {/* Heading */}
      <div className="sm:w-3/4 lg:5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-indigo-500 mb-3">
          {title}
        </h1>
        <p className="text-center text-gray-500">{description}</p>
      </div>
      {features.map((feature, i) => (
        <Feature key={i} {...feature} />
      ))}
    </div>
  );
};

export default Features;
