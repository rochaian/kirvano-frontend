import React from 'react';
import classNames from 'classnames';

// Definir as variantes para os tipos de títulos em inglês
type LabelVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'bold' | 'price' | 'green' | 'blue';

interface LabelProps {
  text: string;          // O texto do rótulo
  variant: LabelVariant; // A variante para estilo do rótulo
}

const Label: React.FC<LabelProps> = ({ text, variant }) => {
  const labelClass = classNames({
    'font-inter text-left pb-4': true, // Fonte Inter, alinhamento à esquerda para todos
    'text-[20px] font-medium leading-[24.2px] text-black': variant === 'primary', // Título principal
    
    'text-[18px] font-medium leading-[21.78px] text-[#4A5568]': variant === 'secondary', // Título secundário
    
    'text-[16px] font-medium leading-[19.36px] text-[#2D3748]': variant === 'tertiary', // Título terciário
    'text-[16px] font-medium leading-[19.36px] text-[#718096]': variant === 'quaternary', // Título quaternário

    'text-[20px] font-bold leading-[24.2px] text-black': variant === 'bold', // Negrito


    'text-[20px] font-medium leading-[24.2px] text-[#2D3748]': variant === 'price', // Negrito

    'text-[20px] font-medium leading-[24.2px] text-[#38B2AC]': variant === 'green', // Negrito

    // 'text-[18px] font-normal leading-[21.78px] text-black': variant === 'green' // Negrito
    'text-[20px] font-bold leading-[24.2px]] text-[#3182CE]': variant === 'blue' // Negrito
  });

  return <span className={labelClass}>{text}</span>;
};

export default Label;
