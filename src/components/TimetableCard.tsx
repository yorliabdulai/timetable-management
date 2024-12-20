import React from 'react';
import { Clock, MapPin, User } from 'lucide-react';

// Types
type Status = 'upcoming' | 'ongoing' | 'completed';

type TimetableEntry = {
  id: string;
  courseName: string;
  lecturer: string;
  venue: string;
  startTime: string;
  endTime: string;
  status: Status;
};

type TimetableCardProps = {
  entry?: Partial<TimetableEntry>;
  onClick?: (entry: TimetableEntry) => void;
  onHover?: (entry: TimetableEntry) => void;
  className?: string;
};

// Default entry data
const defaultEntry: TimetableEntry = {
  id: 'default',
  courseName: 'No Course Name',
  lecturer: 'No Lecturer Assigned',
  venue: 'No Venue',
  startTime: '--:--',
  endTime: '--:--',
  status: 'upcoming'
};

const TimetableCard: React.FC<TimetableCardProps> = ({
  entry = defaultEntry,
  onClick,
  onHover,
  className = ''
}) => {
  // Merge provided entry with default values
  const safeEntry: TimetableEntry = {
    ...defaultEntry,
    ...entry
  } as TimetableEntry;

  // Status badge styles
  const getStatusStyles = (status: Status) => {
    const baseStyles = 'text-xs font-medium px-2.5 py-0.5 rounded-full';
    
    switch (status) {
      case 'ongoing':
        return `${baseStyles} bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400`;
      case 'upcoming':
        return `${baseStyles} bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400`;
      case 'completed':
        return `${baseStyles} bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300`;
      default:
        return `${baseStyles} bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300`;
    }
  };

  // Handle click safely
  const handleClick = () => {
    if (onClick) {
      onClick(safeEntry);
    }
  };

  // Handle hover safely
  const handleHover = () => {
    if (onHover) {
      onHover(safeEntry);
    }
  };

  return (
    <div
      className={`
        bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700
        p-4 shadow-sm hover:shadow-md transition-shadow duration-200
        cursor-pointer select-none
        ${className}
      `}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${safeEntry.courseName} class details`}
    >
      <div className="flex flex-col space-y-3">
        {/* Header: Course Name and Status */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {safeEntry.courseName}
          </h3>
          <span className={getStatusStyles(safeEntry.status)}>
            {safeEntry.status.charAt(0).toUpperCase() + safeEntry.status.slice(1)}
          </span>
        </div>

        {/* Time */}
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm">
            {safeEntry.startTime} - {safeEntry.endTime}
          </span>
        </div>

        {/* Venue */}
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm">{safeEntry.venue}</span>
        </div>

        {/* Lecturer */}
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <User className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm">{safeEntry.lecturer}</span>
        </div>
      </div>
    </div>
  );
};

export default TimetableCard;
