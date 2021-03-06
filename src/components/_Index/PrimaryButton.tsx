import { FC } from 'react';

type Props = { className?: string };

const PrimaryButton: FC<Props> = ({
  children = 'More Info',
  className,
}) => {
  return (
    <button
      className={`bg-indigo-500 text-white px-5 py-2 rounded-lg active:bg-indigo-700 shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
