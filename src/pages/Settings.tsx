import React from 'react';
import { User, Bell, Shield, Key, Globe, Palette, HelpCircle, Mail } from 'lucide-react';

export default function Settings() {
  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-secondary-900">Settings</h1>
          <p className="text-secondary-600">Manage your account and application preferences</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200">
          {/* Profile Section */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=120&h=120"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-100"
              />
              <div>
                <h2 className="text-xl font-semibold text-secondary-900">Dr. Sarah Smith</h2>
                <p className="text-secondary-600">Cardiologist</p>
                <button className="mt-2 text-sm text-primary-600 hover:text-primary-700 font-medium">
                  Change Profile Photo
                </button>
              </div>
            </div>
          </div>

          {/* Settings Sections */}
          <div className="divide-y divide-gray-200">
            {[
              {
                icon: User,
                title: 'Personal Information',
                description: 'Update your personal details and information',
                fields: [
                  { label: 'Full Name', value: 'Dr. Sarah Smith', type: 'text' },
                  { label: 'Email', value: 'sarah.smith@hospital.com', type: 'email' },
                  { label: 'Phone', value: '+1 (555) 123-4567', type: 'tel' },
                  { label: 'Department', value: 'Cardiology', type: 'text' }
                ]
              },
              {
                icon: Bell,
                title: 'Notifications',
                description: 'Configure how you receive notifications',
                options: [
                  { label: 'Email Notifications', checked: true },
                  { label: 'Push Notifications', checked: true },
                  { label: 'SMS Alerts', checked: false },
                  { label: 'Critical Patient Updates', checked: true }
                ]
              },
              {
                icon: Shield,
                title: 'Privacy & Security',
                description: 'Manage your security preferences and data privacy',
                options: [
                  { label: 'Two-Factor Authentication', checked: true },
                  { label: 'Login Alerts', checked: true },
                  { label: 'Data Sharing', checked: false }
                ]
              }
            ].map((section) => (
              <div key={section.title} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-50 rounded-lg">
                    <section.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">{section.title}</h3>
                    <p className="text-sm text-secondary-600">{section.description}</p>
                  </div>
                </div>

                {'fields' in section ? (
                  <div className="space-y-4">
                    {section.fields.map((field) => (
                      <div key={field.label}>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          defaultValue={field.value}
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    ))}
                    <button className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                      Save Changes
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {section.options.map((option) => (
                      <label key={option.label} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                        />
                        <span className="text-secondary-900">{option.label}</span>
                      </label>
                    ))}
                    <button className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                      Save Preferences
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: HelpCircle, title: 'Help Center', description: 'Get help and support' },
            { icon: Mail, title: 'Contact Support', description: 'Reach out to our team' },
            { icon: Globe, title: 'Language', description: 'Change your language' },
            { icon: Palette, title: 'Appearance', description: 'Customize the interface' }
          ].map((link) => (
            <button
              key={link.title}
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="p-2 bg-primary-50 rounded-lg">
                <link.icon className="w-5 h-5 text-primary-600" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-secondary-900">{link.title}</h3>
                <p className="text-sm text-secondary-600">{link.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}