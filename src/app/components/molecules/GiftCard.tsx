import React from 'react';
import Label from '../atoms/Label';

const GiftCard = () => {
    return (
        <div className='py-8'>

            <Label text="Gift Card / Discount code" variant="quaternary" />

            <div className="flex items-center justify-between rounded-lg py-2">
                <input
                    className="w-full bg-c300 rounded-lg text-black px-6 py-4 border-2"
                />
                <button
                    className="ml-4 px-8 py-4 rounded-lg border-2 border-blue-500 text-blue-500"
                >
                    Apply
                </button>
            </div>
        </div>

    );
};

export default GiftCard;