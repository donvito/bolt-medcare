import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Stats from './components/Stats';
import PatientCard from './components/PatientCard';
import AppointmentList from './components/AppointmentList';
import Patients from './pages/Patients';
import Appointments from './pages/Appointments';
import Vitals from './pages/Vitals';
import Medications from './pages/Medications';
import Records from './pages/Records';
import Settings from './pages/Settings';
import PatientDetail from './pages/PatientDetail';
import { patients, appointments } from './data';
import { Search, Bell, Filter } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'patients' | 'appointments' | 'vitals' | 'medications' | 'records' | 'settings' | 'patient-detail'>('dashboard');
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);

  const handlePatientClick = (patient: typeof patients[0]) => {
    setSelectedPatient(patient);
    setCurrentPage('patient-detail');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'patient-detail':
        return (
          <PatientDetail 
            patient={selectedPatient} 
            onBack={() => setCurrentPage('patients')} 
          />
        );
      case 'patients':
        return <Patients onPatientClick={handlePatientClick} />;
      case 'appointments':
        return <Appointments />;
      case 'vitals':
        return <Vitals />;
      case 'medications':
        return <Medications />;
      case 'records':
        return <Records />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <div className="p-8">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-secondary-900">Dashboard</h1>
                  <p className="text-secondary-600">Welcome back, Dr. Smith</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search patients..."
                      className="w-72 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <Search className="w-5 h-5 text-secondary-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                  
                  <button className="p-2 hover:bg-gray-100 rounded-lg text-secondary-600">
                    <Filter className="w-5 h-5" />
                  </button>
                  
                  <button className="relative p-2 hover:bg-gray-100 rounded-lg text-secondary-600">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                </div>
              </div>

              {/* Stats */}
              <Stats />

              {/* Main Content */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-secondary-900">Recent Patients</h2>
                    <button 
                      onClick={() => setCurrentPage('patients')}
                      className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                    >
                      View All
                    </button>
                  </div>
                  {patients.slice(0, 3).map(patient => (
                    <PatientCard 
                      key={patient.id} 
                      patient={patient}
                      onClick={() => handlePatientClick(patient)}
                    />
                  ))}
                </div>
                
                <div>
                  <AppointmentList appointments={appointments} />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar onNavigate={(page) => setCurrentPage(page as any)} currentPage={currentPage} />
      <main className="flex-1">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;