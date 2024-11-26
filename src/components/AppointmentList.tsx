import React from 'react';
import { Appointment } from '../types';
import { Clock, Calendar, ChevronRight } from 'lucide-react';

interface AppointmentListProps {
  appointments: Appointment[];
}

export default function AppointmentList({ appointments }: AppointmentListProps) {
  const statusColors = {
    Scheduled: 'bg-primary-50 text-primary-700 border-primary-100',
    'In Progress': 'bg-amber-50 text-amber-700 border-amber-100',
    Completed: 'bg-green-50 text-green-700 border-green-100'
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-secondary-900">Today's Schedule</h2>
          <p className="text-sm text-secondary-500">March 21, 2024</p>
        </div>
        <Calendar className="w-5 h-5 text-secondary-400" />
      </div>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex gap-3 items-center">
              <div className="w-2 h-2 rounded-full bg-primary-500" />
              <div>
                <p className="font-medium text-secondary-900">{appointment.patientName}</p>
                <div className="flex items-center gap-2 text-sm text-secondary-500">
                  <Clock className="w-4 h-4" />
                  <span>{appointment.time}</span>
                  <span>•</span>
                  <span>{appointment.type}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-sm border ${statusColors[appointment.status]}`}>
                {appointment.status}
              </span>
              <button className="text-secondary-400 hover:text-secondary-600">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full py-2 text-sm text-primary-600 hover:text-primary-700 font-medium">
        View Full Schedule
      </button>
    </div>
  );
}