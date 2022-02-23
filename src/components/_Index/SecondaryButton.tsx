import { FC } from 'react';

const SecondaryButton: FC = ({ children = 'More Info' }) => {
  return (
    <button className="bg-gray-100 text-gray-900 px-5 py-2 rounded-lg active:bg-gray-200 border border-gray-200 shadow-md">
      {children}
    </button>
  );
};

export default SecondaryButton;
