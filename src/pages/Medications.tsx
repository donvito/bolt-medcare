import React from 'react';
import { Pill, Search, Filter, Plus, AlertCircle, Clock, RefreshCcw } from 'lucide-react';

const medications = [
  {
    id: '1',
    name: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    patient: 'Sarah Johnson',
    status: 'Active',
    startDate: '2024-02-15',
    endDate: '2024-05-15',
    prescribedBy: 'Dr. Smith',
    lastRefill: '2024-03-01',
    nextRefill: '2024-04-01'
  },
  {
    id: '2',
    name: 'Metformin',
    dosage: '500mg',
    frequency: 'Twice daily',
    patient: 'Michael Chen',
    status: 'Active',
    startDate: '2024-01-10',
    endDate: '2024-07-10',
    prescribedBy: 'Dr. Smith',
    lastRefill: '2024-03-05',
    nextRefill: '2024-04-05'
  },
  {
    id: '3',
    name: 'Ibuprofen',
    dosage: '400mg',
    frequency: 'As needed',
    patient: 'Emily Davis',
    status: 'Completed',
    startDate: '2024-03-01',
    endDate: '2024-03-15',
    prescribedBy: 'Dr. Smith',
    lastRefill: '2024-03-01',
    nextRefill: null
  }
];

export default function Medications() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900">Medications</h1>
            <p className="text-secondary-600">Manage patient prescriptions and medications</p>
          </div>

          <div className="flex gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-secondary-600 hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
              <Plus className="w-4 h-4" />
              <span>New Prescription</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Active Prescriptions', value: '156', icon: Pill, trend: '+3 this week' },
            { label: 'Pending Refills', value: '28', icon: RefreshCcw, trend: '12 due this week' },
            { label: 'Expiring Soon', value: '15', icon: AlertCircle, trend: 'Next 30 days' }
          ].map(({ label, value, icon: Icon, trend }) => (
            <div key={label} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary-50 rounded-lg">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
                <span className="text-secondary-600">{label}</span>
              </div>
              <p className="text-2xl font-semibold text-secondary-900">{value}</p>
              <p className="text-sm text-secondary-500 mt-1">{trend}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search medications..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              <select className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="discontinued">Discontinued</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Medication</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dosage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Frequency</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Next Refill</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {medications.map((med) => (
                  <tr key={med.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-secondary-900">{med.name}</div>
                      <div className="text-sm text-secondary-500">ID: #{med.id.padStart(6, '0')}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary-900">{med.patient}</td>
                    <td className="px-6 py-4 text-sm text-secondary-900">{med.dosage}</td>
                    <td className="px-6 py-4 text-sm text-secondary-900">{med.frequency}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        med.status === 'Active'
                          ? 'bg-green-50 text-green-700 border border-green-100'
                          : 'bg-gray-50 text-gray-700 border border-gray-100'
                      }`}>
                        {med.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary-900">
                      {med.nextRefill || 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}