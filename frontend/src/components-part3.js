import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Death Trigger Configuration Component
export const DeathTriggerConfig = ({ user }) => {
  const [triggers, setTriggers] = useState([]);
  const [activeTab, setActiveTab] = useState('manual');
  const [testMode, setTestMode] = useState(false);

  useEffect(() => {
    setTriggers([
      {
        id: 1,
        type: 'manual',
        name: 'Family Member Activation',
        description: 'Designated family member can trigger the estate plan',
        status: 'active',
        lastChecked: '2025-01-15'
      },
      {
        id: 2,
        type: 'timer',
        name: 'Inactivity Timer',
        description: 'Triggers after 90 days of no activity',
        status: 'active',
        lastChecked: '2025-01-15'
      },
      {
        id: 3,
        type: 'api',
        name: 'Death Certificate API',
        description: 'Monitors government death records',
        status: 'inactive',
        lastChecked: null
      }
    ]);
  }, []);

  const handleTestTrigger = () => {
    setTestMode(true);
    setTimeout(() => {
      alert('Test trigger activated successfully! All systems operational.');
      setTestMode(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Death Trigger Configuration</h1>
          <p className="text-gray-600">
            Configure automated systems that will activate your estate plan when needed
          </p>
        </div>

        {/* Warning Banner */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <div className="flex items-start">
            <div className="text-yellow-400 text-xl mr-3">⚠️</div>
            <div>
              <h3 className="font-medium text-yellow-900 mb-1">Important Configuration</h3>
              <p className="text-sm text-yellow-800">
                These triggers will automatically activate your estate plan and notify heirs. 
                Please configure carefully and test regularly.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {[
                { id: 'manual', name: 'Manual Triggers', icon: '👥' },
                { id: 'automatic', name: 'Automatic Triggers', icon: '🤖' },
                { id: 'testing', name: 'Testing & Monitoring', icon: '🔍' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'manual' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Manual Trigger Methods</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-gray-900">👥 Trusted Contacts</h4>
                      <span className="text-green-600 text-sm bg-green-100 px-2 py-1 rounded">Active</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Designated family members or friends who can activate your estate plan
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm">
                        <span className="font-medium">Primary:</span> Sarah Doe (Sister)
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Secondary:</span> Michael Smith (Friend)
                      </div>
                    </div>
                    <button className="text-blue-600 text-sm hover:text-blue-700">
                      Manage Contacts →
                    </button>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-gray-900">🔑 Emergency Code</h4>
                      <span className="text-green-600 text-sm bg-green-100 px-2 py-1 rounded">Active</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      A secure code that can be used to immediately trigger the estate plan
                    </p>
                    <div className="bg-gray-100 rounded p-2 mb-4 font-mono text-sm">
                      ****-****-****
                    </div>
                    <button className="text-blue-600 text-sm hover:text-blue-700">
                      Regenerate Code →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'automatic' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Automatic Trigger Systems</h3>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">⏰</span>
                        <div>
                          <h4 className="font-medium text-gray-900">Inactivity Timer</h4>
                          <p className="text-sm text-gray-600">Triggers after extended periods of no activity</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <label className="block text-gray-700 mb-1">Inactivity Period</label>
                        <select className="w-full border border-gray-300 rounded px-3 py-2">
                          <option>30 days</option>
                          <option>60 days</option>
                          <option selected>90 days</option>
                          <option>180 days</option>
                          <option>1 year</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1">Warning Period</label>
                        <select className="w-full border border-gray-300 rounded px-3 py-2">
                          <option>7 days</option>
                          <option selected>14 days</option>
                          <option>30 days</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🏛️</span>
                        <div>
                          <h4 className="font-medium text-gray-900">Death Certificate API</h4>
                          <p className="text-sm text-gray-600">Monitors government death records</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mb-4">
                      <p className="text-xs text-yellow-800">
                        ⚠️ This feature requires additional verification and may not be available in all jurisdictions
                      </p>
                    </div>
                    <button className="text-blue-600 text-sm hover:text-blue-700">
                      Configure API Access →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'testing' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Testing & Monitoring</h3>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-medium text-blue-900 mb-2">🧪 Test Your Triggers</h4>
                  <p className="text-sm text-blue-800 mb-4">
                    Regularly test your trigger systems to ensure they work when needed
                  </p>
                  <button
                    onClick={handleTestTrigger}
                    disabled={testMode}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50"
                  >
                    {testMode ? 'Testing...' : 'Run Test Sequence'}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">📊 System Status</h4>
                    <div className="space-y-3">
                      {triggers.map((trigger) => (
                        <div key={trigger.id} className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">{trigger.name}</span>
                          <span className={`text-xs px-2 py-1 rounded ${
                            trigger.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {trigger.status === 'active' ? '✅ Active' : '❌ Inactive'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">📅 Last Test Results</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Manual Triggers</span>
                        <span className="text-green-600">✅ Passed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Inactivity Timer</span>
                        <span className="text-green-600">✅ Passed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Notifications</span>
                        <span className="text-green-600">✅ Passed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Last Test Run</span>
                        <span className="text-gray-500">Jan 10, 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200">
            Save Configuration
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700">
            Activate All Triggers
          </button>
        </div>
      </div>
    </div>
  );
};

// Heir Management Component
export const HeirManagement = ({ user }) => {
  const [heirs, setHeirs] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    setHeirs([
      {
        id: 1,
        name: 'Sarah Doe',
        relationship: 'Sister',
        email: 'sarah@example.com',
        phone: '+1 (555) 123-4567',
        role: 'Primary Beneficiary',
        percentage: 60,
        documents: ['Will', 'Life Insurance'],
        status: 'verified',
        dateAdded: '2025-01-10'
      },
      {
        id: 2,
        name: 'Michael Doe',
        relationship: 'Son',
        email: 'michael@example.com',
        phone: '+1 (555) 987-6543',
        role: 'Primary Beneficiary',
        percentage: 30,
        documents: ['Will', 'Trust Fund'],
        status: 'pending',
        dateAdded: '2025-01-12'
      },
      {
        id: 3,
        name: 'Children\'s Hospital',
        relationship: 'Charity',
        email: 'donations@childrenshospital.org',
        phone: '+1 (555) 246-8135',
        role: 'Charitable Beneficiary',
        percentage: 10,
        documents: ['Will'],
        status: 'verified',
        dateAdded: '2025-01-15'
      }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Heir Management</h1>
            <p className="text-gray-600 mt-2">
              Manage beneficiaries and configure their access to your estate
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center space-x-2"
          >
            <span>👥</span>
            <span>Add Heir</span>
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Heirs</p>
                <p className="text-2xl font-bold text-gray-900">{heirs.length}</p>
              </div>
              <div className="text-2xl">👥</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Verified</p>
                <p className="text-2xl font-bold text-gray-900">
                  {heirs.filter(h => h.status === 'verified').length}
                </p>
              </div>
              <div className="text-2xl">✅</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">
                  {heirs.filter(h => h.status === 'pending').length}
                </p>
              </div>
              <div className="text-2xl">⏳</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Allocation</p>
                <p className="text-2xl font-bold text-gray-900">
                  {heirs.reduce((sum, heir) => sum + heir.percentage, 0)}%
                </p>
              </div>
              <div className="text-2xl">📊</div>
            </div>
          </div>
        </div>

        {/* Heirs List */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Beneficiaries & Heirs</h3>
          </div>
          
          {heirs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No heirs configured</h3>
              <p className="text-gray-600 mb-4">Add your first beneficiary to get started</p>
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Add Heir
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {heirs.map((heir) => (
                <div key={heir.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {heir.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <h4 className="font-semibold text-gray-900">{heir.name}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            heir.status === 'verified' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {heir.status === 'verified' ? '✅ Verified' : '⏳ Pending'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{heir.relationship} • {heir.role}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>📧 {heir.email}</span>
                          <span>📱 {heir.phone}</span>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">Documents:</span>
                            {heir.documents.map((doc, index) => (
                              <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                {doc}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{heir.percentage}%</div>
                        <div className="text-xs text-gray-500">of estate</div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Distribution Chart */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Estate Distribution</h3>
          <div className="space-y-3">
            {heirs.map((heir) => (
              <div key={heir.id} className="flex items-center space-x-3">
                <div className="w-32 text-sm text-gray-700">{heir.name}</div>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                    style={{ width: `${heir.percentage}%` }}
                  ></div>
                </div>
                <div className="w-12 text-sm text-gray-600 text-right">{heir.percentage}%</div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">Total Allocated:</span>
              <span className={`font-bold ${
                heirs.reduce((sum, heir) => sum + heir.percentage, 0) === 100 
                  ? 'text-green-600' 
                  : 'text-yellow-600'
              }`}>
                {heirs.reduce((sum, heir) => sum + heir.percentage, 0)}%
              </span>
            </div>
            {heirs.reduce((sum, heir) => sum + heir.percentage, 0) !== 100 && (
              <p className="text-sm text-yellow-600 mt-1">
                ⚠️ Total allocation should equal 100%
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile Settings Component
export const ProfileSettings = ({ user }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [biometricEnabled, setBiometricEnabled] = useState(user?.biometricEnabled || false);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile & Settings</h1>
          <p className="text-gray-600">Manage your account and security preferences</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {[
                { id: 'profile', name: 'Profile', icon: '👤' },
                { id: 'security', name: 'Security', icon: '🔒' },
                { id: 'notifications', name: 'Notifications', icon: '🔔' },
                { id: 'billing', name: 'Billing', icon: '💳' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue={user?.name?.split(' ')[0] || ''}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue={user?.name?.split(' ')[1] || ''}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue={user?.email || ''}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <textarea
                      rows={3}
                      placeholder="Enter your full address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Jurisdiction</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option value="California, USA" selected>California, USA</option>
                      <option value="New York, USA">New York, USA</option>
                      <option value="Texas, USA">Texas, USA</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Security Settings</h3>

                {/* Biometric Authentication */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-medium text-gray-900">🧬 Biometric Authentication</h4>
                      <p className="text-sm text-gray-600">Use fingerprint or face recognition for secure access</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={biometricEnabled}
                        onChange={(e) => setBiometricEnabled(e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  {biometricEnabled && (
                    <button className="text-blue-600 text-sm hover:text-blue-700">
                      Configure Biometric Settings →
                    </button>
                  )}
                </div>

                {/* Password Change */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-4">🔑 Change Password</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                      Update Password
                    </button>
                  </div>
                </div>

                {/* Encryption Status */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-4">🔐 Encryption Status</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Document Encryption</span>
                      <span className="text-green-600 text-sm bg-green-100 px-2 py-1 rounded">AES-256 ✅</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Data Transmission</span>
                      <span className="text-green-600 text-sm bg-green-100 px-2 py-1 rounded">TLS 1.3 ✅</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Post-Quantum</span>
                      <span className="text-green-600 text-sm bg-green-100 px-2 py-1 rounded">Kyber ✅</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Notification Preferences</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <h4 className="font-medium text-gray-900">Email Notifications</h4>
                      <p className="text-sm text-gray-600">Receive updates about your estate plan</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <h4 className="font-medium text-gray-900">Compliance Alerts</h4>
                      <p className="text-sm text-gray-600">Get notified when laws change in your jurisdiction</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <h4 className="font-medium text-gray-900">Security Alerts</h4>
                      <p className="text-sm text-gray-600">Important security notifications</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div>
                      <h4 className="font-medium text-gray-900">Marketing Updates</h4>
                      <p className="text-sm text-gray-600">Product updates and estate planning tips</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Billing & Subscription</h3>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Current Plan</h4>
                      <p className="text-sm text-gray-600">Professional Estate Planning</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">$29.99</div>
                      <div className="text-sm text-gray-500">per month</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <span className="text-gray-600">Next billing date:</span>
                      <div className="font-medium">February 15, 2025</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Payment method:</span>
                      <div className="font-medium">•••• •••• •••• 4242</div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                      Upgrade Plan
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                      Update Payment
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-4">Billing History</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div>
                        <div className="font-medium text-sm">January 2025</div>
                        <div className="text-xs text-gray-500">Professional Plan</div>
                      </div>
                      <div className="text-sm font-medium">$29.99</div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div>
                        <div className="font-medium text-sm">December 2024</div>
                        <div className="text-xs text-gray-500">Professional Plan</div>
                      </div>
                      <div className="text-sm font-medium">$29.99</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Grief Companion Component
export const GriefCompanion = ({ user }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello, I\'m here to provide support during this difficult time. How are you feeling today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: 'I understand this is a challenging time. Grief is a natural process, and it\'s important to allow yourself to feel these emotions. Would you like to talk about a specific memory or concern?',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Grief Companion</h1>
          <p className="text-gray-600">
            Compassionate support during difficult times with memory playback and guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm h-96 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">💜</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Compassionate AI</h3>
                    <p className="text-sm text-gray-500">Here to listen and support you</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 px-4 py-2 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Share your thoughts or feelings..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Support Resources */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">💝 Support Resources</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-purple-100">
                  <div className="font-medium text-purple-900">Memory Playback</div>
                  <div className="text-sm text-purple-700">Access stored memories and messages</div>
                </button>
                <button className="w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100">
                  <div className="font-medium text-blue-900">Guided Meditation</div>
                  <div className="text-sm text-blue-700">Calming exercises for healing</div>
                </button>
                <button className="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100">
                  <div className="font-medium text-green-900">Grief Journal</div>
                  <div className="text-sm text-green-700">Express your feelings in writing</div>
                </button>
              </div>
            </div>

            {/* Crisis Support */}
            <div className="bg-red-50 border border-red-200 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-4">🆘 Crisis Support</h3>
              <p className="text-sm text-red-800 mb-4">
                If you're in crisis or need immediate support, please reach out:
              </p>
              <div className="space-y-2 text-sm">
                <div className="font-medium text-red-900">Crisis Text Line</div>
                <div className="text-red-700">Text HOME to 741741</div>
                <div className="font-medium text-red-900 mt-3">National Suicide Prevention</div>
                <div className="text-red-700">988 or 1-800-273-8255</div>
              </div>
            </div>

            {/* AI Capabilities */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🤖 AI Features</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700">24/7 Availability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700">Emotion Recognition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700">Personalized Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700">Memory Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700">Professional Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};