import React from 'react';
import classNames from 'classnames'; // Para adicionar classes CSS condicionalmente

type ButtonProps = {
    typeButton?: "submit" | "reset" | "button" | undefined;
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary'; // Variantes de estilo para o botão
};

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', typeButton}) => {
  const buttonClass = classNames('p-2 text-base', {
    'bg-b600 text-[#F7FBFC] shadow-custom': variant === 'primary',
    'bg-light text-c700': variant === 'secondary',
  });

  const customStyles = classNames(
    'w-[200px]', // largura
    'h-[60px]', // altura
    'gap-0', // sem gap
    'rounded-[10px]', // borda arredondada superior esquerda
    'font-size[16px]'
  );


  return (
    <button type={typeButton} className={`${buttonClass} ${customStyles}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;