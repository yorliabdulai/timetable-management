import React, { useEffect } from "react";

type NotificationProps = {
    message: string;
    type?: "success" | "error" | "info";
    duration?: number;
    onClose?: () => void;
};

const Notification: React.FC<NotificationProps> = ({
    message,
    type = "info",
    duration = 3000,
    onClose,
}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose?.();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const icon = {
        success: (
            <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        ),
        error: (
            <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        ),
        info: (
            <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 8h.01" />
            </svg>
        ),
    }[type];

    const bgColor = {
        success: "bg-green-100",
        error: "bg-red-100",
        info: "bg-blue-100",
    }[type];

    return (
        <div
            className={`fixed top-4 right-4 flex items-center max-w-sm p-4 rounded shadow-lg text-sm ${bgColor}`}
            role="alert"
        >
            <div className="mr-2">{icon}</div>
            <div className="text-gray-800">{message}</div>
        </div>
    );
};

export default Notification;