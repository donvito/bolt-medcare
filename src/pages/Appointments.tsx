import React from 'react';
import { Calendar as CalendarIcon, Clock, Plus, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { appointments } from '../data';

export default function Appointments() {
  const today = new Date();
  const timeSlots = Array.from({ length: 8 }, (_, i) => format(new Date().setHours(9 + i, 0), 'h:mm a'));

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900">Appointments</h1>
            <p className="text-secondary-600">Schedule and manage patient appointments</p>
          </div>

          <div className="flex gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-secondary-600 hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
              <Plus className="w-4 h-4" />
              <span>New Appointment</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="flex border-b border-gray-200">
            {/* Calendar Sidebar */}
            <div className="w-64 border-r border-gray-200 p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-secondary-900">{format(today, 'MMMM yyyy')}</h2>
                <div className="flex gap-1">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-secondary-500 font-medium py-1">{day}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 text-center">
                {Array.from({ length: 35 }, (_, i) => (
                  <button
                    key={i}
                    className={`p-2 text-sm rounded-lg ${
                      i === 14
                        ? 'bg-primary-50 text-primary-700 font-medium'
                        : 'hover:bg-gray-50 text-secondary-900'
                    }`}
                  >
                    {((i + 1) % 31) + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Schedule Grid */}
            <div className="flex-1 overflow-auto">
              <div className="grid grid-cols-1 divide-y divide-gray-200">
                {timeSlots.map((time, index) => (
                  <div key={time} className="min-h-[100px] relative group">
                    <div className="absolute left-4 top-2 text-sm text-secondary-500">{time}</div>
                    {appointments.map(apt => apt.time === time && (
                      <div
                        key={apt.id}
                        className={`absolute left-16 right-4 top-2 p-3 rounded-lg ${
                          apt.status === 'Completed'
                            ? 'bg-green-50 border border-green-100'
                            : apt.status === 'In Progress'
                            ? 'bg-amber-50 border border-amber-100'
                            : 'bg-primary-50 border border-primary-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-secondary-900">{apt.patientName}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            apt.status === 'Completed'
                              ? 'bg-green-100 text-green-700'
                              : apt.status === 'In Progress'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-primary-100 text-primary-700'
                          }`}>
                            {apt.status}
                          </span>
                        </div>
                        <p className="text-sm text-secondary-600 mt-1">{apt.type}</p>
                      </div>
                    ))}
                    <button className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gray-50/50 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}