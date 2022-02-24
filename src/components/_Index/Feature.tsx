import Image from 'next/image';
import { FC } from 'react';
import PrimaryButton from './PrimaryButton';
type Props = {
  title: string;
  imageSrc?: string;
  desc: string;
  right?: true;
  children?: never;
};

const Feature: FC<Props> = ({
  title,
  desc,
  right,
  imageSrc = '/images/illustration-features-tab-1.png',
}) => {
  return (
    <section className="relative mt-20 lg:mt-24">
      <div
        className={`container mx-auto p-6 flex flex-col items-center justify-between ${
          right ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
      >
        <div className="flex w-5/6 sm:w-4/6 lg:w-5/12 justify-center z-10 mb-10 lg:mb-0 relative aspect-[536/346]">
          <Image
            src={imageSrc}
            layout="fill"
            alt="Feature 1"
            className="z-20 "
          />
        </div>
        <div className="relative flex w-5/6 sm:w-4/6 lg:w-6/12 flex-col items-center lg:items-start">
          <h2 className="text-3xl text-indigo-500">{title}</h2>
          <p className="text-gray-500 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
            {desc}
          </p>
          <div
            className={`flex w-full justify-center ${
              right ? 'lg:justify-start' : 'lg:justify-end'
            }`}
          >
            <PrimaryButton />
          </div>
        </div>
      </div>
      <div
        className={`absolute bg-indigo-500 w-5/12 h-2/3 hidden lg:block -bottom-16 ${
          right ? 'right-0 rounded-l-full' : '-left-0 rounded-r-full'
        }`}
      />
    </section>
  );
};

export default Feature;
