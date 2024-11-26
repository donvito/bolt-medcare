import React from 'react';
import { Users, Calendar, Clock, Activity, Heart, Thermometer, Pill } from 'lucide-react';

const stats = [
  { 
    label: 'Critical Patients', 
    value: '8', 
    icon: Heart,
    change: '+2',
    color: 'bg-red-500',
    trend: 'up'
  },
  { 
    label: 'Today\'s Patients', 
    value: '42', 
    icon: Users,
    change: '+5',
    color: 'bg-primary-500',
    trend: 'up'
  },
  { 
    label: 'Pending Tests', 
    value: '15', 
    icon: Thermometer,
    change: '-3',
    color: 'bg-amber-500',
    trend: 'down'
  },
  { 
    label: 'Prescriptions', 
    value: '156', 
    icon: Pill,
    change: '+12',
    color: 'bg-green-500',
    trend: 'up'
  }
];

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ label, value, icon: Icon, change, color, trend }) => (
        <div key={label} className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-4">
            <div className={`${color} bg-opacity-10 p-3 rounded-lg`}>
              <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-secondary-600">{label}</p>
              <div className="flex items-end gap-2">
                <p className="text-2xl font-semibold text-secondary-900">{value}</p>
                <span className={`text-sm ${
                  trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {change}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}