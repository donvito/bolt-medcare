import React from 'react';
import { Patient } from '../types';
import { Activity, Heart, ChevronRight } from 'lucide-react';

interface PatientCardProps {
  patient: Patient;
  onClick?: () => void;
}

export default function PatientCard({ patient, onClick }: PatientCardProps) {
  const statusColors = {
    Stable: 'bg-green-50 text-green-700 border-green-100',
    Critical: 'bg-red-50 text-red-700 border-red-100',
    Recovering: 'bg-amber-50 text-amber-700 border-amber-100'
  };

  return (
    <div 
      className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <img
          src={patient.image}
          alt={patient.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg text-secondary-900">{patient.name}</h3>
              <p className="text-sm text-secondary-500">ID: #{patient.id.padStart(6, '0')}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm border ${statusColors[patient.status]}`}>
              {patient.status}
            </span>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm text-secondary-600">
              <Activity className="w-4 h-4 text-primary-500" />
              <span>{patient.condition}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-secondary-600">
              <Heart className="w-4 h-4 text-red-500" />
              <span>72 BPM</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
            <div className="flex gap-4 text-sm">
              <span className="text-secondary-500">Last Visit: <span className="text-secondary-700">{patient.lastVisit}</span></span>
              <span className="text-secondary-500">Next: <span className="text-primary-600 font-medium">{patient.nextAppointment}</span></span>
            </div>
            <button className="text-primary-600 hover:text-primary-700">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}