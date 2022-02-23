import { FC } from 'react';

const PrimaryButton: FC = ({ children = 'More Info' }) => {
  return (
    <button className="bg-indigo-500 text-white px-5 py-2 rounded-lg active:bg-indigo-700 shadow-md">
      {children}
    </button>
  );
};

export default PrimaryButton;
