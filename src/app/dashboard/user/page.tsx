'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Plus, User, Baby, Heart, Settings, LogOut } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

export default function UserDashboard() {
  const router = useRouter();
  const [profiles] = useState([
    {
      id: '1',
      name: 'John Doe',
      avatar: 'JD',
      role: 'primary',
      age: 35,
      lastSync: '2 min ago',
      healthStatus: 'good',
      devices: ['Apple Watch', 'iPhone Health'],
      recentMetrics: {
        heartRate: 72,
        steps: 8240,
        sleep: '7.5h'
      }
    },
    {
      id: '2',
      name: 'Jane Doe',
      avatar: 'JA',
      role: 'spouse',
      age: 32,
      lastSync: '5 min ago',
      healthStatus: 'excellent',
      devices: ['Fitbit', 'Samsung Health'],
      recentMetrics: {
        heartRate: 68,
        steps: 10420,
        sleep: '8.2h'
      }
    },
    {
      id: '3',
      name: 'Emma Doe',
      avatar: 'EM',
      role: 'child',
      age: 8,
      lastSync: '1 hour ago',
      healthStatus: 'good',
      devices: ['Kids Fitbit'],
      recentMetrics: {
        heartRate: 85,
        steps: 6240,
        sleep: '9.5h'
      }
    },
    {
      id: '4',
      name: 'Robert Doe Sr.',
      avatar: 'RD',
      role: 'parent',
      age: 68,
      lastSync: '15 min ago',
      healthStatus: 'needs-attention',
      devices: ['Apple Watch', 'Blood Pressure Monitor'],
      recentMetrics: {
        heartRate: 78,
        steps: 4820,
        sleep: '6.8h'
      }
    }
  ]);


  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'excellent': return 'badge-success';
      case 'good': return 'badge-info';
      case 'needs-attention': return 'badge-warning';
      case 'critical': return 'badge-error';
      default: return 'badge-neutral';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'primary': return <User className="w-4 h-4" />;
      case 'spouse': return <Heart className="w-4 h-4" />;
      case 'child': return <Baby className="w-4 h-4" />;
      case 'parent': return <User className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  const handleSignOut = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-100" data-theme="healthbridge">
      {/* Header */}
      <header className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-300">
        <div className="navbar-start">
          <Logo size="sm" />
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <Settings className="w-5 h-5" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-base-300">
              <li><a><Settings className="w-4 h-4" />Account Settings</a></li>
              <li><a><Heart className="w-4 h-4" />Health Preferences</a></li>
              <li><a onClick={handleSignOut} className="text-error"><LogOut className="w-4 h-4" />Sign Out</a></li>
            </ul>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-base-200 border-b border-base-300">
        <div className="container mx-auto px-4 py-3">
          <div className="breadcrumbs text-sm">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><span>Dashboard</span></li>
              <li><span>Family Profiles</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-base-content mb-4">
            Who&apos;s tracking their health today?
          </h1>
          <p className="text-base-content/70 text-lg">
            Select a profile to view their health dashboard
          </p>
        </div>

        {/* Profile Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {profiles.map((profile) => (
            <Link key={profile.id} href={`/dashboard/user/${profile.id}`}>
              <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-base-300 hover:border-primary/50 group">
                <div className="card-body p-6 text-center">
                  {/* Avatar */}
                  <div className="avatar placeholder mb-4">
                    <div className="bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full w-20 icon-center text-xl font-bold">
                      {profile.avatar}
                    </div>
                  </div>

                  {/* Profile Info */}
                  <h3 className="card-title text-lg justify-center mb-2">
                    {profile.name}
                  </h3>
                  
                  {/* Role & Age */}
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="badge badge-outline badge-sm">
                      {getRoleIcon(profile.role)}
                      <span className="ml-1 capitalize">{profile.role}</span>
                    </div>
                    <div className="badge badge-ghost badge-sm">
                      {profile.age} years
                    </div>
                  </div>

                  {/* Health Status */}
                  <div className="mb-4">
                    <div className={`badge ${getStatusBadge(profile.healthStatus)} badge-sm`}>
                      {profile.healthStatus.replace('-', ' ')}
                    </div>
                  </div>

                  {/* Quick Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className="font-bold text-primary">{profile.recentMetrics.heartRate}</div>
                      <div className="text-base-content/60">BPM</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-secondary">{profile.recentMetrics.steps.toLocaleString()}</div>
                      <div className="text-base-content/60">Steps</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-accent">{profile.recentMetrics.sleep}</div>
                      <div className="text-base-content/60">Sleep</div>
                    </div>
                  </div>

                  {/* Last Sync */}
                  <div className="mt-4 text-xs text-base-content/60">
                    Last sync: {profile.lastSync}
                  </div>

                  {/* Connected Devices */}
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {profile.devices.map((device, index) => (
                        <div key={index} className="badge badge-ghost badge-xs">
                          {device}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Add Profile Card */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-dashed border-base-300 hover:border-primary/50 group">
            <div className="card-body p-6 text-center flex items-center justify-center">
              <div className="avatar placeholder mb-4">
                <div className="bg-base-200 text-base-content/60 rounded-full w-20 icon-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <Plus className="w-8 h-8" />
                </div>
              </div>
              <h3 className="card-title text-lg justify-center text-base-content/70 group-hover:text-primary transition-colors">
                Add Family Member
              </h3>
              <p className="text-sm text-base-content/60 mt-2">
                Create a new health profile
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <div className="card bg-base-100 shadow-lg border border-base-300 max-w-2xl mx-auto">
            <div className="card-body">
              <h3 className="card-title justify-center mb-4">
                Quick Actions
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <Button variant="outline" className="flex flex-col h-auto py-4">
                  <Plus className="w-6 h-6 mb-2" />
                  <span>Connect Device</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto py-4">
                  <Settings className="w-6 h-6 mb-2" />
                  <span>Manage Sharing</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto py-4">
                  <Heart className="w-6 h-6 mb-2" />
                  <span>Health Report</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Family Health Summary */}
        <div className="mt-12">
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="card-title justify-center mb-6">
                Family Health Overview
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <Heart className="w-8 h-8" />
                  </div>
                  <div className="stat-title">Total Active Profiles</div>
                  <div className="stat-value text-primary">{profiles.length}</div>
                  <div className="stat-desc">All family members</div>
                </div>
                
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <User className="w-8 h-8" />
                  </div>
                  <div className="stat-title">Devices Connected</div>
                  <div className="stat-value text-secondary">7</div>
                  <div className="stat-desc">Across all profiles</div>
                </div>
                
                <div className="stat">
                  <div className="stat-figure text-accent">
                    <Settings className="w-8 h-8" />
                  </div>
                  <div className="stat-title">Data Points Today</div>
                  <div className="stat-value text-accent">2.4k</div>
                  <div className="stat-desc">Health measurements</div>
                </div>
                
                <div className="stat">
                  <div className="stat-figure text-success">
                    <Heart className="w-8 h-8" />
                  </div>
                  <div className="stat-title">Health Score</div>
                  <div className="stat-value text-success">92%</div>
                  <div className="stat-desc">Family average</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
