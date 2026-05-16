import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'dark' | 'white';
}

export function Button({ children, className = '', variant = 'primary', ...props }: ButtonProps) {
  const baseStyle = "uppercase tracking-widest text-[10px] sm:text-xs font-semibold py-3 px-6 sm:px-8 transition-all duration-300 inline-block";
  const variants = {
    primary: "bg-primary text-white hover:bg-brand-darker",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    dark: "bg-brand-darker text-white hover:bg-primary",
    white: "bg-white text-primary hover:bg-brand-darker hover:text-white"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
