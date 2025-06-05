import React from 'react';

type TextProps = {
  ar: string;
  en: string;
  className?: string;
};

export const Text: React.FC<TextProps> = ({ ar, en, className }) => (
  <span className={className}>{ar} ({en})</span>
);
