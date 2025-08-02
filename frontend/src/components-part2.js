import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Smart Will Builder Component
export const SmartWillBuilder = ({ user }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [willData, setWillData] = useState({
    personalInfo: {
      fullName: user?.name || '',
      dateOfBirth: '',
      address: '',
      maritalStatus: '',
      children: []
    },
    assets: {
      realEstate: [],
      vehicles: [],
      bankAccounts: [],
      investments: [],
      personalProperty: []
    },
    beneficiaries: [],
    executors: [],
    guardians: [],
    specialInstructions: '',
    digitalAssets: []
  });
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [complianceCheck, setComplianceCheck] = useState(null);
  const [loading, setLoading] = useState(false);

  const steps = [
    { id: 1, title: 'Personal Information', icon: '👤' },
    { id: 2, title: 'Assets & Property', icon: '🏠' },
    { id: 3, title: 'Beneficiaries', icon: '👥' },
    { id: 4, title: 'Executors & Guardians', icon: '⚖️' },
    { id: 5, title: 'Digital Assets', icon: '💻' },
    { id: 6, title: 'Special Instructions', icon: '📝' },
    { id: 7, title: 'Review & Generate', icon: '✅' }
  ];

  useEffect(() => {
    // Simulate AI compliance checking
    if (currentStep > 1) {
      setLoading(true);
      setTimeout(() => {
        setComplianceCheck({
          status: 'compliant',
          message: `Your will meets ${user?.jurisdiction} requirements`,
          suggestions: [
            'Consider adding a digital asset executor',
            'Ensure all property addresses are complete',
            'Review beneficiary percentages (should total 100%)'
          ]
        });
        setLoading(false);
      }, 1000);
    }
  }, [currentStep, user?.jurisdiction]);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateWill = () => {
    setLoading(true);
    setTimeout(() => {
      alert('Will generated successfully! Check your vault for the document.');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Smart Will Builder</h1>
          <p className="text-gray-600">
            Create a legally compliant will with AI guidance for {user?.jurisdiction}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold mb-2 ${
                  currentStep >= step.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step.icon}
                </div>
                <span className="text-xs text-gray-600 text-center">{step.title}</span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-8">
              {currentStep === 1 && <PersonalInfoStep willData={willData} setWillData={setWillData} />}
              {currentStep === 2 && <AssetsStep willData={willData} setWillData={setWillData} />}
              {currentStep === 3 && <BeneficiariesStep willData={willData} setWillData={setWillData} />}
              {currentStep === 4 && <ExecutorsStep willData={willData} setWillData={setWillData} />}
              {currentStep === 5 && <DigitalAssetsStep willData={willData} setWillData={setWillData} />}
              {currentStep === 6 && <SpecialInstructionsStep willData={willData} setWillData={setWillData} />}
              {currentStep === 7 && <ReviewStep willData={willData} />}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                {currentStep === steps.length ? (
                  <button
                    onClick={generateWill}
                    disabled={loading}
                    className="px-8 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50"
                  >
                    {loading ? 'Generating...' : 'Generate Will'}
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* AI Assistant Sidebar */}
          <div className="space-y-6">
            {/* AI Compliance Check */}
            {complianceCheck && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🤖 AI Compliance Check</h3>
                <div className={`p-4 rounded-lg mb-4 ${
                  complianceCheck.status === 'compliant' ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'
                }`}>
                  <p className="text-sm font-medium text-gray-900">{complianceCheck.message}</p>
                </div>
                
                {complianceCheck.suggestions.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">AI Suggestions:</h4>
                    <ul className="space-y-1">
                      {complianceCheck.suggestions.map((suggestion, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-start">
                          <span className="text-blue-500 mr-1">•</span>
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Help */}
            <div className="bg-blue-50 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our AI assistant can help explain legal terms and requirements.
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700">
                Chat with AI Assistant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Will Builder Step Components
const PersonalInfoStep = ({ willData, setWillData }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Full Legal Name</label>
        <input
          type="text"
          value={willData.personalInfo.fullName}
          onChange={(e) => setWillData({
            ...willData,
            personalInfo: { ...willData.personalInfo, fullName: e.target.value }
          })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
        <input
          type="date"
          value={willData.personalInfo.dateOfBirth}
          onChange={(e) => setWillData({
            ...willData,
            personalInfo: { ...willData.personalInfo, dateOfBirth: e.target.value }
          })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">Current Address</label>
        <textarea
          value={willData.personalInfo.address}
          onChange={(e) => setWillData({
            ...willData,
            personalInfo: { ...willData.personalInfo, address: e.target.value }
          })}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Marital Status</label>
        <select
          value={willData.personalInfo.maritalStatus}
          onChange={(e) => setWillData({
            ...willData,
            personalInfo: { ...willData.personalInfo, maritalStatus: e.target.value }
          })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
      </div>
    </div>
  </div>
);

const AssetsStep = ({ willData, setWillData }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Assets & Property</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Real Estate</h3>
        <div className="border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-3">Add properties, homes, land, etc.</p>
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm hover:bg-blue-200">
            + Add Property
          </button>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Bank Accounts</h3>
        <div className="border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-3">Checking, savings, investment accounts</p>
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm hover:bg-blue-200">
            + Add Account
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Vehicles</h3>
        <div className="border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-3">Cars, boats, motorcycles, etc.</p>
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm hover:bg-blue-200">
            + Add Vehicle
          </button>
        </div>
      </div>
    </div>
  </div>
);

const BeneficiariesStep = ({ willData, setWillData }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Beneficiaries</h2>
    <div className="space-y-4">
      <p className="text-gray-600">
        Specify who will inherit your assets and in what proportions.
      </p>
      
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Primary Beneficiaries</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
            + Add Beneficiary
          </button>
        </div>
        
        <div className="text-center py-8 text-gray-500">
          <div className="text-4xl mb-2">👥</div>
          <p>No beneficiaries added yet</p>
          <p className="text-sm">Click "Add Beneficiary" to get started</p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start">
          <div className="text-yellow-400 text-lg mr-3">⚠️</div>
          <div>
            <h4 className="text-sm font-medium text-yellow-800">AI Recommendation</h4>
            <p className="text-sm text-yellow-700 mt-1">
              Consider adding contingent beneficiaries in case your primary beneficiaries cannot inherit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ExecutorsStep = ({ willData, setWillData }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Executors & Guardians</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Executor</h3>
        <p className="text-gray-600 mb-4">
          Choose someone you trust to carry out your wishes and handle your estate.
        </p>
        <div className="border border-gray-200 rounded-lg p-4">
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm hover:bg-blue-200">
            + Add Executor
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Guardians for Minor Children</h3>
        <p className="text-gray-600 mb-4">
          If you have minor children, choose who will care for them.
        </p>
        <div className="border border-gray-200 rounded-lg p-4">
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm hover:bg-blue-200">
            + Add Guardian
          </button>
        </div>
      </div>
    </div>
  </div>
);

const DigitalAssetsStep = ({ willData, setWillData }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Digital Assets</h2>
    <p className="text-gray-600 mb-6">
      Include your online accounts, digital files, cryptocurrencies, and other digital property.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-2">💰 Cryptocurrency</h3>
        <p className="text-sm text-gray-600 mb-3">Bitcoin, Ethereum, other digital currencies</p>
        <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200">
          + Add Crypto
        </button>
      </div>

      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-2">📱 Social Media</h3>
        <p className="text-sm text-gray-600 mb-3">Facebook, Instagram, Twitter accounts</p>
        <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200">
          + Add Account
        </button>
      </div>

      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-2">☁️ Cloud Storage</h3>
        <p className="text-sm text-gray-600 mb-3">Google Drive, iCloud, Dropbox</p>
        <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200">
          + Add Storage
        </button>
      </div>

      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-2">🎮 Digital Content</h3>
        <p className="text-sm text-gray-600 mb-3">Games, music, videos, NFTs</p>
        <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200">
          + Add Content
        </button>
      </div>
    </div>
  </div>
);

const SpecialInstructionsStep = ({ willData, setWillData }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Special Instructions</h2>
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Instructions or Wishes
        </label>
        <textarea
          value={willData.specialInstructions}
          onChange={(e) => setWillData({...willData, specialInstructions: e.target.value})}
          rows={6}
          placeholder="Include any specific instructions, funeral wishes, charitable donations, or other important details..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">💡 Common Special Instructions:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Funeral or burial preferences</li>
          <li>• Charitable donations</li>
          <li>• Care instructions for pets</li>
          <li>• Business succession plans</li>
          <li>• Digital asset management</li>
        </ul>
      </div>
    </div>
  </div>
);

const ReviewStep = ({ willData }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Your Will</h2>
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center">
          <div className="text-green-400 text-lg mr-3">✅</div>
          <div>
            <h4 className="font-medium text-green-900">Will Completed</h4>
            <p className="text-sm text-green-800">
              Your will is ready to be generated and complies with current legal requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Personal Information</h3>
          <p className="text-sm text-gray-600">Name: {willData.personalInfo.fullName}</p>
          <p className="text-sm text-gray-600">Status: {willData.personalInfo.maritalStatus}</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Assets</h3>
          <p className="text-sm text-gray-600">Real Estate: 0 properties</p>
          <p className="text-sm text-gray-600">Accounts: 0 accounts</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Beneficiaries</h3>
          <p className="text-sm text-gray-600">Primary: 0 beneficiaries</p>
          <p className="text-sm text-gray-600">Contingent: 0 beneficiaries</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Roles</h3>
          <p className="text-sm text-gray-600">Executor: Not assigned</p>
          <p className="text-sm text-gray-600">Guardian: Not assigned</p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-medium text-yellow-900 mb-2">⚠️ Before Generating</h4>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Review all information for accuracy</li>
          <li>• Ensure all required fields are completed</li>
          <li>• Consider having the will reviewed by a legal professional</li>
          <li>• Remember to sign and witness the will according to your jurisdiction's requirements</li>
        </ul>
      </div>
    </div>
  </div>
);

// Document Vault Component
export const DocumentVault = ({ user }) => {
  const [documents, setDocuments] = useState([]);
  const [folders, setFolders] = useState([
    { id: 1, name: 'Legal Documents', count: 5, color: 'blue' },
    { id: 2, name: 'Financial Records', count: 8, color: 'green' },
    { id: 3, name: 'Insurance', count: 3, color: 'purple' },
    { id: 4, name: 'Medical Records', count: 2, color: 'red' }
  ]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Simulate loading documents
    setDocuments([
      {
        id: 1,
        name: 'Last_Will_Testament.pdf',
        type: 'PDF',
        size: '2.4 MB',
        folder: 'Legal Documents',
        uploadDate: '2025-01-15',
        encrypted: true,
        shared: false
      },
      {
        id: 2,
        name: 'Life_Insurance_Policy.pdf',
        type: 'PDF',
        size: '1.8 MB',
        folder: 'Insurance',
        uploadDate: '2025-01-10',
        encrypted: true,
        shared: true
      },
      {
        id: 3,
        name: 'Bank_Statements_2024.pdf',
        type: 'PDF',
        size: '3.2 MB',
        folder: 'Financial Records',
        uploadDate: '2025-01-05',
        encrypted: true,
        shared: false
      }
    ]);
  }, []);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      setIsUploading(true);
      setUploadProgress(0);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            // Add uploaded files to documents
            const newDocs = files.map((file, index) => ({
              id: documents.length + index + 1,
              name: file.name,
              type: file.type.split('/')[1].toUpperCase(),
              size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
              folder: 'Legal Documents',
              uploadDate: new Date().toISOString().split('T')[0],
              encrypted: true,
              shared: false
            }));
            setDocuments(prev => [...prev, ...newDocs]);
            return 0;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Secure Document Vault</h1>
            <p className="text-gray-600 mt-2">
              Your documents are encrypted with AES-256 and stored securely
            </p>
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center space-x-2"
          >
            <span>📤</span>
            <span>Upload Documents</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileUpload}
            className="hidden"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
          />
        </div>

        {/* Upload Progress */}
        {isUploading && (
          <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Uploading files...</span>
              <span className="text-sm text-gray-500">{uploadProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-200"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Folders */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Folders</h3>
              <div className="space-y-3">
                {folders.map((folder) => (
                  <div
                    key={folder.id}
                    className={`p-3 rounded-lg cursor-pointer hover:bg-${folder.color}-50 border-l-4 border-${folder.color}-500`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{folder.name}</span>
                      <span className="text-sm text-gray-500">{folder.count}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full text-left text-blue-600 text-sm hover:text-blue-700">
                + Create New Folder
              </button>
            </div>

            {/* Storage Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Storage</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Used</span>
                  <span className="font-medium">2.1 GB</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '21%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>2.1 GB used</span>
                  <span>10 GB total</span>
                </div>
              </div>
            </div>

            {/* Security Status */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🔒 Security Status</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Encryption</span>
                  <span className="text-green-600 font-medium">AES-256 ✅</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Access Control</span>
                  <span className="text-green-600 font-medium">Active ✅</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Backup</span>
                  <span className="text-green-600 font-medium">Current ✅</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm">
              {/* Toolbar */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                      <option>All Folders</option>
                      <option>Legal Documents</option>
                      <option>Financial Records</option>
                      <option>Insurance</option>
                      <option>Medical Records</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Search documents..."
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-64"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-gray-900">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-900">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Document List */}
              <div className="p-6">
                {documents.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📄</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No documents yet</h3>
                    <p className="text-gray-600 mb-4">Upload your first document to get started</p>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Upload Document
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {documents.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                            <span className="text-red-600 font-semibold text-xs">{doc.type}</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{doc.name}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                              <span>{doc.size}</span>
                              <span>•</span>
                              <span>{doc.folder}</span>
                              <span>•</span>
                              <span>Uploaded {doc.uploadDate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          {doc.encrypted && (
                            <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded">
                              🔒 Encrypted
                            </span>
                          )}
                          {doc.shared && (
                            <span className="text-blue-600 text-xs bg-blue-100 px-2 py-1 rounded">
                              👥 Shared
                            </span>
                          )}
                          <button className="text-gray-600 hover:text-gray-900">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};