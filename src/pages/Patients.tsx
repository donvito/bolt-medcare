import React from 'react';
import { Users, UserPlus, Download, Upload } from 'lucide-react';
import PatientTable from '../components/PatientTable';
import { patients } from '../data';
import { Patient } from '../types';

interface PatientsProps {
  onPatientClick?: (patient: Patient) => void;
}

export default function Patients({ onPatientClick }: PatientsProps) {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900">Patients</h1>
            <p className="text-secondary-600">Manage and view patient records</p>
          </div>
          
          <div className="flex gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-secondary-600 hover:bg-gray-50">
              <Upload className="w-4 h-4" />
              <span>Import</span>
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-secondary-600 hover:bg-gray-50">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
              <UserPlus className="w-4 h-4" />
              <span>Add Patient</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Patients', value: '1,234', trend: '+12% from last month' },
            { label: 'New Patients', value: '89', trend: '+7% from last month' },
            { label: 'Critical Cases', value: '28', trend: '-3% from last month' },
            { label: 'Scheduled Today', value: '42', trend: 'Same as yesterday' }
          ].map(({ label, value, trend }) => (
            <div key={label} className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="text-sm text-secondary-600">{label}</p>
              <p className="text-2xl font-semibold text-secondary-900 mt-1">{value}</p>
              <p className="text-xs text-secondary-500 mt-1">{trend}</p>
            </div>
          ))}
        </div>

        <PatientTable patients={patients} onPatientClick={onPatientClick} />
      </div>
    </div>
  );
}