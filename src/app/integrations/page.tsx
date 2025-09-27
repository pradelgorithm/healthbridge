'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Wifi, 
  WifiOff, 
  Settings, 
  Check, 
  Plus,
  Smartphone,
  Watch,
  Heart,
  Activity,
  Moon,
  Thermometer,
  Droplets,
  Zap,
  Shield
} from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

export default function Integrations() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState<{
    id: string;
    name: string;
    brand: string;
    dataTypes: string[];
    icon: string;
  } | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Mock integration data
  const integrations = [
    {
      id: 'apple-watch',
      name: 'Apple Watch',
      brand: 'Apple',
      category: 'wearable',
      connected: true,
      lastSync: '2 min ago',
      dataTypes: ['Heart Rate', 'Steps', 'Sleep', 'Workouts', 'ECG'],
      status: 'active',
      batteryLevel: 85,
      icon: '⌚',
      color: 'bg-neutral text-neutral-content'
    },
    {
      id: 'fitbit-sense',
      name: 'Fitbit Sense 2',
      brand: 'Fitbit',
      category: 'wearable',
      connected: true,
      lastSync: '5 min ago',
      dataTypes: ['Heart Rate', 'Steps', 'Sleep', 'Stress', 'SpO2'],
      status: 'active',
      batteryLevel: 72,
      icon: '🏃',
      color: 'bg-secondary text-secondary-content'
    },
    {
      id: 'garmin-forerunner',
      name: 'Garmin Forerunner 955',
      brand: 'Garmin',
      category: 'wearable',
      connected: false,
      lastSync: 'Never',
      dataTypes: ['Heart Rate', 'GPS', 'Training', 'Recovery'],
      status: 'disconnected',
      batteryLevel: null,
      icon: '🏃‍♂️',
      color: 'bg-primary text-primary-content'
    },
    {
      id: 'oura-ring',
      name: 'Oura Ring Gen3',
      brand: 'Oura',
      category: 'wearable',
      connected: true,
      lastSync: '1 hour ago',
      dataTypes: ['Sleep', 'HRV', 'Temperature', 'Activity'],
      status: 'active',
      batteryLevel: 45,
      icon: '💍',
      color: 'bg-accent text-accent-content'
    },
    {
      id: 'whoop-4',
      name: 'WHOOP 4.0',
      brand: 'WHOOP',
      category: 'wearable',
      connected: true,
      lastSync: '10 min ago',
      dataTypes: ['HRV', 'Sleep', 'Strain', 'Recovery'],
      status: 'active',
      batteryLevel: 92,
      icon: '📊',
      color: 'bg-error text-error-content'
    },
    {
      id: 'samsung-health',
      name: 'Samsung Health',
      brand: 'Samsung',
      category: 'app',
      connected: true,
      lastSync: '30 min ago',
      dataTypes: ['Steps', 'Weight', 'Blood Pressure', 'Glucose'],
      status: 'active',
      batteryLevel: null,
      icon: '📱',
      color: 'bg-info text-info-content'
    },
    {
      id: 'google-fit',
      name: 'Google Fit',
      brand: 'Google',
      category: 'app',
      connected: false,
      lastSync: 'Never',
      dataTypes: ['Steps', 'Weight', 'Workouts'],
      status: 'available',
      batteryLevel: null,
      icon: '🏃‍♀️',
      color: 'bg-warning text-warning-content'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Devices', icon: <Settings className="w-4 h-4" /> },
    { id: 'wearable', name: 'Wearables', icon: <Watch className="w-4 h-4" /> },
    { id: 'app', name: 'Health Apps', icon: <Smartphone className="w-4 h-4" /> }
  ];

  const filteredIntegrations = selectedCategory === 'all' 
    ? integrations 
    : integrations.filter(integration => integration.category === selectedCategory);

  const getStatusIcon = (status: string, connected: boolean) => {
    if (connected && status === 'active') return <Wifi className="w-4 h-4 text-success" />;
    if (!connected) return <WifiOff className="w-4 h-4 text-error" />;
    return <Settings className="w-4 h-4 text-warning" />;
  };

  const getDataTypeIcon = (dataType: string) => {
    switch (dataType.toLowerCase()) {
      case 'heart rate': return <Heart className="w-3 h-3 text-error" />;
      case 'steps': return <Activity className="w-3 h-3 text-primary" />;
      case 'sleep': return <Moon className="w-3 h-3 text-accent" />;
      case 'temperature': return <Thermometer className="w-3 h-3 text-warning" />;
      case 'spo2': return <Droplets className="w-3 h-3 text-info" />;
      case 'stress': return <Zap className="w-3 h-3 text-secondary" />;
      default: return <Activity className="w-3 h-3 text-neutral" />;
    }
  };

  const handleConnect = (integration: {
    id: string;
    name: string;
    brand: string;
    dataTypes: string[];
    icon: string;
  }) => {
    setSelectedIntegration(integration);
    setShowConnectModal(true);
  };

  const handleConfirmConnect = () => {
    setToastMessage(`Successfully connected ${selectedIntegration?.name}!`);
    setShowToast(true);
    setShowConnectModal(false);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleDisconnect = (integrationName: string) => {
    setToastMessage(`${integrationName} disconnected successfully`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-base-100" data-theme="healthbridge">
      {/* Header */}
      <header className="navbar bg-base-100 border-b border-base-300">
        <div className="navbar-start">
          <Link href="/dashboard/provider" className="btn btn-ghost btn-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>
        <div className="navbar-center">
          <Logo size="sm" />
        </div>
        <div className="navbar-end">
          <Button variant="primary" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Integration
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-base-content mb-4">
            Device <span className="gradient-text">Integrations</span>
          </h1>
          <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
            Connect and manage all your health devices and apps in one place. 
            Monitor data flow and ensure seamless synchronization.
          </p>
        </div>

        {/* Category Menu */}
        <div className="flex justify-center mb-8">
          <ul className="menu menu-horizontal bg-base-200 rounded-box">
            {categories.map((category) => (
              <li key={category.id}>
                <a
                  className={selectedCategory === category.id ? 'active' : ''}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.icon}
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Integration Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="stat bg-base-100 border border-base-300 rounded-box">
            <div className="stat-figure text-success">
              <Wifi className="w-8 h-8" />
            </div>
            <div className="stat-title">Connected</div>
            <div className="stat-value text-success">
              {integrations.filter(i => i.connected).length}
            </div>
            <div className="stat-desc">Active integrations</div>
          </div>
          
          <div className="stat bg-base-100 border border-base-300 rounded-box">
            <div className="stat-figure text-primary">
              <Activity className="w-8 h-8" />
            </div>
            <div className="stat-title">Data Sources</div>
            <div className="stat-value text-primary">
              {integrations.reduce((acc, i) => acc + i.dataTypes.length, 0)}
            </div>
            <div className="stat-desc">Total data types</div>
          </div>
          
          <div className="stat bg-base-100 border border-base-300 rounded-box">
            <div className="stat-figure text-secondary">
              <Heart className="w-8 h-8" />
            </div>
            <div className="stat-title">Sync Status</div>
            <div className="stat-value text-secondary">98%</div>
            <div className="stat-desc">Uptime today</div>
          </div>
          
          <div className="stat bg-base-100 border border-base-300 rounded-box">
            <div className="stat-figure text-accent">
              <Zap className="w-8 h-8" />
            </div>
            <div className="stat-title">Data Points</div>
            <div className="stat-value text-accent">24.7k</div>
            <div className="stat-desc">Collected today</div>
          </div>
        </div>

        {/* Integration Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.map((integration) => (
            <div key={integration.id} className={`card bg-base-100 shadow-lg border-2 ${
              integration.connected ? 'border-success/30' : 'border-base-300'
            } hover:shadow-xl transition-all duration-300`}>
              <div className="card-body p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="avatar placeholder">
                      <div className={`${integration.color} rounded-lg w-12 icon-center text-xl`}>
                        {integration.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-base-content">{integration.name}</h3>
                      <p className="text-sm text-base-content/60">{integration.brand}</p>
                    </div>
                  </div>
                  
                  {/* Status Icon */}
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(integration.status, integration.connected)}
                    {integration.batteryLevel && (
                      <div className="radial-progress text-xs" 
                           style={{"--value": integration.batteryLevel, "--size": "2rem"} as React.CSSProperties}>
                        {integration.batteryLevel}%
                      </div>
                    )}
                  </div>
                </div>

                {/* Connection Status */}
                <div className="mb-4">
                  <div className={`badge ${
                    integration.connected ? 'badge-success' : 'badge-error'
                  } badge-sm mb-2`}>
                    {integration.connected ? 'Connected' : 'Disconnected'}
                  </div>
                  <p className="text-xs text-base-content/60">
                    Last sync: {integration.lastSync}
                  </p>
                </div>

                {/* Data Types */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-base-content mb-2">Data Types</h4>
                  <div className="flex flex-wrap gap-1">
                    {integration.dataTypes.map((dataType, index) => (
                      <div key={index} className="badge badge-ghost badge-xs flex items-center">
                        {getDataTypeIcon(dataType)}
                        <span className="ml-1">{dataType}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="card-actions justify-end">
                  {integration.connected ? (
                    <>
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4 mr-1" />
                        Configure
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDisconnect(integration.name)}
                      >
                        Disconnect
                      </Button>
                    </>
                  ) : (
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleConnect(integration)}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Connect {integration.name}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Add New Integration Card */}
          <div className="card bg-base-100 shadow-lg border-2 border-dashed border-base-300 hover:border-primary/50 cursor-pointer group">
            <div className="card-body p-6 text-center flex items-center justify-center">
              <div className="avatar placeholder mb-4">
                <div className="bg-base-200 text-base-content/60 rounded-lg w-12 icon-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <Plus className="w-6 h-6" />
                </div>
              </div>
              <h3 className="font-bold text-base-content/70 group-hover:text-primary transition-colors">
                Add New Integration
              </h3>
              <p className="text-sm text-base-content/60 mt-2">
                Connect more devices and apps
              </p>
            </div>
          </div>
        </div>

        {/* Integration Categories Menu */}
        <div className="mt-12">
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="card-title mb-6">
                <Settings className="w-5 h-5 mr-2" />
                Available Integrations by Category
              </h3>
              
              {/* Category Tabs with Nested Menus */}
              <div className="tabs tabs-boxed justify-center mb-6">
                <input type="radio" name="integration_tabs" className="tab" aria-label="Wearable Devices" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                  <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                    <li>
                      <details>
                        <summary>
                          <Watch className="w-4 h-4" />
                          Smartwatches
                        </summary>
                        <ul>
                          <li><a>Apple Watch Series 9</a></li>
                          <li><a>Samsung Galaxy Watch 6</a></li>
                          <li><a>Garmin Venu 3</a></li>
                          <li><a>Fitbit Sense 2</a></li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>
                          <Activity className="w-4 h-4" />
                          Fitness Trackers
                        </summary>
                        <ul>
                          <li><a>Fitbit Charge 6</a></li>
                          <li><a>Garmin Vivosmart 5</a></li>
                          <li><a>Amazfit Band 7</a></li>
                          <li><a>WHOOP 4.0</a></li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>
                          <Heart className="w-4 h-4" />
                          Specialized Devices
                        </summary>
                        <ul>
                          <li><a>Oura Ring Gen3</a></li>
                          <li><a>Muse Headband</a></li>
                          <li><a>Withings Body+</a></li>
                          <li><a>Omron Blood Pressure</a></li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>

                <input type="radio" name="integration_tabs" className="tab" aria-label="Health Apps" />
                <div className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                  <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                    <li>
                      <details>
                        <summary>
                          <Smartphone className="w-4 h-4" />
                          Mobile Apps
                        </summary>
                        <ul>
                          <li><a>Apple Health</a></li>
                          <li><a>Samsung Health</a></li>
                          <li><a>Google Fit</a></li>
                          <li><a>Huawei Health</a></li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>
                          <Activity className="w-4 h-4" />
                          Fitness Apps
                        </summary>
                        <ul>
                          <li><a>Strava</a></li>
                          <li><a>MyFitnessPal</a></li>
                          <li><a>Nike Run Club</a></li>
                          <li><a>Peloton</a></li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>
                          <Heart className="w-4 h-4" />
                          Medical Apps
                        </summary>
                        <ul>
                          <li><a>Blood Pressure Monitor</a></li>
                          <li><a>Glucose Tracker</a></li>
                          <li><a>Medication Reminder</a></li>
                          <li><a>Symptom Tracker</a></li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>

                <input type="radio" name="integration_tabs" className="tab" aria-label="Medical Devices" />
                <div className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                  <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                    <li>
                      <details>
                        <summary>
                          <Thermometer className="w-4 h-4" />
                          Monitoring Devices
                        </summary>
                        <ul>
                          <li><a>Blood Pressure Cuffs</a></li>
                          <li><a>Pulse Oximeters</a></li>
                          <li><a>Thermometers</a></li>
                          <li><a>Weight Scales</a></li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>
                          <Droplets className="w-4 h-4" />
                          Diagnostic Tools
                        </summary>
                        <ul>
                          <li><a>Glucose Monitors</a></li>
                          <li><a>ECG Devices</a></li>
                          <li><a>Sleep Study Equipment</a></li>
                          <li><a>Spirometers</a></li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Guide */}
        <div className="mt-12">
          <div className="card bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
            <div className="card-body">
              <h3 className="card-title justify-center mb-4">
                <Shield className="w-6 h-6 mr-2" />
                Secure Integration Process
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="avatar placeholder mb-3">
                    <div className="bg-primary/10 text-primary rounded-full w-12 icon-center">
                      <Check className="w-6 h-6" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Authenticate</h4>
                  <p className="text-sm text-base-content/70">
                    Securely connect using OAuth 2.0 or device-specific protocols
                  </p>
                </div>
                <div className="text-center">
                  <div className="avatar placeholder mb-3">
                    <div className="bg-secondary/10 text-secondary rounded-full w-12 icon-center">
                      <Shield className="w-6 h-6" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Encrypt</h4>
                  <p className="text-sm text-base-content/70">
                    All data is encrypted in transit and at rest with AES-256
                  </p>
                </div>
                <div className="text-center">
                  <div className="avatar placeholder mb-3">
                    <div className="bg-accent/10 text-accent rounded-full w-12 icon-center">
                      <Activity className="w-6 h-6" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Sync</h4>
                  <p className="text-sm text-base-content/70">
                    Real-time synchronization with intelligent conflict resolution
                  </p>
                </div>
              </div>
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

      {/* Connect Integration Modal */}
      {showConnectModal && selectedIntegration && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Connect {selectedIntegration.name}</h3>
            
            <div className="alert alert-info mb-4">
              <Shield className="w-5 h-5" />
              <div>
                <div className="font-semibold">Secure Connection</div>
                <div className="text-sm">
                  Your data will be encrypted and securely transmitted. You can disconnect at any time.
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="card bg-base-200">
                <div className="card-body p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl">{selectedIntegration.icon}</span>
                    <div>
                      <h4 className="font-semibold">{selectedIntegration.name}</h4>
                      <p className="text-sm text-base-content/70">{selectedIntegration.brand}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold mb-2">Data Types to Sync:</h5>
                    <div className="flex flex-wrap gap-1">
                      {selectedIntegration.dataTypes.map((dataType: string, index: number) => (
                        <div key={index} className="badge badge-primary badge-xs">
                          {dataType}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Enable automatic data sync</span>
                  <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Share with approved healthcare providers</span>
                  <input type="checkbox" className="toggle toggle-secondary" defaultChecked />
                </label>
              </div>
            </div>

            <div className="modal-action">
              <Button variant="outline" onClick={() => setShowConnectModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleConfirmConnect}>
                <Plus className="w-4 h-4 mr-2" />
                Connect Device
              </Button>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setShowConnectModal(false)}></div>
        </div>
      )}
    </div>
  );
}
