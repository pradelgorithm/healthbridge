'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Heart, 
  Activity, 
  Moon, 
  Footprints, 
  Thermometer,
  Droplets,
  Zap,
  TrendingUp,
  TrendingDown,
  Settings,
  Share,
  Shield,
  Plus,
  Calendar,
  AlertTriangle,
  Check
} from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

interface ProfileDashboardProps {
  params: Promise<{
    profileId: string;
  }>;
}

export default function ProfileDashboard({ params }: ProfileDashboardProps) {
  const [timeRange, setTimeRange] = useState('today');
  const [showDeviceModal, setShowDeviceModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const resolvedParams = React.use(params);

  // Mock profile data
  const profile = {
    id: resolvedParams.profileId,
    name: 'John Doe',
    avatar: 'JD',
    age: 35,
    role: 'primary',
    lastSync: '2 minutes ago',
    devices: ['Apple Watch Series 9', 'iPhone Health App']
  };

  const healthMetrics = [
    {
      icon: <Heart className="w-6 h-6" />,
      label: 'Heart Rate',
      value: '72',
      unit: 'BPM',
      trend: 'up',
      change: '+2%',
      status: 'normal',
      color: 'text-error'
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      label: 'Blood Oxygen',
      value: '98',
      unit: '%',
      trend: 'stable',
      change: '0%',
      status: 'excellent',
      color: 'text-info'
    },
    {
      icon: <Footprints className="w-6 h-6" />,
      label: 'Steps',
      value: '8,240',
      unit: 'steps',
      trend: 'up',
      change: '+15%',
      status: 'good',
      color: 'text-secondary'
    },
    {
      icon: <Moon className="w-6 h-6" />,
      label: 'Sleep',
      value: '7.5',
      unit: 'hours',
      trend: 'down',
      change: '-0.5h',
      status: 'good',
      color: 'text-accent'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      label: 'Stress Level',
      value: 'Low',
      unit: '',
      trend: 'down',
      change: '-10%',
      status: 'excellent',
      color: 'text-warning'
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      label: 'Body Temp',
      value: '98.6',
      unit: '°F',
      trend: 'stable',
      change: '0%',
      status: 'normal',
      color: 'text-primary'
    }
  ];

  const recentActivities = [
    { time: '2 min ago', activity: 'Heart rate measured', value: '72 BPM', device: 'Apple Watch' },
    { time: '5 min ago', activity: 'Steps updated', value: '8,240 steps', device: 'iPhone' },
    { time: '1 hour ago', activity: 'Sleep data synced', value: '7.5 hours', device: 'Apple Watch' },
    { time: '2 hours ago', activity: 'Blood oxygen measured', value: '98%', device: 'Apple Watch' }
  ];

  // Mock health alerts
  const [healthAlerts, setHealthAlerts] = useState([
    {
      id: 'alert-001',
      type: 'warning',
      title: 'Elevated Heart Rate',
      message: 'Heart rate has been above 100 BPM for 15 minutes during rest',
      timestamp: '10 min ago',
      severity: 'medium',
      acknowledged: false,
      metric: 'Heart Rate',
      value: '105 BPM'
    },
    {
      id: 'alert-002', 
      type: 'info',
      title: 'Sleep Goal Achieved',
      message: 'Great job! You reached your 8-hour sleep goal',
      timestamp: '8 hours ago',
      severity: 'low',
      acknowledged: true,
      metric: 'Sleep',
      value: '8.2 hours'
    }
  ]);

  // Mock available devices for connection
  const availableDevices = [
    { id: 'fitbit-charge6', name: 'Fitbit Charge 6', brand: 'Fitbit', type: 'Fitness Tracker' },
    { id: 'garmin-venu3', name: 'Garmin Venu 3', brand: 'Garmin', type: 'Smartwatch' },
    { id: 'oura-gen3', name: 'Oura Ring Gen3', brand: 'Oura', type: 'Sleep Tracker' },
    { id: 'whoop-4', name: 'WHOOP 4.0', brand: 'WHOOP', type: 'Recovery Tracker' }
  ];

  const handleConnectDevice = (deviceId: string) => {
    setToastMessage(`Successfully connected ${availableDevices.find(d => d.id === deviceId)?.name}!`);
    setShowToast(true);
    setShowDeviceModal(false);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleAcknowledgeAlert = (alertId: string) => {
    setHealthAlerts(prev => 
      prev.map(alert => 
        alert.id === alertId ? { ...alert, acknowledged: true } : alert
      )
    );
    setShowAlertModal(false);
    setToastMessage('Alert acknowledged successfully');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleShareData = () => {
    setToastMessage('Health data shared with Dr. Johnson successfully');
    setShowToast(true);
    setShowShareModal(false);
    setTimeout(() => setShowToast(false), 3000);
  };


  return (
    <div className="min-h-screen bg-base-100" data-theme="healthbridge">
      {/* Header */}
      <header className="navbar bg-base-100 border-b border-base-300">
        <div className="navbar-start">
          <Link href="/dashboard/user" className="btn btn-ghost btn-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profiles
          </Link>
        </div>
        <div className="navbar-center">
          <Logo size="sm" />
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
              <Share className="w-4 h-4 mr-2" />
              Share
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-base-300">
              <li><Link href={`/dashboard/user/${profile.id}/providers`}><Shield className="w-4 h-4" />Manage Providers</Link></li>
              <li><Link href={`/dashboard/user/${profile.id}/appointments`}><Calendar className="w-4 h-4" />Appointments</Link></li>
              <li><a onClick={() => setShowShareModal(true)}><Heart className="w-4 h-4" />Share with Provider</a></li>
              <li className="divider"></li>
              <li><a><Settings className="w-4 h-4" />Privacy Settings</a></li>
            </ul>
          </div>
          
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
              <Settings className="w-4 h-4" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-48 p-2 shadow-lg border border-base-300">
              <li><a><Settings className="w-4 h-4" />Profile Settings</a></li>
              <li><Link href={`/dashboard/user/${profile.id}/devices`}><Activity className="w-4 h-4" />Manage Devices</Link></li>
              <li><a><Heart className="w-4 h-4" />Health Goals</a></li>
              <li className="divider"></li>
              <li><Link href={`/dashboard/user/${profile.id}/providers`}><Shield className="w-4 h-4" />Provider Access</Link></li>
            </ul>
          </div>
        </div>
      </header>

      {/* Profile Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-base-300">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-6">
            <div className="avatar placeholder">
              <div className="bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full w-20 icon-center text-2xl font-bold">
                {profile.avatar}
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-base-content mb-2">
                {profile.name}&apos;s Health Dashboard
              </h1>
              <div className="flex items-center space-x-4 text-sm text-base-content/70">
                <span>{profile.age} years old</span>
                <span>•</span>
                <span>Last sync: {profile.lastSync}</span>
                <span>•</span>
                <div className="badge badge-success badge-sm">Active</div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {profile.devices.map((device, index) => (
                  <div key={index} className="badge badge-outline badge-sm">
                    {device}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <main className="container mx-auto px-4 py-8">
        {/* Time Range Selector */}
        <div className="flex justify-center mb-8">
          <div className="tabs tabs-boxed">
            <button 
              className={`tab ${timeRange === 'today' ? 'tab-active' : ''}`}
              onClick={() => setTimeRange('today')}
            >
              Today
            </button>
            <button 
              className={`tab ${timeRange === 'week' ? 'tab-active' : ''}`}
              onClick={() => setTimeRange('week')}
            >
              This Week
            </button>
            <button 
              className={`tab ${timeRange === 'month' ? 'tab-active' : ''}`}
              onClick={() => setTimeRange('month')}
            >
              This Month
            </button>
          </div>
        </div>

        {/* Health Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {healthMetrics.map((metric, index) => (
            <div key={index} className="card bg-base-100 shadow-lg border border-base-300">
              <div className="card-body p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`avatar placeholder`}>
                    <div className={`bg-base-200 ${metric.color} rounded-lg w-12 icon-center`}>
                      {metric.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`badge ${
                      metric.trend === 'up' ? 'badge-success' : 
                      metric.trend === 'down' ? 'badge-error' : 'badge-neutral'
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
                </div>
                
                <h3 className="text-base-content/70 text-sm font-medium mb-2">
                  {metric.label}
                </h3>
                
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-base-content">
                    {metric.value}
                  </span>
                  <span className="text-base-content/60 text-sm">
                    {metric.unit}
                  </span>
                </div>
                
                <div className={`mt-2 text-xs font-medium ${
                  metric.status === 'excellent' ? 'text-success' :
                  metric.status === 'good' ? 'text-info' :
                  metric.status === 'normal' ? 'text-neutral' :
                  'text-warning'
                }`}>
                  {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Health Alerts */}
        {healthAlerts.filter(alert => !alert.acknowledged).length > 0 && (
          <div className="card bg-base-100 shadow-lg border border-base-300 mb-6">
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                <h3 className="card-title">
                  <AlertTriangle className="w-5 h-5 text-warning mr-2" />
                  Health Alerts
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setShowAlertModal(true)}>
                  View All
                </Button>
              </div>
              
              <div className="space-y-3">
                {healthAlerts.filter(alert => !alert.acknowledged).slice(0, 2).map((alert) => (
                  <div key={alert.id} className={`alert ${
                    alert.type === 'warning' ? 'alert-warning' : 
                    alert.type === 'error' ? 'alert-error' : 'alert-info'
                  }`}>
                    <AlertTriangle className="w-5 h-5" />
                    <div className="flex-1">
                      <div className="font-semibold">{alert.title}</div>
                      <div className="text-sm">{alert.message}</div>
                      <div className="text-xs opacity-70">{alert.timestamp}</div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="xs"
                      onClick={() => handleAcknowledgeAlert(alert.id)}
                    >
                      <Check className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Recent Activity */}
        <div className="card bg-base-100 shadow-lg border border-base-300">
          <div className="card-body">
            <div className="flex items-center justify-between mb-6">
              <h3 className="card-title">
                <Activity className="w-5 h-5 mr-2" />
                Recent Activity
              </h3>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-base-200 rounded-lg">
                  <div className="avatar placeholder">
                    <div className="bg-primary/10 text-primary rounded-full w-10 icon-center">
                      <Activity className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-base-content">{activity.activity}</p>
                    <p className="text-sm text-base-content/70">{activity.value} • {activity.device}</p>
                  </div>
                  <div className="text-xs text-base-content/60">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Toast Notifications */}
      {showToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <Check className="w-5 h-5" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Connect Device Modal */}
      {showDeviceModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Connect New Device</h3>
            
            <div className="space-y-4">
              {availableDevices.map((device) => (
                <div key={device.id} className="card bg-base-200 cursor-pointer hover:bg-base-300 transition-colors">
                  <div className="card-body p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{device.name}</h4>
                        <p className="text-sm text-base-content/70">{device.brand} • {device.type}</p>
                      </div>
                      <Button 
                        variant="primary" 
                        size="sm"
                        onClick={() => handleConnectDevice(device.id)}
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Connect
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="modal-action">
              <Button variant="outline" onClick={() => setShowDeviceModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setShowDeviceModal(false)}></div>
        </div>
      )}

      {/* Health Alerts Modal */}
      {showAlertModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Health Alerts</h3>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {healthAlerts.map((alert) => (
                <div key={alert.id} className={`card ${
                  alert.acknowledged ? 'bg-base-200 opacity-60' : 'bg-base-100 border-2'
                } ${
                  alert.type === 'warning' ? 'border-warning' : 
                  alert.type === 'error' ? 'border-error' : 'border-info'
                }`}>
                  <div className="card-body p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold">{alert.title}</h4>
                          {alert.acknowledged && (
                            <div className="badge badge-success badge-xs">
                              <Check className="w-3 h-3 mr-1" />
                              Acknowledged
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-base-content/70 mb-2">{alert.message}</p>
                        <div className="flex items-center space-x-4 text-xs text-base-content/60">
                          <span>{alert.timestamp}</span>
                          <span>•</span>
                          <span>{alert.metric}: {alert.value}</span>
                        </div>
                      </div>
                      {!alert.acknowledged && (
                        <Button 
                          variant="ghost" 
                          size="xs"
                          onClick={() => handleAcknowledgeAlert(alert.id)}
                        >
                          <Check className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
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

      {/* Share Data Modal */}
      {showShareModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Share Health Data</h3>
            
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Select Provider</span>
              </label>
              <select className="select select-bordered">
                <option>Dr. Sarah Johnson - Family Medicine</option>
                <option>Dr. Michael Chen - Cardiology</option>
                <option>Dr. Lisa Park - Endocrinology</option>
              </select>
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Data to Share</span>
              </label>
              <div className="space-y-2">
                {['Heart Rate', 'Blood Pressure', 'Sleep Data', 'Activity', 'Weight'].map((dataType) => (
                  <label key={dataType} className="label cursor-pointer justify-start">
                    <input type="checkbox" className="checkbox checkbox-primary checkbox-sm mr-3" defaultChecked />
                    <span className="label-text">{dataType}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">Time Range</span>
              </label>
              <select className="select select-bordered">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
                <option>All available data</option>
              </select>
            </div>

            <div className="modal-action">
              <Button variant="outline" onClick={() => setShowShareModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleShareData}>
                <Share className="w-4 h-4 mr-2" />
                Share Data
              </Button>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setShowShareModal(false)}></div>
        </div>
      )}
    </div>
  );
}
