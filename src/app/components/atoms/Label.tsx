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
    
    'text-[18px] font-medium leading-[21.78px] text-c700': variant === 'secondary', // Título secundário
    
    'text-[16px] font-medium leading-[19.36px] text-b800': variant === 'tertiary', // Título terciário
    'text-[16px] font-medium leading-[19.36px] text-c600': variant === 'quaternary', // Título quaternário

    'text-[20px] font-bold leading-[24.2px] text-black': variant === 'bold', // Negrito


    'text-[20px] font-medium leading-[24.2px] text-b800': variant === 'price', // Preço

    'text-[20px] font-medium leading-[24.2px] text-v500': variant === 'green', // Verde

    'text-[20px] font-medium leading-[24.2px]] text-b600': variant === 'blue' // Azul
  });

  return <span className={labelClass}>{text}</span>;
};

export default Label;
