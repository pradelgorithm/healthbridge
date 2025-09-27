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
  Watch,
  Activity,
  Battery,
  AlertTriangle,
  Clock,
  Trash2,
  RefreshCw
} from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

interface DevicesPageProps {
  params: Promise<{
    profileId: string;
  }>;
}

export default function DevicesPage({ params }: DevicesPageProps) {
  const resolvedParams = React.use(params);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showDisconnectModal, setShowDisconnectModal] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<{
    id: string;
    name: string;
    brand: string;
    type: string;
  } | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Mock connected devices
  const [connectedDevices, setConnectedDevices] = useState([
    {
      id: 'device-001',
      name: 'Apple Watch Series 9',
      brand: 'Apple',
      type: 'Smartwatch',
      status: 'connected',
      batteryLevel: 85,
      lastSync: '2 min ago',
      dataTypes: ['Heart Rate', 'Steps', 'Sleep', 'Workouts', 'ECG'],
      syncFrequency: 'Real-time',
      firmwareVersion: '10.2.1',
      icon: '⌚'
    },
    {
      id: 'device-002',
      name: 'iPhone Health App',
      brand: 'Apple',
      type: 'Health App',
      status: 'connected',
      batteryLevel: null,
      lastSync: '5 min ago',
      dataTypes: ['Steps', 'Health Records', 'Medications'],
      syncFrequency: 'Every 15 minutes',
      firmwareVersion: '17.2.1',
      icon: '📱'
    },
    {
      id: 'device-003',
      name: 'Omron Blood Pressure Monitor',
      brand: 'Omron',
      type: 'Medical Device',
      status: 'connected',
      batteryLevel: 45,
      lastSync: '1 hour ago',
      dataTypes: ['Blood Pressure', 'Heart Rate'],
      syncFrequency: 'Manual',
      firmwareVersion: '2.1.0',
      icon: '🩺'
    },
    {
      id: 'device-004',
      name: 'Fitbit Charge 6',
      brand: 'Fitbit',
      type: 'Fitness Tracker',
      status: 'disconnected',
      batteryLevel: null,
      lastSync: '2 days ago',
      dataTypes: ['Heart Rate', 'Steps', 'Sleep', 'Stress'],
      syncFrequency: 'Every hour',
      firmwareVersion: '1.8.2',
      icon: '🏃'
    }
  ]);

  // Mock available devices to connect
  const availableDevices = [
    { id: 'new-001', name: 'Garmin Venu 3', brand: 'Garmin', type: 'Smartwatch', icon: '⌚' },
    { id: 'new-002', name: 'Oura Ring Gen3', brand: 'Oura', type: 'Sleep Tracker', icon: '💍' },
    { id: 'new-003', name: 'WHOOP 4.0', brand: 'WHOOP', type: 'Recovery Tracker', icon: '📊' },
    { id: 'new-004', name: 'Samsung Health', brand: 'Samsung', type: 'Health App', icon: '📱' }
  ];

  const handleConnectDevice = (deviceId: string) => {
    const device = availableDevices.find(d => d.id === deviceId);
    setToastMessage(`Successfully connected ${device?.name}!`);
    setShowToast(true);
    setShowConnectModal(false);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleDisconnectDevice = () => {
    if (selectedDevice) {
      setConnectedDevices(prev => prev.filter(d => d.id !== selectedDevice.id));
      setToastMessage(`${selectedDevice.name} disconnected successfully`);
      setShowToast(true);
      setShowDisconnectModal(false);
      setSelectedDevice(null);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const handleSyncDevice = (deviceId: string) => {
    setConnectedDevices(prev => 
      prev.map(device => 
        device.id === deviceId 
          ? { ...device, lastSync: 'Just now', status: 'connected' }
          : device
      )
    );
    setToastMessage('Device synced successfully');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'text-success';
      case 'disconnected': return 'text-error';
      case 'syncing': return 'text-warning';
      default: return 'text-neutral';
    }
  };

  const getBatteryColor = (level: number) => {
    if (level > 50) return 'text-success';
    if (level > 20) return 'text-warning';
    return 'text-error';
  };

  return (
    <div className="min-h-screen bg-base-100" data-theme="healthbridge">
      {/* Header */}
      <header className="navbar bg-base-100 border-b border-base-300">
        <div className="navbar-start">
          <Link href={`/dashboard/user/${resolvedParams.profileId}`} className="btn btn-ghost btn-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>
        <div className="navbar-center">
          <Logo size="sm" />
        </div>
        <div className="navbar-end">
          <Button variant="primary" size="sm" onClick={() => setShowConnectModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Connect Device
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-base-content mb-4">
            <span className="gradient-text">Device</span> Management
          </h1>
          <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
            Manage your connected health devices and monitor data synchronization.
          </p>
        </div>

        {/* Device Stats */}
        <div className="grid sm:grid-cols-4 gap-6 mb-8">
          <div className="stat bg-base-100 border border-base-300 rounded-box">
            <div className="stat-figure text-success">
              <Wifi className="w-8 h-8" />
            </div>
            <div className="stat-title">Connected</div>
            <div className="stat-value text-success">
              {connectedDevices.filter(d => d.status === 'connected').length}
            </div>
            <div className="stat-desc">Active devices</div>
          </div>
          
          <div className="stat bg-base-100 border border-base-300 rounded-box">
            <div className="stat-figure text-primary">
              <Activity className="w-8 h-8" />
            </div>
            <div className="stat-title">Data Points</div>
            <div className="stat-value text-primary">2.4k</div>
            <div className="stat-desc">Today</div>
          </div>
          
          <div className="stat bg-base-100 border border-base-300 rounded-box">
            <div className="stat-figure text-secondary">
              <RefreshCw className="w-8 h-8" />
            </div>
            <div className="stat-title">Last Sync</div>
            <div className="stat-value text-secondary text-lg">2m</div>
            <div className="stat-desc">ago</div>
          </div>
          
          <div className="stat bg-base-100 border border-base-300 rounded-box">
            <div className="stat-figure text-warning">
              <Battery className="w-8 h-8" />
            </div>
            <div className="stat-title">Avg Battery</div>
            <div className="stat-value text-warning">65%</div>
            <div className="stat-desc">Across devices</div>
          </div>
        </div>

        {/* Connected Devices */}
        <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
          <div className="card-body">
            <div className="flex items-center justify-between mb-6">
              <h2 className="card-title">
                <Watch className="w-5 h-5 text-primary mr-2" />
                Connected Devices
              </h2>
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Sync All
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {connectedDevices.map((device) => (
                <div key={device.id} className={`card border-2 ${
                  device.status === 'connected' ? 'border-success/30 bg-success/5' : 'border-error/30 bg-error/5'
                }`}>
                  <div className="card-body p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-3">
                        <div className="avatar placeholder">
                          <div className={`${
                            device.status === 'connected' ? 'bg-success text-success-content' : 'bg-error text-error-content'
                          } rounded-lg w-12 icon-center text-xl`}>
                            {device.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-base-content">{device.name}</h3>
                          <p className="text-sm text-base-content/70">{device.brand} • {device.type}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className={`badge ${
                              device.status === 'connected' ? 'badge-success' : 'badge-error'
                            } badge-sm`}>
                              {device.status === 'connected' ? (
                                <Wifi className="w-3 h-3 mr-1" />
                              ) : (
                                <WifiOff className="w-3 h-3 mr-1" />
                              )}
                              {device.status}
                            </div>
                            {device.batteryLevel && (
                              <div className={`badge badge-outline badge-sm ${getBatteryColor(device.batteryLevel)}`}>
                                <Battery className="w-3 h-3 mr-1" />
                                {device.batteryLevel}%
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                          <Settings className="w-4 h-4" />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-44 p-2 shadow-lg border border-base-300">
                          {device.status === 'connected' ? (
                            <>
                              <li><a onClick={() => handleSyncDevice(device.id)}><RefreshCw className="w-4 h-4" />Sync Now</a></li>
                              <li><a><Settings className="w-4 h-4" />Configure</a></li>
                              <li className="divider"></li>
                              <li>
                                <a 
                                  className="text-error"
                                  onClick={() => {
                                    setSelectedDevice(device);
                                    setShowDisconnectModal(true);
                                  }}
                                >
                                  <Trash2 className="w-4 h-4" />Disconnect
                                </a>
                              </li>
                            </>
                          ) : (
                            <li><a onClick={() => handleSyncDevice(device.id)}><RefreshCw className="w-4 h-4" />Reconnect</a></li>
                          )}
                        </ul>
                      </div>
                    </div>

                    {/* Device Info */}
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Last Sync:</span>
                        <span className={getStatusColor(device.status)}>{device.lastSync}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sync Frequency:</span>
                        <span>{device.syncFrequency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Firmware:</span>
                        <span>{device.firmwareVersion}</span>
                      </div>
                    </div>

                    {/* Data Types */}
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2">Data Types:</h4>
                      <div className="flex flex-wrap gap-1">
                        {device.dataTypes.map((dataType, index) => (
                          <div key={index} className="badge badge-ghost badge-xs">
                            {dataType}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sync Status */}
                    {device.status === 'disconnected' && (
                      <div className="alert alert-error alert-sm mt-4">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Device disconnected. Reconnect to resume data sync.</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sync History */}
        <div className="card bg-base-100 shadow-lg border border-base-300">
          <div className="card-body">
            <h2 className="card-title">
              <Clock className="w-5 h-5 text-secondary mr-2" />
              Recent Sync Activity
            </h2>
            
            <div className="overflow-x-auto">
              <table className="table table-zebra table-sm">
                <thead>
                  <tr>
                    <th>Device</th>
                    <th>Data Type</th>
                    <th>Sync Time</th>
                    <th>Records</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">⌚</span>
                        <span className="text-sm">Apple Watch</span>
                      </div>
                    </td>
                    <td>Heart Rate</td>
                    <td>2 min ago</td>
                    <td>1,440 readings</td>
                    <td><div className="badge badge-success badge-xs">Success</div></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">📱</span>
                        <span className="text-sm">iPhone Health</span>
                      </div>
                    </td>
                    <td>Steps</td>
                    <td>5 min ago</td>
                    <td>8,240 steps</td>
                    <td><div className="badge badge-success badge-xs">Success</div></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">🩺</span>
                        <span className="text-sm">BP Monitor</span>
                      </div>
                    </td>
                    <td>Blood Pressure</td>
                    <td>1 hour ago</td>
                    <td>1 reading</td>
                    <td><div className="badge badge-success badge-xs">Success</div></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">🏃</span>
                        <span className="text-sm">Fitbit Charge</span>
                      </div>
                    </td>
                    <td>Sleep Data</td>
                    <td>2 days ago</td>
                    <td>0 records</td>
                    <td><div className="badge badge-error badge-xs">Failed</div></td>
                  </tr>
                </tbody>
              </table>
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

      {/* Connect New Device Modal */}
      {showConnectModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Connect New Device</h3>
            
            <div className="space-y-4">
              {availableDevices.map((device) => (
                <div key={device.id} className="card bg-base-200 hover:bg-base-300 cursor-pointer transition-colors">
                  <div className="card-body p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{device.icon}</span>
                        <div>
                          <h4 className="font-semibold">{device.name}</h4>
                          <p className="text-sm text-base-content/70">{device.brand} • {device.type}</p>
                        </div>
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
              <Button variant="outline" onClick={() => setShowConnectModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setShowConnectModal(false)}></div>
        </div>
      )}

      {/* Disconnect Device Modal */}
      {showDisconnectModal && selectedDevice && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Disconnect Device</h3>
            
            <div className="alert alert-warning mb-4">
              <AlertTriangle className="w-5 h-5" />
              <div>
                <div className="font-semibold">Are you sure?</div>
                <div className="text-sm">
                  Disconnecting {selectedDevice.name} will stop data synchronization. 
                  You can reconnect it later.
                </div>
              </div>
            </div>

            <div className="modal-action">
              <Button variant="outline" onClick={() => setShowDisconnectModal(false)}>
                Cancel
              </Button>
              <Button variant="outline" onClick={handleDisconnectDevice} className="btn-error">
                <Trash2 className="w-4 h-4 mr-2" />
                Disconnect
              </Button>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setShowDisconnectModal(false)}></div>
        </div>
      )}
    </div>
  );
}
