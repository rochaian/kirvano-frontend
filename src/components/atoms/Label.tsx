import React from 'react';
import classNames from 'classnames';

// Definir as variantes para os tipos de títulos em inglês
type LabelVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

interface LabelProps {
  text: string;          // O texto do rótulo
  variant: LabelVariant; // A variante para estilo do rótulo
}

const Label: React.FC<LabelProps> = ({ text, variant }) => {
  const labelClass = classNames({
    'font-inter text-left': true, // Fonte Inter, alinhamento à esquerda para todos
    'text-[20px] font-medium leading-[24.2px] text-black': variant === 'primary', // Título principal
    'text-[16px] font-medium leading-[19.36px] text-[#2D3748]': variant === 'secondary', // Título secundário
    'text-[16px] font-medium leading-[19.36px] text-[#718096]': variant === 'tertiary', // Título terciário
    'text-[16px] font-normal leading-[19.36px] text-[#2D3748]': variant === 'quaternary', // Título quaternário
  });

  return <span className={labelClass}>{text}</span>;
};

export default Label;
