export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  condition: string;
  lastVisit: string;
  nextAppointment: string;
  status: 'Stable' | 'Critical' | 'Recovering';
  image: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  time: string;
  type: string;
  status: 'Scheduled' | 'In Progress' | 'Completed';
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Completed' | 'Discontinued';
  prescribedBy: string;
}

export interface Record {
  id: string;
  title: string;
  type: string;
  date: string;
  department: string;
  status: 'Final' | 'Preliminary';
  content: string;
}