import React from 'react';
import { theme } from '../../utils/theme';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2"
    style={{
      borderColor: theme.colors.border,
      fontFamily: theme.fonts.arabic,
      color: theme.colors.text.dark,
    }}
  />
);
