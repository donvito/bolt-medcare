import React from 'react';
import { FileText, Search, Filter, Download, Upload, Clock, Tag, Folder } from 'lucide-react';

const records = [
  {
    id: '1',
    title: 'Blood Test Results',
    patient: 'Sarah Johnson',
    type: 'Lab Report',
    date: '2024-03-15',
    department: 'Hematology',
    size: '2.4 MB',
    status: 'Final'
  },
  {
    id: '2',
    title: 'X-Ray Report',
    patient: 'Michael Chen',
    type: 'Radiology',
    date: '2024-03-14',
    department: 'Radiology',
    size: '8.1 MB',
    status: 'Preliminary'
  },
  {
    id: '3',
    title: 'Post-Surgery Notes',
    patient: 'Emily Davis',
    type: 'Clinical Notes',
    date: '2024-03-13',
    department: 'Surgery',
    size: '1.1 MB',
    status: 'Final'
  }
];

export default function Records() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900">Medical Records</h1>
            <p className="text-secondary-600">Access and manage patient medical records</p>
          </div>

          <div className="flex gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-secondary-600 hover:bg-gray-50">
              <Upload className="w-4 h-4" />
              <span>Upload</span>
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-secondary-600 hover:bg-gray-50">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Records', value: '1,234', icon: FileText, trend: '+28 this month' },
            { label: 'Recent Uploads', value: '48', icon: Upload, trend: 'Last 7 days' },
            { label: 'Pending Review', value: '12', icon: Clock, trend: 'Requires attention' },
            { label: 'Categories', value: '8', icon: Tag, trend: 'Active categories' }
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h2 className="font-semibold text-secondary-900 mb-4">Categories</h2>
              <div className="space-y-2">
                {[
                  { name: 'Lab Reports', count: 156 },
                  { name: 'Clinical Notes', count: 89 },
                  { name: 'Radiology', count: 64 },
                  { name: 'Prescriptions', count: 212 },
                  { name: 'Surgery Records', count: 45 },
                  { name: 'Discharge Summaries', count: 78 }
                ].map(category => (
                  <button
                    key={category.name}
                    className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-50 text-left"
                  >
                    <div className="flex items-center gap-2">
                      <Folder className="w-4 h-4 text-secondary-400" />
                      <span className="text-secondary-900">{category.name}</span>
                    </div>
                    <span className="text-sm text-secondary-500">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Records List */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search records..."
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                  <select className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option value="all">All Types</option>
                    <option value="lab">Lab Reports</option>
                    <option value="clinical">Clinical Notes</option>
                    <option value="radiology">Radiology</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {records.map((record) => (
                      <tr key={record.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-secondary-400" />
                            <div>
                              <div className="text-sm font-medium text-secondary-900">{record.title}</div>
                              <div className="text-sm text-secondary-500">{record.department}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-secondary-900">{record.patient}</td>
                        <td className="px-6 py-4 text-sm text-secondary-900">{record.type}</td>
                        <td className="px-6 py-4 text-sm text-secondary-900">{record.date}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            record.status === 'Final'
                              ? 'bg-green-50 text-green-700 border border-green-100'
                              : 'bg-amber-50 text-amber-700 border border-amber-100'
                          }`}>
                            {record.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}