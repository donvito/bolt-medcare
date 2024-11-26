import { Patient, Appointment, Medication, Record } from './types';

export const patients: Patient[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    age: 45,
    gender: 'Female',
    condition: 'Hypertension',
    lastVisit: '2024-03-10',
    nextAppointment: '2024-03-25',
    status: 'Stable',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '2',
    name: 'Michael Chen',
    age: 62,
    gender: 'Male',
    condition: 'Diabetes Type 2',
    lastVisit: '2024-03-15',
    nextAppointment: '2024-03-28',
    status: 'Critical',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '3',
    name: 'Emily Davis',
    age: 28,
    gender: 'Female',
    condition: 'Post-surgery Recovery',
    lastVisit: '2024-03-18',
    nextAppointment: '2024-03-30',
    status: 'Recovering',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const appointments: Appointment[] = [
  {
    id: '1',
    patientName: 'Sarah Johnson',
    time: '09:00 AM',
    type: 'Follow-up',
    status: 'Scheduled'
  },
  {
    id: '2',
    patientName: 'Michael Chen',
    time: '10:30 AM',
    type: 'Emergency',
    status: 'In Progress'
  },
  {
    id: '3',
    patientName: 'Emily Davis',
    time: '02:00 PM',
    type: 'Check-up',
    status: 'Completed'
  }
];

export const patientMedications: Record<string, Medication[]> = {
  '1': [
    {
      id: '1',
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      startDate: '2024-01-15',
      endDate: '2024-04-15',
      status: 'Active',
      prescribedBy: 'Dr. Smith'
    },
    {
      id: '2',
      name: 'Aspirin',
      dosage: '81mg',
      frequency: 'Once daily',
      startDate: '2024-02-01',
      endDate: '2024-05-01',
      status: 'Active',
      prescribedBy: 'Dr. Smith'
    }
  ],
  '2': [
    {
      id: '3',
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      startDate: '2024-01-10',
      endDate: '2024-07-10',
      status: 'Active',
      prescribedBy: 'Dr. Johnson'
    },
    {
      id: '4',
      name: 'Glipizide',
      dosage: '5mg',
      frequency: 'Once daily',
      startDate: '2024-02-15',
      endDate: '2024-05-15',
      status: 'Active',
      prescribedBy: 'Dr. Johnson'
    }
  ],
  '3': [
    {
      id: '5',
      name: 'Ibuprofen',
      dosage: '400mg',
      frequency: 'As needed',
      startDate: '2024-03-18',
      endDate: '2024-03-25',
      status: 'Active',
      prescribedBy: 'Dr. Wilson'
    },
    {
      id: '6',
      name: 'Amoxicillin',
      dosage: '500mg',
      frequency: 'Three times daily',
      startDate: '2024-03-18',
      endDate: '2024-03-25',
      status: 'Active',
      prescribedBy: 'Dr. Wilson'
    }
  ]
};

export const patientRecords: Record<string, Record[]> = {
  '1': [
    {
      id: '1',
      title: 'Blood Pressure Reading',
      type: 'Vital Signs',
      date: '2024-03-15',
      department: 'Cardiology',
      status: 'Final',
      content: 'BP: 120/80 mmHg'
    },
    {
      id: '2',
      title: 'ECG Report',
      type: 'Diagnostic',
      date: '2024-03-10',
      department: 'Cardiology',
      status: 'Final',
      content: 'Normal sinus rhythm'
    }
  ],
  '2': [
    {
      id: '3',
      title: 'Blood Sugar Log',
      type: 'Lab Report',
      date: '2024-03-15',
      department: 'Endocrinology',
      status: 'Final',
      content: 'Fasting: 126 mg/dL'
    },
    {
      id: '4',
      title: 'HbA1c Test',
      type: 'Lab Report',
      date: '2024-03-01',
      department: 'Endocrinology',
      status: 'Final',
      content: '7.2%'
    }
  ],
  '3': [
    {
      id: '5',
      title: 'Post-Surgery Report',
      type: 'Surgical Notes',
      date: '2024-03-18',
      department: 'Surgery',
      status: 'Final',
      content: 'Procedure completed successfully'
    },
    {
      id: '6',
      title: 'Physical Therapy Plan',
      type: 'Treatment Plan',
      date: '2024-03-19',
      department: 'Physical Therapy',
      status: 'Final',
      content: '6-week rehabilitation program'
    }
  ]
};