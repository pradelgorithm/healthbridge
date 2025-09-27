'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Filter, 
  Bell, 
  Settings, 
  LogOut, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  Heart,
  Activity,
  Clock,
  Shield,
  Plus,
  BarChart3,
  Calendar,
  Download,
  Check
} from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

export default function ProviderDashboard() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddPatientModal, setShowAddPatientModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Mock provider data
  const providerInfo = {
    name: 'Dr. Sarah Johnson',
    practice: 'Orlando Family Medicine',
    practiceId: 'OFM-001',
    patients: 127,
    activeAlerts: 3
  };

  // Mock patient data
  const patients = [
    {
      id: '1',
      name: 'John Doe',
      avatar: 'JD',
      age: 35,
      lastSync: '2 min ago',
      status: 'normal',
      alerts: 0,
      devices: ['Apple Watch', 'iPhone Health'],
      recentMetrics: {
        heartRate: 72,
        bloodPressure: '120/80',
        steps: 8240,
        lastVisit: '2024-01-10'
      },
      riskLevel: 'low'
    },
    {
      id: '2',
      name: 'Mary Smith',
      avatar: 'MS',
      age: 42,
      lastSync: '5 min ago',
      status: 'warning',
      alerts: 1,
      devices: ['Fitbit', 'Samsung Health'],
      recentMetrics: {
        heartRate: 88,
        bloodPressure: '140/90',
        steps: 6420,
        lastVisit: '2024-01-08'
      },
      riskLevel: 'medium'
    },
    {
      id: '3',
      name: 'Robert Johnson',
      avatar: 'RJ',
      age: 68,
      lastSync: '1 hour ago',
      status: 'critical',
      alerts: 2,
      devices: ['Apple Watch', 'Blood Pressure Monitor', 'Glucose Monitor'],
      recentMetrics: {
        heartRate: 95,
        bloodPressure: '160/95',
        steps: 2840,
        lastVisit: '2024-01-12'
      },
      riskLevel: 'high'
    },
    {
      id: '4',
      name: 'Lisa Williams',
      avatar: 'LW',
      age: 29,
      lastSync: '10 min ago',
      status: 'excellent',
      alerts: 0,
      devices: ['Garmin', 'Oura Ring'],
      recentMetrics: {
        heartRate: 65,
        bloodPressure: '110/70',
        steps: 12840,
        lastVisit: '2024-01-05'
      },
      riskLevel: 'low'
    },
    {
      id: '5',
      name: 'David Brown',
      avatar: 'DB',
      age: 55,
      lastSync: '30 min ago',
      status: 'normal',
      alerts: 0,
      devices: ['Whoop', 'Apple Health'],
      recentMetrics: {
        heartRate: 78,
        bloodPressure: '125/82',
        steps: 7240,
        lastVisit: '2024-01-15'
      },
      riskLevel: 'low'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'excellent': return 'badge-success';
      case 'normal': return 'badge-info';
      case 'warning': return 'badge-warning';
      case 'critical': return 'badge-error';
      default: return 'badge-neutral';
    }
  };


  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || patient.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  // Mock alerts for provider
  const [providerAlerts, setProviderAlerts] = useState([
    {
      id: 'p-alert-001',
      patientId: '3',
      patientName: 'Robert Johnson',
      type: 'critical',
      title: 'Critical Blood Pressure Reading',
      message: 'Blood pressure reading of 180/110 mmHg detected',
      timestamp: '5 min ago',
      acknowledged: false
    },
    {
      id: 'p-alert-002',
      patientId: '2', 
      patientName: 'Mary Smith',
      type: 'warning',
      title: 'Missed Medication',
      message: 'Patient missed morning medication dose',
      timestamp: '2 hours ago',
      acknowledged: false
    }
  ]);

  const handleAddPatient = (patientData: { name: string }) => {
    setToastMessage(`Patient ${patientData.name} added successfully`);
    setShowToast(true);
    setShowAddPatientModal(false);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleAcknowledgeAlert = (alertId: string) => {
    setProviderAlerts(prev => 
      prev.map(alert => 
        alert.id === alertId ? { ...alert, acknowledged: true } : alert
      )
    );
    setToastMessage('Alert acknowledged');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleGenerateReport = () => {
    setToastMessage('Report generated successfully');
    setShowToast(true);
    setShowReportModal(false);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSignOut = () => {
    // Mock sign out logic
    setToastMessage('Signing out...');
    setShowToast(true);
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-base-100" data-theme="healthbridge">
      {/* Header */}
      <header className="navbar bg-base-100 border-b border-base-300">
        <div className="navbar-start">
          <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <Logo size="sm" />
        </div>
        <div className="navbar-center">
          <div className="text-center">
            <h1 className="font-semibold text-base-content">Provider Dashboard</h1>
            <p className="text-xs text-base-content/60">{providerInfo.practice}</p>
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-2">
            {/* Alerts */}
            <div className="indicator">
              <span className="indicator-item badge badge-error badge-xs">{providerInfo.activeAlerts}</span>
              <button className="btn btn-ghost btn-circle btn-sm">
                <Bell className="w-5 h-5" />
              </button>
            </div>
            
            {/* Profile Menu */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
                <div className="avatar placeholder">
                  <div className="bg-secondary text-secondary-content rounded-full w-8 icon-center text-xs font-bold">
                    SJ
                  </div>
                </div>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-base-300">
                <li><a><Settings className="w-4 h-4" />Account Settings</a></li>
                <li><a><Shield className="w-4 h-4" />Practice Settings</a></li>
                <li><a onClick={handleSignOut} className="text-error"><LogOut className="w-4 h-4" />Sign Out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="drawer lg:drawer-open">
        <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
        
        {/* Drawer Sidebar */}
        <div className="drawer-side">
          <label htmlFor="drawer-toggle" aria-label="close sidebar" className="drawer-overlay"></label>
          <aside className="min-h-full w-64 bg-base-200 border-r border-base-300">
            {/* Sidebar Header */}
            <div className="p-4 border-b border-base-300">
              <div className="flex items-center space-x-3">
                <div className="avatar placeholder">
                  <div className="bg-secondary text-secondary-content rounded-full w-10 icon-center text-sm font-bold">
                    SJ
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-base-content">{providerInfo.name}</h3>
                  <p className="text-xs text-base-content/60">{providerInfo.practice}</p>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <ul className="menu p-4 space-y-2">
              <li>
                <a className="active">
                  <BarChart3 className="w-5 h-5" />
                  Dashboard
                </a>
              </li>
              <li>
                <a>
                  <Users className="w-5 h-5" />
                  Patients
                  <div className="badge badge-primary badge-sm">{providerInfo.patients}</div>
                </a>
              </li>
              <li>
                <a onClick={() => setShowAlertModal(true)}>
                  <AlertTriangle className="w-5 h-5" />
                  Alerts
                  <div className="badge badge-error badge-sm">{providerInfo.activeAlerts}</div>
                </a>
              </li>
              <li>
                <details open>
                  <summary>
                    <Activity className="w-5 h-5" />
                    Analytics
                  </summary>
                  <ul>
                    <li><a>Population Health</a></li>
                    <li><a>Trend Analysis</a></li>
                    <li><a>Custom Reports</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    <Shield className="w-5 h-5" />
                    Integrations
                  </summary>
                  <ul>
                    <li><Link href="/integrations">Device Connections</Link></li>
                    <li><a>EHR Systems</a></li>
                    <li><a>API Management</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <a>
                  <Calendar className="w-5 h-5" />
                  Appointments
                </a>
              </li>
              <li>
                <a>
                  <Settings className="w-5 h-5" />
                  Settings
                </a>
              </li>
            </ul>

            {/* Practice Info */}
            <div className="p-4 border-t border-base-300 mt-auto">
              <div className="card bg-base-100 shadow-sm">
                <div className="card-body p-3">
                  <h4 className="text-sm font-semibold mb-2">Practice Status</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span>License</span>
                      <div className="badge badge-success badge-xs">Active</div>
                    </div>
                    <div className="flex justify-between">
                      <span>HIPAA</span>
                      <div className="badge badge-success badge-xs">Compliant</div>
                    </div>
                    <div className="flex justify-between">
                      <span>Backup</span>
                      <div className="badge badge-info badge-xs">Daily</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Main Content */}
        <div className="drawer-content">
          <main className="p-8">
        {/* Dashboard Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="stat bg-base-100 border border-base-300 rounded-box">
            <div className="stat-figure text-primary">
              <Users className="w-8 h-8" />
            </div>
            <div className="stat-title">Total Patients</div>
            <div className="stat-value text-primary">{providerInfo.patients}</div>
            <div className="stat-desc">Active monitoring</div>
          </div>
          
          <div className="stat bg-base-100 border border-base-300 rounded-box">
            <div className="stat-figure text-error">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div className="stat-title">Active Alerts</div>
            <div className="stat-value text-error">{providerInfo.activeAlerts}</div>
            <div className="stat-desc">Require attention</div>
          </div>
          
          <div className="stat bg-base-100 border border-base-300 rounded-box">
            <div className="stat-figure text-success">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div className="stat-title">Data Points Today</div>
            <div className="stat-value text-success">12.4k</div>
            <div className="stat-desc">Health measurements</div>
          </div>
          
          <div className="stat bg-base-100 border border-base-300 rounded-box">
            <div className="stat-figure text-secondary">
              <Activity className="w-8 h-8" />
            </div>
            <div className="stat-title">System Uptime</div>
            <div className="stat-value text-secondary">99.9%</div>
            <div className="stat-desc">Last 30 days</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
          <div className="card-body p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-1 items-center space-x-4">
                <div className="form-control flex-1 max-w-md">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search patients..."
                      className="input input-bordered flex-1"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="btn btn-square">
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="form-control">
                  <select 
                    className="select select-bordered"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">All Patients</option>
                    <option value="critical">Critical</option>
                    <option value="warning">Warning</option>
                    <option value="normal">Normal</option>
                    <option value="excellent">Excellent</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
                <Button variant="outline" size="sm" onClick={() => setShowReportModal(true)}>
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button variant="primary" size="sm" onClick={() => setShowAddPatientModal(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Patient
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Patient List */}
        <div className="card bg-base-100 shadow-lg border border-base-300">
          <div className="card-body p-0">
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>Age</th>
                    <th>Status</th>
                    <th>Heart Rate</th>
                    <th>Blood Pressure</th>
                    <th>Steps</th>
                    <th>Last Sync</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPatients.map((patient) => (
                    <tr key={patient.id} className="hover">
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar placeholder">
                            <div className="bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full w-10 icon-center text-sm font-bold">
                              {patient.avatar}
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{patient.name}</div>
                            <div className="text-sm text-base-content/60">
                              {patient.devices.join(', ')}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{patient.age}</td>
                      <td>
                        <div className="flex items-center space-x-2">
                          <div className={`badge ${getStatusBadge(patient.status)} badge-sm`}>
                            {patient.status}
                          </div>
                          {patient.alerts > 0 && (
                            <div className="badge badge-error badge-sm">
                              {patient.alerts} alert{patient.alerts > 1 ? 's' : ''}
                            </div>
                          )}
                        </div>
                      </td>
                      <td>
                        <span className={patient.recentMetrics.heartRate > 100 ? 'text-error font-bold' : ''}>
                          {patient.recentMetrics.heartRate} BPM
                        </span>
                      </td>
                      <td>
                        <span className={patient.recentMetrics.bloodPressure.startsWith('1') && patient.recentMetrics.bloodPressure.includes('9') ? 'text-warning font-bold' : ''}>
                          {patient.recentMetrics.bloodPressure}
                        </span>
                      </td>
                      <td>{patient.recentMetrics.steps.toLocaleString()}</td>
                      <td>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-base-content/60" />
                          <span className="text-sm">{patient.lastSync}</span>
                        </div>
                      </td>
                      <td>
                        <div className="dropdown dropdown-end">
                          <div tabIndex={0} role="button" className="btn btn-ghost btn-xs">
                            Actions
                          </div>
                          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-44 p-2 shadow-lg border border-base-300">
                            <li>
                              <Link href={`/dashboard/provider/patients/${patient.id}`}>
                                <BarChart3 className="w-4 h-4" />View Details
                              </Link>
                            </li>
                            <li><a><Calendar className="w-4 h-4" />Schedule</a></li>
                            <li><a><Bell className="w-4 h-4" />Set Alert</a></li>
                            <li className="divider"></li>
                            <li><a><Settings className="w-4 h-4" />Settings</a></li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          {/* Recent Alerts */}
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="card-title">
                <AlertTriangle className="w-5 h-5 text-error" />
                Recent Alerts
              </h3>
              <div className="space-y-3">
                <div className="alert alert-error alert-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <div>
                    <div className="font-semibold">High Blood Pressure</div>
                    <div className="text-xs">Robert Johnson - 160/95 mmHg</div>
                  </div>
                </div>
                <div className="alert alert-warning alert-sm">
                  <Clock className="w-4 h-4" />
                  <div>
                    <div className="font-semibold">Missed Sync</div>
                    <div className="text-xs">3 patients haven&apos;t synced in 24h</div>
                  </div>
                </div>
                <div className="alert alert-info alert-sm">
                  <Heart className="w-4 h-4" />
                  <div>
                    <div className="font-semibold">New Patient</div>
                    <div className="text-xs">Emma Davis joined your practice</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="card-title">
                <BarChart3 className="w-5 h-5 text-primary" />
                Today&apos;s Overview
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Patients Monitored</span>
                  <span className="font-bold text-primary">89/127</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Data Points Collected</span>
                  <span className="font-bold text-secondary">12.4k</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Critical Alerts</span>
                  <span className="font-bold text-error">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">System Health</span>
                  <span className="font-bold text-success">Excellent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="card-title">
                <Settings className="w-5 h-5 text-accent" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setShowAddPatientModal(true)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Patient
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setShowReportModal(true)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Review
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Practice Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
          </main>
        </div>
      </div>

      {/* Toast Notifications */}
      {showToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <Check className="w-5 h-5" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Add Patient Modal */}
      {showAddPatientModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Add New Patient</h3>
            
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input type="text" className="input input-bordered" placeholder="John" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input type="text" className="input input-bordered" placeholder="Doe" />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input type="email" className="input input-bordered" placeholder="john.doe@email.com" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Age</span>
                  </label>
                  <input type="number" className="input input-bordered" placeholder="35" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <select className="select select-bordered">
                    <option>Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Medical Conditions</span>
                </label>
                <textarea className="textarea textarea-bordered" placeholder="List any known medical conditions..."></textarea>
              </div>
            </div>

            <div className="modal-action">
              <Button variant="outline" onClick={() => setShowAddPatientModal(false)}>
                Cancel
              </Button>
              <Button 
                variant="primary" 
                onClick={() => handleAddPatient({ name: 'New Patient' })}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Patient
              </Button>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setShowAddPatientModal(false)}></div>
        </div>
      )}

      {/* Provider Alerts Modal */}
      {showAlertModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Patient Alerts</h3>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {providerAlerts.map((alert) => (
                <div key={alert.id} className={`alert ${
                  alert.type === 'critical' ? 'alert-error' : 
                  alert.type === 'warning' ? 'alert-warning' : 'alert-info'
                } ${alert.acknowledged ? 'opacity-60' : ''}`}>
                  <AlertTriangle className="w-5 h-5" />
                  <div className="flex-1">
                    <div className="font-semibold">{alert.title}</div>
                    <div className="text-sm">{alert.patientName}: {alert.message}</div>
                    <div className="text-xs opacity-70">{alert.timestamp}</div>
                  </div>
                  {!alert.acknowledged && (
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="xs"
                        onClick={() => handleAcknowledgeAlert(alert.id)}
                      >
                        <Check className="w-4 h-4" />
                      </Button>
                      <Link href={`/dashboard/provider/patients/${alert.patientId}`}>
                        <Button variant="primary" size="xs">
                          View Patient
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="modal-action">
              <Button variant="outline" onClick={() => setShowAlertModal(false)}>
                Close
              </Button>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setShowAlertModal(false)}></div>
        </div>
      )}

      {/* Generate Report Modal */}
      {showReportModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Generate Report</h3>
            
            <div className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Report Type</span>
                </label>
                <select className="select select-bordered">
                  <option>Population Health Summary</option>
                  <option>Individual Patient Report</option>
                  <option>Alert Summary</option>
                  <option>Device Connectivity Report</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Time Period</span>
                </label>
                <select className="select select-bordered">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                  <option>Last year</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Include Patients</span>
                </label>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {patients.slice(0, 3).map((patient) => (
                    <label key={patient.id} className="label cursor-pointer justify-start">
                      <input type="checkbox" className="checkbox checkbox-primary checkbox-sm mr-3" defaultChecked />
                      <span className="label-text">{patient.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-action">
              <Button variant="outline" onClick={() => setShowReportModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleGenerateReport}>
                <Download className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setShowReportModal(false)}></div>
        </div>
      )}
    </div>
  );
}
