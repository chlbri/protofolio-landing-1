import { FC } from 'react';

type Props = { className?: string };

const SecondaryButton: FC<Props> = ({
  children = 'More Info',
  className,
}) => {
  return (
    <button
      className={`bg-gray-100 text-gray-900 px-5 py-2 rounded-lg active:bg-gray-200 border border-gray-200 shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
