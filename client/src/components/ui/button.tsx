import React from 'react';
import { theme } from '../../utils/theme';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  const bgColor = variant === 'primary' ? theme.colors.primary : theme.colors.accent;
  return (
    <button
      {...props}
      className={`py-2 px-4 rounded-md text-white font-medium ${className}`}
      style={{ backgroundColor: bgColor, fontFamily: theme.fonts.arabic }}
    >
      {children}
    </button>
  );
};
