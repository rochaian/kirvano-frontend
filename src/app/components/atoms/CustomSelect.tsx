import React, {useState} from 'react';
import SelectIconSvg from '@/app/icons/select-icon.svg'

// Definindo o tipo das opções do seletor
interface Option {
    label: string;
    value: string;
}

// Propriedades para o componente CustomSelect
interface CustomSelectProps {
    options: Option[]; // Uma lista de opções
    defaultOption: string; // O valor padrão do seletor
    onChange?: (value: string) => void; // Callback para mudanças
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, defaultOption, onChange }) => {

    // Estado interno para manter o valor selecionado
    const [selectedValue, setSelectedValue] = useState(defaultOption);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        setSelectedValue(newValue); // Atualiza o estado interno

        if (onChange) {
            onChange(newValue); // Chama a função onChange, se fornecida
        }
    };

    return (
        <div className='relative'>

            <select
                className="w-full bg-c300 text-b800 rounded-lg pl-4 pr-16 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                defaultValue={defaultOption}
                value={selectedValue}
                onChange={handleChange}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <SelectIconSvg/> 
            </div>
        </div>


    );
};

export default CustomSelect;