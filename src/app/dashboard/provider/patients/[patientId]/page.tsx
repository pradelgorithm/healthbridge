'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Heart, 
  Activity, 
  Moon, 
  Droplets,
  Zap,
  TrendingUp,
  TrendingDown,
  Calendar,
  Settings,
  Bell,
  Download,
  Share,
  AlertTriangle,
  Check,
  Phone,
  Mail,
  MapPin,
  Shield,
  Plus
} from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

interface PatientDetailProps {
  params: Promise<{
    patientId: string;
  }>;
}

export default function PatientDetail({ params }: PatientDetailProps) {
  const resolvedParams = React.use(params);
  const [timeRange, setTimeRange] = useState('week');
  const [showNotes, setShowNotes] = useState(false);

  // Mock patient data
  const patient = {
    id: resolvedParams.patientId,
    name: 'John Doe',
    avatar: 'JD',
    age: 35,
    gender: 'Male',
    email: 'john.doe@email.com',
    phone: '(407) 555-0123',
    address: '123 Main St, Orlando, FL 32801',
    emergencyContact: 'Jane Doe (Spouse) - (407) 555-0124',
    lastSync: '2 minutes ago',
    dataPermissions: ['Heart Rate', 'Blood Pressure', 'Sleep', 'Activity', 'Weight'],
    upcomingAppointment: '2024-01-25 10:00 AM',
    lastVisit: '2024-01-10',
    conditions: ['Hypertension', 'Type 2 Diabetes'],
    medications: ['Lisinopril 10mg', 'Metformin 500mg'],
    allergies: ['Penicillin', 'Shellfish'],
    devices: ['Apple Watch Series 9', 'iPhone Health App', 'Omron Blood Pressure Monitor']
  };

  const healthMetrics = [
    {
      icon: <Heart className="w-6 h-6" />,
      label: 'Heart Rate',
      current: '72',
      unit: 'BPM',
      trend: 'stable',
      change: '+1%',
      status: 'normal',
      color: 'text-error',
      range: 'Normal (60-100)',
      lastReading: '2 min ago'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      label: 'Blood Pressure',
      current: '135/85',
      unit: 'mmHg',
      trend: 'up',
      change: '+5%',
      status: 'elevated',
      color: 'text-warning',
      range: 'Elevated (>130/80)',
      lastReading: '1 hour ago'
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      label: 'Blood Oxygen',
      current: '98',
      unit: '%',
      trend: 'stable',
      change: '0%',
      status: 'excellent',
      color: 'text-info',
      range: 'Excellent (95-100%)',
      lastReading: '2 min ago'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      label: 'Steps',
      current: '8,240',
      unit: 'steps',
      trend: 'up',
      change: '+15%',
      status: 'good',
      color: 'text-secondary',
      range: 'Above average',
      lastReading: '5 min ago'
    },
    {
      icon: <Moon className="w-6 h-6" />,
      label: 'Sleep Quality',
      current: '7.5',
      unit: 'hours',
      trend: 'down',
      change: '-0.5h',
      status: 'good',
      color: 'text-accent',
      range: 'Adequate (7-9h)',
      lastReading: 'Last night'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      label: 'Stress Level',
      current: 'Moderate',
      unit: '',
      trend: 'up',
      change: '+10%',
      status: 'attention',
      color: 'text-warning',
      range: 'Monitor closely',
      lastReading: '1 hour ago'
    }
  ];

  const recentAlerts = [
    {
      id: 'alert-001',
      type: 'warning',
      title: 'Elevated Blood Pressure',
      message: 'Blood pressure reading of 145/92 detected',
      timestamp: '1 hour ago',
      acknowledged: false
    },
    {
      id: 'alert-002',
      type: 'info',
      title: 'Missed Medication Reminder',
      message: 'Patient missed evening Lisinopril dose',
      timestamp: '6 hours ago',
      acknowledged: true
    }
  ];

  return (
    <div className="min-h-screen bg-base-100" data-theme="healthbridge">
      {/* Header */}
      <header className="navbar bg-base-100 border-b border-base-300">
        <div className="navbar-start">
          <Link href="/dashboard/provider" className="btn btn-ghost btn-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Patients
          </Link>
        </div>
        <div className="navbar-center">
          <Logo size="sm" />
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule
            </Button>
            <Button variant="primary" size="sm" onClick={() => setShowNotes(!showNotes)}>
              <Settings className="w-4 h-4 mr-2" />
              {showNotes ? 'Hide' : 'Show'} Notes
            </Button>
          </div>
        </div>
      </header>

      {/* Patient Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-base-300">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-6">
              <div className="avatar placeholder">
                <div className="bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full w-20 icon-center text-2xl font-bold">
                  {patient.avatar}
                </div>
              </div>
              
              <div>
                <h1 className="text-3xl font-bold text-base-content mb-2">
                  {patient.name}
                </h1>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-base-content/70">
                  <div className="flex items-center space-x-2">
                    <span>{patient.age} years old • {patient.gender}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{patient.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{patient.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{patient.address}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mt-4">
                  <div className="badge badge-success badge-sm">
                    Data Access Approved
                  </div>
                  <div className="badge badge-info badge-sm">
                    Last sync: {patient.lastSync}
                  </div>
                  {patient.upcomingAppointment && (
                    <div className="badge badge-primary badge-sm">
                      Next: {patient.upcomingAppointment}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Actions Menu */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-primary btn-sm">
                Quick Actions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-base-300">
                <li><a><Calendar className="w-4 h-4" />Schedule Appointment</a></li>
                <li><a><Bell className="w-4 h-4" />Set Alert Threshold</a></li>
                <li><a><Download className="w-4 h-4" />Generate Report</a></li>
                <li><a><Share className="w-4 h-4" />Share with Specialist</a></li>
                <li className="divider"></li>
                <li><a><Settings className="w-4 h-4" />Modify Access</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Time Range Selector */}
        <div className="flex justify-center mb-8">
          <div className="tabs tabs-boxed">
            <button 
              className={`tab ${timeRange === 'day' ? 'tab-active' : ''}`}
              onClick={() => setTimeRange('day')}
            >
              24 Hours
            </button>
            <button 
              className={`tab ${timeRange === 'week' ? 'tab-active' : ''}`}
              onClick={() => setTimeRange('week')}
            >
              7 Days
            </button>
            <button 
              className={`tab ${timeRange === 'month' ? 'tab-active' : ''}`}
              onClick={() => setTimeRange('month')}
            >
              30 Days
            </button>
            <button 
              className={`tab ${timeRange === 'year' ? 'tab-active' : ''}`}
              onClick={() => setTimeRange('year')}
            >
              1 Year
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Health Metrics */}
          <div className="lg:col-span-2">
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-6">
              <div className="card-body">
                <h2 className="card-title mb-6">
                  <Activity className="w-5 h-5 text-primary mr-2" />
                  Real-Time Health Metrics
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {healthMetrics.map((metric, index) => (
                    <div key={index} className="card bg-base-200 border border-base-300">
                      <div className="card-body p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="avatar placeholder">
                            <div className={`bg-base-100 ${metric.color} rounded-lg w-10 icon-center`}>
                              {metric.icon}
                            </div>
                          </div>
                          <div className={`badge ${
                            metric.trend === 'up' ? 'badge-error' : 
                            metric.trend === 'down' ? 'badge-success' : 'badge-neutral'
                          } badge-sm`}>
                            {metric.trend === 'up' ? (
                              <TrendingUp className="w-3 h-3 mr-1" />
                            ) : metric.trend === 'down' ? (
                              <TrendingDown className="w-3 h-3 mr-1" />
                            ) : (
                              <span className="w-3 h-3 mr-1">—</span>
                            )}
                            {metric.change}
                          </div>
                        </div>
                        
                        <h3 className="text-base-content/70 text-sm font-medium mb-1">
                          {metric.label}
                        </h3>
                        
                        <div className="flex items-baseline space-x-2 mb-2">
                          <span className="text-2xl font-bold text-base-content">
                            {metric.current}
                          </span>
                          <span className="text-base-content/60 text-sm">
                            {metric.unit}
                          </span>
                        </div>
                        
                        <div className="text-xs">
                          <div className={`font-medium ${
                            metric.status === 'excellent' ? 'text-success' :
                            metric.status === 'good' || metric.status === 'normal' ? 'text-info' :
                            metric.status === 'elevated' || metric.status === 'attention' ? 'text-warning' :
                            'text-error'
                          }`}>
                            {metric.range}
                          </div>
                          <div className="text-base-content/60 mt-1">
                            Last: {metric.lastReading}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Alerts & Notifications */}
            <div className="card bg-base-100 shadow-lg border border-base-300">
              <div className="card-body">
                <h2 className="card-title">
                  <Bell className="w-5 h-5 text-warning mr-2" />
                  Recent Alerts & Notifications
                </h2>
                
                <div className="space-y-3">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className={`alert ${
                      alert.type === 'warning' ? 'alert-warning' : 'alert-info'
                    }`}>
                      <AlertTriangle className="w-5 h-5" />
                      <div className="flex-1">
                        <div className="font-semibold">{alert.title}</div>
                        <div className="text-sm">{alert.message}</div>
                        <div className="text-xs opacity-70">{alert.timestamp}</div>
                      </div>
                      {!alert.acknowledged && (
                        <Button variant="ghost" size="xs">
                          <Check className="w-4 h-4" />
                          Acknowledge
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Patient Info Sidebar */}
          <div className="space-y-6">
            {/* Patient Summary */}
            <div className="card bg-base-100 shadow-lg border border-base-300">
              <div className="card-body p-4">
                <h3 className="card-title text-base mb-4">Patient Summary</h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold">Last Visit:</span>
                    <span className="ml-2">{patient.lastVisit}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Emergency Contact:</span>
                    <span className="ml-2">{patient.emergencyContact}</span>
                  </div>
                  
                  <div className="divider my-2"></div>
                  
                  <div>
                    <span className="font-semibold mb-2 block">Conditions:</span>
                    <div className="flex flex-wrap gap-1">
                      {patient.conditions.map((condition, index) => (
                        <div key={index} className="badge badge-error badge-xs">
                          {condition}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="font-semibold mb-2 block">Medications:</span>
                    <div className="space-y-1">
                      {patient.medications.map((medication, index) => (
                        <div key={index} className="text-xs bg-base-200 p-2 rounded">
                          {medication}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="font-semibold mb-2 block">Allergies:</span>
                    <div className="flex flex-wrap gap-1">
                      {patient.allergies.map((allergy, index) => (
                        <div key={index} className="badge badge-warning badge-xs">
                          {allergy}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connected Devices */}
            <div className="card bg-base-100 shadow-lg border border-base-300">
              <div className="card-body p-4">
                <h3 className="card-title text-base mb-4">
                  <Shield className="w-4 h-4 mr-2" />
                  Connected Devices
                </h3>
                
                <div className="space-y-2">
                  {patient.devices.map((device, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-base-200 rounded">
                      <span className="text-sm">{device}</span>
                      <div className="badge badge-success badge-xs">Active</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Permissions */}
            <div className="card bg-base-100 shadow-lg border border-base-300">
              <div className="card-body p-4">
                <h3 className="card-title text-base mb-4">
                  <Shield className="w-4 h-4 mr-2" />
                  Data Access Permissions
                </h3>
                
                <div className="space-y-2">
                  {patient.dataPermissions.map((permission, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-3 h-3 text-success" />
                      <span className="text-sm">{permission}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-xs text-base-content/60">
                  Access granted until: {patient.upcomingAppointment}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Notes (Collapsible) */}
        {showNotes && (
          <div className="card bg-base-100 shadow-lg border border-base-300 mt-8">
            <div className="card-body">
              <h2 className="card-title">
                <Settings className="w-5 h-5 text-accent mr-2" />
                Clinical Notes & Observations
              </h2>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Add Clinical Note</span>
                </label>
                <textarea 
                  className="textarea textarea-bordered" 
                  placeholder="Enter clinical observations, treatment notes, or recommendations..."
                  rows={4}
                ></textarea>
              </div>
              
              <div className="flex justify-end mt-4">
                <Button variant="primary" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Save Note
                </Button>
              </div>

              {/* Previous Notes */}
              <div className="divider">Previous Notes</div>
              
              <div className="space-y-3">
                <div className="card bg-base-200">
                  <div className="card-body p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Blood Pressure Management</span>
                      <span className="text-xs text-base-content/60">Jan 10, 2024</span>
                    </div>
                    <p className="text-sm text-base-content/70">
                      Patient showing improvement with current medication regimen. 
                      Continue monitoring daily readings. Consider lifestyle modifications.
                    </p>
                  </div>
                </div>
                
                <div className="card bg-base-200">
                  <div className="card-body p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Diabetes Follow-up</span>
                      <span className="text-xs text-base-content/60">Dec 15, 2023</span>
                    </div>
                    <p className="text-sm text-base-content/70">
                      HbA1c levels stable at 6.8%. Patient compliance with medication excellent. 
                      Recommend continued monitoring and dietary counseling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
