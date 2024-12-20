import React from 'react';

interface InputFieldProps {
    label: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    success?: string;
    required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    error,
    success,
    required = false,
}) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`
                    w-full px-3 py-2 border rounded-lg shadow-sm
                    focus:outline-none focus:ring-2
                    ${error ? 'border-red-500 focus:ring-red-200' : 
                        success ? 'border-green-500 focus:ring-green-200' :
                        'border-gray-300 focus:ring-blue-200 focus:border-blue-500'}
                `}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
            {success && !error && (
                <p className="mt-1 text-sm text-green-500">{success}</p>
            )}
        </div>
    );
};

export default InputField;