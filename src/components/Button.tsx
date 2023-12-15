import { ReactNode } from 'react';

interface IPropsButton {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  className?: string; // Removed the unnecessary ',' and added a semicolon
}

const Button = ({ onClick, children, disabled, className }: IPropsButton) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`capitalize ${className}`}>
      {children}
    </button>
  );
};

export default Button;
