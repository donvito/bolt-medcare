import React, { useState } from 'react';
import { Heart, Activity, Thermometer, Droplets, Clock, TrendingUp, Download, ChevronDown, User } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { patients } from '../data';

const vitalHistory = {
  '1': [
    { time: '08:00', heartRate: 72, bloodPressure: 120, temperature: 37.1, oxygenLevel: 98 },
    { time: '10:00', heartRate: 75, bloodPressure: 122, temperature: 37.0, oxygenLevel: 97 },
    { time: '12:00', heartRate: 78, bloodPressure: 125, temperature: 37.2, oxygenLevel: 98 },
    { time: '14:00', heartRate: 73, bloodPressure: 118, temperature: 37.1, oxygenLevel: 99 },
    { time: '16:00', heartRate: 70, bloodPressure: 115, temperature: 37.0, oxygenLevel: 98 },
  ],
  '2': [
    { time: '08:00', heartRate: 82, bloodPressure: 130, temperature: 37.3, oxygenLevel: 96 },
    { time: '10:00', heartRate: 85, bloodPressure: 132, temperature: 37.4, oxygenLevel: 95 },
    { time: '12:00', heartRate: 88, bloodPressure: 135, temperature: 37.5, oxygenLevel: 94 },
    { time: '14:00', heartRate: 83, bloodPressure: 128, temperature: 37.3, oxygenLevel: 95 },
    { time: '16:00', heartRate: 80, bloodPressure: 125, temperature: 37.2, oxygenLevel: 96 },
  ]
};

export default function Vitals() {
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);
  const [isPatientDropdownOpen, setIsPatientDropdownOpen] = useState(false);
  const [timeRange, setTimeRange] = useState('24h');

  const vitalData = vitalHistory[selectedPatient.id] || vitalHistory['1'];

  const currentVitals = {
    heartRate: vitalData[vitalData.length - 1].heartRate,
    bloodPressure: vitalData[vitalData.length - 1].bloodPressure,
    temperature: vitalData[vitalData.length - 1].temperature,
    oxygenLevel: vitalData[vitalData.length - 1].oxygenLevel,
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900">Patient Vitals</h1>
            <p className="text-secondary-600">Monitor real-time vital signs</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Patient Selector */}
            <div className="relative">
              <button
                onClick={() => setIsPatientDropdownOpen(!isPatientDropdownOpen)}
                className="flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <img
                  src={selectedPatient.image}
                  alt={selectedPatient.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-secondary-900">{selectedPatient.name}</p>
                  <p className="text-xs text-secondary-500">ID: #{selectedPatient.id.padStart(6, '0')}</p>
                </div>
                <ChevronDown className="w-4 h-4 text-secondary-400" />
              </button>

              {isPatientDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <div className="p-2">
                    {patients.map(patient => (
                      <button
                        key={patient.id}
                        onClick={() => {
                          setSelectedPatient(patient);
                          setIsPatientDropdownOpen(false);
                        }}
                        className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg"
                      >
                        <img
                          src={patient.image}
                          alt={patient.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="text-left">
                          <p className="text-sm font-medium text-secondary-900">{patient.name}</p>
                          <p className="text-xs text-secondary-500">ID: #{patient.id.padStart(6, '0')}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Time Range Selector */}
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>

            <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-secondary-600 hover:bg-gray-50">
              <Download className="w-4 h-4" />
              <span>Export Data</span>
            </button>
          </div>
        </div>

        {/* Patient Info Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-8">
          <div className="flex items-center gap-4">
            <img
              src={selectedPatient.image}
              alt={selectedPatient.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
            />
            <div>
              <h2 className="text-xl font-semibold text-secondary-900">{selectedPatient.name}</h2>
              <p className="text-secondary-600">
                {selectedPatient.age} years • {selectedPatient.gender} • {selectedPatient.condition}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  selectedPatient.status === 'Stable'
                    ? 'bg-green-50 text-green-700'
                    : selectedPatient.status === 'Critical'
                    ? 'bg-red-50 text-red-700'
                    : 'bg-amber-50 text-amber-700'
                }`}>
                  {selectedPatient.status}
                </span>
                <span className="text-sm text-secondary-500">Last updated: 5 minutes ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { 
              label: 'Heart Rate',
              value: currentVitals.heartRate,
              unit: 'BPM',
              icon: Heart,
              color: 'text-red-500',
              bg: 'bg-red-50',
              trend: '+2 from last reading'
            },
            {
              label: 'Blood Pressure',
              value: currentVitals.bloodPressure,
              unit: 'mmHg',
              icon: Activity,
              color: 'text-primary-500',
              bg: 'bg-primary-50',
              trend: 'Stable'
            },
            {
              label: 'Body Temperature',
              value: currentVitals.temperature,
              unit: '°C',
              icon: Thermometer,
              color: 'text-amber-500',
              bg: 'bg-amber-50',
              trend: '+0.1 from last reading'
            },
            {
              label: 'Oxygen Level',
              value: currentVitals.oxygenLevel,
              unit: '%',
              icon: Droplets,
              color: 'text-blue-500',
              bg: 'bg-blue-50',
              trend: 'Normal range'
            }
          ].map(({ label, value, unit, icon: Icon, color, bg, trend }) => (
            <div key={label} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-secondary-600 text-sm">{label}</span>
                <div className={`${bg} p-2 rounded-lg`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-secondary-900">{value}</span>
                <span className="text-secondary-600">{unit}</span>
              </div>
              <p className="text-sm text-secondary-500 mt-2">{trend}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Heart Rate Chart */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-semibold text-secondary-900">Heart Rate</h2>
                <p className="text-sm text-secondary-500">24-hour monitoring</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-secondary-400" />
                <span className="text-secondary-600">Real-time</span>
              </div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={vitalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="heartRate" 
                    stroke="#ef4444" 
                    strokeWidth={2}
                    dot={{ fill: '#ef4444' }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Blood Pressure Chart */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-semibold text-secondary-900">Blood Pressure</h2>
                <p className="text-sm text-secondary-500">Systolic & Diastolic</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-secondary-400" />
                <span className="text-secondary-600">Trending</span>
              </div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={vitalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="bloodPressure" 
                    stroke="#0ea5e9" 
                    strokeWidth={2}
                    dot={{ fill: '#0ea5e9' }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}