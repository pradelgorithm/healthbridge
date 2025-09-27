'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Shield, 
  Check, 
  X, 
  Plus,
  Search,
  Clock,
  AlertTriangle,
  Heart,
  Settings,
  Mail,
  Phone,
  Calendar,
  Eye
} from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

interface ProvidersPageProps {
  params: Promise<{
    profileId: string;
  }>;
}

export default function ProvidersPage({ params }: ProvidersPageProps) {
  const resolvedParams = React.use(params);
  const [searchTerm, setSearchTerm] = useState('');
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [newProviderEmail, setNewProviderEmail] = useState('');

  // Mock approved providers
  const [approvedProviders, setApprovedProviders] = useState([
    {
      id: 'prov-001',
      name: 'Dr. Sarah Johnson',
      specialty: 'Family Medicine',
      practice: 'Orlando Family Medical Center',
      email: 'sarah.johnson@ofmc.com',
      phone: '(407) 555-0123',
      address: '123 Health St, Orlando, FL 32801',
      approvedDate: '2024-01-15',
      lastAccess: '2 hours ago',
      accessLevel: 'full',
      upcomingAppointment: '2024-01-25 10:00 AM',
      dataShared: ['Heart Rate', 'Blood Pressure', 'Sleep', 'Activity', 'Weight'],
      status: 'active'
    },
    {
      id: 'prov-002', 
      name: 'Dr. Michael Chen',
      specialty: 'Cardiology',
      practice: 'Heart Health Specialists',
      email: 'michael.chen@heartspecialists.com',
      phone: '(407) 555-0456',
      address: '456 Cardiac Ave, Orlando, FL 32802',
      approvedDate: '2024-01-10',
      lastAccess: '1 day ago',
      accessLevel: 'limited',
      upcomingAppointment: null,
      dataShared: ['Heart Rate', 'Blood Pressure', 'ECG'],
      status: 'active'
    }
  ]);

  // Mock pending invitations
  const [pendingInvitations, setPendingInvitations] = useState([
    {
      id: 'invite-001',
      providerName: 'Dr. Emily Rodriguez',
      specialty: 'Endocrinology',
      practice: 'Diabetes Care Center',
      email: 'emily.rodriguez@diabetescare.com',
      sentDate: '2024-01-20',
      expiresDate: '2024-01-27',
      requestedAccess: ['Blood Glucose', 'Weight', 'Activity', 'Diet'],
      status: 'pending'
    }
  ]);

  const handleApproveProvider = (providerId: string) => {
    // Mock approval logic
    console.log('Approving provider:', providerId);
  };

  const handleRevokeAccess = (providerId: string) => {
    setApprovedProviders(prev => prev.filter(p => p.id !== providerId));
  };

  const handleInviteProvider = () => {
    if (newProviderEmail) {
      // Mock invite logic
      const newInvite = {
        id: `invite-${Date.now()}`,
        providerName: 'New Provider',
        specialty: 'General Practice',
        practice: 'Medical Center',
        email: newProviderEmail,
        sentDate: new Date().toISOString().split('T')[0],
        expiresDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        requestedAccess: ['Basic Health Data'],
        status: 'pending'
      };
      setPendingInvitations(prev => [...prev, newInvite]);
      setNewProviderEmail('');
      setShowInviteModal(false);
    }
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
          <Button variant="primary" size="sm" onClick={() => setShowInviteModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Invite Provider
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-base-content mb-4">
            <span className="gradient-text">Provider Access</span> Management
          </h1>
          <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
            Control which healthcare providers can access your health data. 
            Manage permissions and monitor access activity.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div className="stat bg-base-100 border border-base-300 rounded-box">
            <div className="stat-figure text-success">
              <Shield className="w-8 h-8" />
            </div>
            <div className="stat-title">Approved Providers</div>
            <div className="stat-value text-success">{approvedProviders.length}</div>
            <div className="stat-desc">Active access</div>
          </div>
          
          <div className="stat bg-base-100 border border-base-300 rounded-box">
            <div className="stat-figure text-warning">
              <Clock className="w-8 h-8" />
            </div>
            <div className="stat-title">Pending Invites</div>
            <div className="stat-value text-warning">{pendingInvitations.length}</div>
            <div className="stat-desc">Awaiting response</div>
          </div>
          
          <div className="stat bg-base-100 border border-base-300 rounded-box">
            <div className="stat-figure text-primary">
              <Calendar className="w-8 h-8" />
            </div>
            <div className="stat-title">Next Appointment</div>
            <div className="stat-value text-primary text-lg">Jan 25</div>
            <div className="stat-desc">Dr. Johnson</div>
          </div>
        </div>

        {/* Approved Providers */}
        <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
          <div className="card-body">
            <div className="flex items-center justify-between mb-6">
              <h2 className="card-title">
                <Shield className="w-5 h-5 text-success mr-2" />
                Approved Healthcare Providers
              </h2>
              <div className="form-control">
                <div className="input-group input-group-sm">
                  <input
                    type="text"
                    placeholder="Search providers..."
                    className="input input-bordered input-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="btn btn-square btn-sm">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {approvedProviders.map((provider) => (
                <div key={provider.id} className="card bg-base-200 border border-base-300">
                  <div className="card-body p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="avatar placeholder">
                          <div className="bg-success text-success-content rounded-full w-12 icon-center text-sm font-bold">
                            {provider.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-bold text-base-content">{provider.name}</h3>
                          <p className="text-sm text-base-content/70">{provider.specialty}</p>
                          <p className="text-sm text-base-content/60">{provider.practice}</p>
                          
                          <div className="flex items-center space-x-4 mt-2 text-xs text-base-content/60">
                            <div className="flex items-center">
                              <Mail className="w-3 h-3 mr-1" />
                              {provider.email}
                            </div>
                            <div className="flex items-center">
                              <Phone className="w-3 h-3 mr-1" />
                              {provider.phone}
                            </div>
                          </div>
                          
                          {provider.upcomingAppointment && (
                            <div className="alert alert-info alert-sm mt-3">
                              <Calendar className="w-4 h-4" />
                              <span>Next appointment: {provider.upcomingAppointment}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-2">
                        <div className="badge badge-success badge-sm">
                          {provider.accessLevel} access
                        </div>
                        <div className="text-xs text-base-content/60">
                          Last access: {provider.lastAccess}
                        </div>
                        
                        <div className="dropdown dropdown-end">
                          <div tabIndex={0} role="button" className="btn btn-ghost btn-xs">
                            <Settings className="w-3 h-3" />
                          </div>
                          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-48 p-2 shadow-lg border border-base-300">
                            <li><a><Eye className="w-4 h-4" />View Permissions</a></li>
                            <li><a><Settings className="w-4 h-4" />Modify Access</a></li>
                            <li><a><Calendar className="w-4 h-4" />Schedule Appointment</a></li>
                            <li className="divider"></li>
                            <li>
                              <a className="text-error" onClick={() => handleRevokeAccess(provider.id)}>
                                <X className="w-4 h-4" />Revoke Access
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Shared Data Types */}
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2">Shared Data:</h4>
                      <div className="flex flex-wrap gap-1">
                        {provider.dataShared.map((dataType, index) => (
                          <div key={index} className="badge badge-outline badge-xs">
                            {dataType}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pending Invitations */}
        {pendingInvitations.length > 0 && (
          <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
            <div className="card-body">
              <h2 className="card-title">
                <Clock className="w-5 h-5 text-warning mr-2" />
                Pending Provider Invitations
              </h2>
              
              <div className="space-y-4">
                {pendingInvitations.map((invitation) => (
                  <div key={invitation.id} className="card bg-warning/10 border border-warning/30">
                    <div className="card-body p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="avatar placeholder">
                            <div className="bg-warning text-warning-content rounded-full w-10 icon-center text-sm font-bold">
                              {invitation.providerName.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="font-bold text-base-content">{invitation.providerName}</h3>
                            <p className="text-sm text-base-content/70">{invitation.specialty}</p>
                            <p className="text-sm text-base-content/60">{invitation.practice}</p>
                            <p className="text-xs text-base-content/60 mt-1">
                              Sent: {invitation.sentDate} • Expires: {invitation.expiresDate}
                            </p>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button 
                            variant="secondary" 
                            size="sm"
                            onClick={() => handleApproveProvider(invitation.id)}
                          >
                            <Check className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button variant="outline" size="sm">
                            <X className="w-4 h-4 mr-1" />
                            Decline
                          </Button>
                        </div>
                      </div>
                      
                      {/* Requested Access */}
                      <div className="mt-3">
                        <h4 className="text-sm font-semibold mb-2">Requested Data Access:</h4>
                        <div className="flex flex-wrap gap-1">
                          {invitation.requestedAccess.map((dataType, index) => (
                            <div key={index} className="badge badge-warning badge-xs">
                              {dataType}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Access Permissions Management */}
        <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
          <div className="card-body">
            <h2 className="card-title">
              <Settings className="w-5 h-5 text-primary mr-2" />
              Data Sharing Permissions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Default Permissions */}
              <div>
                <h3 className="font-semibold mb-4">Default Provider Access</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Heart Rate', enabled: true, icon: <Heart className="w-4 h-4 text-error" /> },
                    { name: 'Blood Pressure', enabled: true, icon: <Heart className="w-4 h-4 text-primary" /> },
                    { name: 'Sleep Data', enabled: false, icon: <Clock className="w-4 h-4 text-accent" /> },
                    { name: 'Activity/Steps', enabled: true, icon: <Settings className="w-4 h-4 text-secondary" /> },
                    { name: 'Weight', enabled: false, icon: <Settings className="w-4 h-4 text-warning" /> },
                    { name: 'Medication', enabled: false, icon: <Settings className="w-4 h-4 text-info" /> }
                  ].map((permission, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {permission.icon}
                        <span className="text-sm font-medium">{permission.name}</span>
                      </div>
                      <input 
                        type="checkbox" 
                        className="toggle toggle-primary toggle-sm" 
                        defaultChecked={permission.enabled}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Access */}
              <div>
                <h3 className="font-semibold mb-4">Emergency Access Settings</h3>
                <div className="space-y-3">
                  <div className="alert alert-warning">
                    <AlertTriangle className="w-5 h-5" />
                    <div>
                      <h4 className="font-semibold">Emergency Override</h4>
                      <p className="text-sm">Allow emergency responders to access critical health data</p>
                    </div>
                    <input type="checkbox" className="toggle toggle-warning toggle-sm" defaultChecked />
                  </div>
                  
                  <div className="card bg-base-200">
                    <div className="card-body p-4">
                      <h4 className="font-semibold text-sm mb-3">Emergency Contacts</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Jane Doe (Spouse)</span>
                          <div className="badge badge-success badge-xs">Full Access</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Emergency Services</span>
                          <div className="badge badge-error badge-xs">Critical Only</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Access Activity */}
        <div className="card bg-base-100 shadow-lg border border-base-300">
          <div className="card-body">
            <h2 className="card-title">
              <Eye className="w-5 h-5 text-info mr-2" />
              Recent Access Activity
            </h2>
            
            <div className="overflow-x-auto">
              <table className="table table-zebra table-sm">
                <thead>
                  <tr>
                    <th>Provider</th>
                    <th>Data Accessed</th>
                    <th>Access Time</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-2">
                        <div className="avatar placeholder">
                          <div className="bg-success text-success-content rounded-full w-6 icon-center text-xs">
                            SJ
                          </div>
                        </div>
                        <span className="text-sm">Dr. Sarah Johnson</span>
                      </div>
                    </td>
                    <td>Heart Rate, Blood Pressure</td>
                    <td>2 hours ago</td>
                    <td>
                      <div className="badge badge-info badge-xs">Routine Review</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-2">
                        <div className="avatar placeholder">
                          <div className="bg-primary text-primary-content rounded-full w-6 icon-center text-xs">
                            MC
                          </div>
                        </div>
                        <span className="text-sm">Dr. Michael Chen</span>
                      </div>
                    </td>
                    <td>ECG Data, Heart Rate</td>
                    <td>1 day ago</td>
                    <td>
                      <div className="badge badge-warning badge-xs">Follow-up</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-2">
                        <div className="avatar placeholder">
                          <div className="bg-success text-success-content rounded-full w-6 icon-center text-xs">
                            SJ
                          </div>
                        </div>
                        <span className="text-sm">Dr. Sarah Johnson</span>
                      </div>
                    </td>
                    <td>Complete Health Profile</td>
                    <td>3 days ago</td>
                    <td>
                      <div className="badge badge-success badge-xs">Appointment Prep</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Invite Provider Modal */}
      {showInviteModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Invite Healthcare Provider</h3>
            
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Provider Email Address</span>
              </label>
              <input
                type="email"
                placeholder="doctor@practice.com"
                className="input input-bordered"
                value={newProviderEmail}
                onChange={(e) => setNewProviderEmail(e.target.value)}
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Access Level</span>
              </label>
              <select className="select select-bordered">
                <option>Limited Access (Basic vitals only)</option>
                <option>Standard Access (Most health data)</option>
                <option>Full Access (All health data)</option>
              </select>
            </div>

            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">Message (Optional)</span>
              </label>
              <textarea 
                className="textarea textarea-bordered" 
                placeholder="Hi Dr. Smith, I'd like to share my health data with you for our upcoming appointment..."
              ></textarea>
            </div>

            <div className="modal-action">
              <Button 
                variant="outline" 
                onClick={() => setShowInviteModal(false)}
              >
                Cancel
              </Button>
              <Button 
                variant="primary" 
                onClick={handleInviteProvider}
                disabled={!newProviderEmail}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Invitation
              </Button>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setShowInviteModal(false)}></div>
        </div>
      )}
    </div>
  );
}
