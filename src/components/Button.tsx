import React from 'react';

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'danger';
    loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<
    NonNullable<ButtonProps['variant']>,
    string
> = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
};

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    loading = false,
    children,
    ...props
}) => {
    return (
        <button
            {...props}
            disabled={props.disabled || loading}
            className={`px-4 py-2 rounded-md transition-colors duration-200 disabled:opacity-50 ${variantClasses[variant]}`}
        >
            {loading ? (
                <div className="flex items-center">
                    <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3.5-3.5L8.5 3.5.5 10.5V6A8 8 0 004 12z"
                        />
                    </svg>
                    Loading...
                </div>
            ) : (
                children
            )}
        </button>
    );
};