import React from 'react';
import { Home, Calendar, Bell, Settings, Users, Menu, X } from 'lucide-react';

// Types
type NavItem = {
  id: string;
  label: string;
  icon: keyof typeof iconComponents;
  href: string;
};

type SidebarProps = {
  items?: NavItem[];
  activeItemId?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
  onNavigate?: (item: NavItem) => void;
};

// Icon mapping
const iconComponents = {
  Home,
  Calendar,
  Bell,
  Settings,
  Users,
};

// Default navigation items
const defaultItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'Home', href: '/' },
  { id: 'timetable', label: 'Timetable', icon: 'Calendar', href: '/timetable' },
  { id: 'notifications', label: 'Notifications', icon: 'Bell', href: '/notifications' },
  { id: 'students', label: 'Students', icon: 'Users', href: '/students' },
  { id: 'settings', label: 'Settings', icon: 'Settings', href: '/settings' },
];

const Sidebar: React.FC<SidebarProps> = ({
  items = defaultItems,
  activeItemId = 'dashboard',
  isExpanded = true,
  onToggle = () => {},
  onNavigate = () => {},
}) => {
  // Get icon component by name
  const getIcon = (iconName: keyof typeof iconComponents) => {
    const IconComponent = iconComponents[iconName];
    return <IconComponent className="w-5 h-5" />;
  };

  // Render nav item
  const renderNavItem = (item: NavItem) => {
    const isActive = item.id === activeItemId;
    
    return (
      <a
        key={item.id}
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          onNavigate(item);
        }}
        className={`
          flex items-center px-4 py-3 gap-x-3 rounded-lg
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500
          ${isActive 
            ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400' 
            : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
          }
        `}
        aria-current={isActive ? 'page' : undefined}
      >
        {getIcon(item.icon)}
        <span className={`text-sm font-medium ${isExpanded ? 'opacity-100' : 'md:opacity-0 md:w-0'} transition-all duration-200`}>
          {item.label}
        </span>
      </a>
    );
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300">
        {/* Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">UniTime</span>
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {isExpanded ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto" aria-label="Sidebar">
          {items.map(renderNavItem)}
        </nav>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-around px-4 py-2">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item);
              }}
              className={`
                flex flex-col items-center p-2 rounded-lg
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-blue-500
                ${item.id === activeItemId 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-200'
                }
              `}
              aria-current={item.id === activeItemId ? 'page' : undefined}
            >
              {getIcon(item.icon)}
              <span className="text-xs mt-1">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
