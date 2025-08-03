import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { blockchainService, formatAddress, formatBalance } from './blockchain';

// Header Component
export const Header = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">NE</span>
              </div>
              <span className="text-xl font-bold text-gray-900">NextEra Estate</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Dashboard</Link>
            <Link to="/will-builder" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Will Builder</Link>
            <Link to="/vault" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Vault</Link>
            <Link to="/heirs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Heirs</Link>
            <Link to="/grief-companion" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">AI Companion</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Welcome, <span className="font-medium">{user?.name || 'User'}</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 relative"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {isMenuOpen && (
              <div className="absolute right-4 top-16 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Profile & Settings</Link>
                <Link to="/death-trigger" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Death Trigger</Link>
                <hr className="my-2" />
                <button
                  onClick={onLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// Welcome Page Component
export const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Secure Your Digital
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Legacy</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                AI-powered estate planning with real-time jurisdictional compliance. 
                Protect your family's future with advanced encryption and automated legal validation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/register')}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Start Planning Today
                </button>
                <button
                  onClick={() => navigate('/login')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  Sign In
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1616165873265-6c1c8abd0e51?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxlc3RhdGUlMjBwbGFubmluZ3xlbnwwfHx8Ymx1ZXwxNzU0MTA5MzEzfDA&ixlib=rb-4.1.0&q=85"
                alt="Digital Estate Planning"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Estate Planning Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technology meets legal expertise to deliver personalized, compliant estate planning solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="🤖"
              title="AI Smart Will Builder"
              description="Intelligent form that adapts to your jurisdiction's requirements and guides you through complex legal decisions."
              image="https://images.unsplash.com/photo-1584126321240-539468f62369?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxsZWdhbCUyMGRvY3VtZW50c3xlbnwwfHx8Ymx1ZXwxNzU0MTA5MzIzfDA&ixlib=rb-4.1.0&q=85"
            />
            <FeatureCard
              icon="🔒"
              title="Secure Document Vault"
              description="AES-256 encrypted storage for all your important documents with biometric access control."
              image="https://images.unsplash.com/photo-1516996190843-87e7ff025b22?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxzZWN1cmUlMjB2YXVsdHxlbnwwfHx8Ymx1ZXwxNzU0MTA5MzMwfDA&ixlib=rb-4.1.0&q=85"
            />
            <FeatureCard
              icon="⚖️"
              title="Real-Time Compliance"
              description="Automatic validation against current laws in your jurisdiction with instant updates when regulations change."
              image="https://images.unsplash.com/photo-1519228913601-b2e6e945f685?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxlc3RhdGUlMjBwbGFubmluZ3xlbnwwfHx8Ymx1ZXwxNzU0MTA5MzEzfDA&ixlib=rb-4.1.0&q=85"
            />
            <FeatureCard
              icon="👥"
              title="Heir Management"
              description="Sophisticated role-based system for managing beneficiaries and automated distribution triggers."
              image="https://images.unsplash.com/photo-1560328055-851c3b903ef3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxmYW1pbHklMjBzdXBwb3J0fGVufDB8fHxibHVlfDE3NTQxMDkzMzV8MA&ixlib=rb-4.1.0&q=85"
            />
            <FeatureCard
              icon="💔"
              title="AI Grief Companion"
              description="Compassionate AI assistant to support family members through the grieving process with memory playback."
              image="https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg"
            />
            <FeatureCard
              icon="⏰"
              title="Death Trigger System"
              description="Configurable automated systems that activate your estate plan when needed, with multiple verification methods."
              image="https://images.unsplash.com/photo-1519228913601-b2e6e945f685?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxlc3RhdGUlMjBwbGFubmluZ3xlbnwwfHx8Ymx1ZXwxNzU0MTA5MzEzfDA&ixlib=rb-4.1.0&q=85"
            />
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Military-Grade Security</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your most important documents deserve the highest level of protection available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SecurityFeature
              icon="🔐"
              title="AES-256 Encryption"
              description="Your data is encrypted with the same standard used by government agencies."
            />
            <SecurityFeature
              icon="🧬"
              title="Biometric Authentication"
              description="Face ID and Touch ID integration for secure, convenient access."
            />
            <SecurityFeature
              icon="🛡️"
              title="Post-Quantum Cryptography"
              description="Future-proof security using Kyber and Dilithium algorithms."
            />
            <SecurityFeature
              icon="🔒"
              title="Zero-Knowledge Architecture"
              description="We can't access your data even if we wanted to."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Start Protecting Your Legacy Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of families who trust NextEra Estate to secure their digital future.
          </p>
          <button
            onClick={() => navigate('/register')}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-lg font-semibold text-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, image }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

// Security Feature Component
const SecurityFeature = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-blue-100">{description}</p>
  </div>
);

// Login Page Component
export const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [loading, setLoading] = useState(false);
  const [showBiometric, setShowBiometric] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate authentication
    setTimeout(() => {
      const userData = {
        id: 1,
        name: 'John Doe',
        email: formData.email,
        token: 'mock-jwt-token-' + Date.now(),
        jurisdiction: 'California, USA',
        biometricEnabled: true
      };
      onLogin(userData);
      setLoading(false);
    }, 1000);
  };

  const handleBiometricLogin = async () => {
    if (navigator.credentials && window.PublicKeyCredential) {
      try {
        setLoading(true);
        
        // Simulate biometric authentication
        setTimeout(() => {
          const userData = {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            token: 'biometric-token-' + Date.now(),
            jurisdiction: 'California, USA',
            biometricEnabled: true
          };
          onLogin(userData);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Biometric authentication failed:', error);
        setLoading(false);
      }
    } else {
      alert('Biometric authentication not supported on this device');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">NE</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your NextEra Estate account</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign in with</span>
              </div>
            </div>

            <button
              onClick={handleBiometricLogin}
              disabled={loading}
              className="mt-4 w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>🔐</span>
              <span>Biometric Authentication</span>
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-500 font-medium">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Register Page Component
export const RegisterPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    jurisdiction: '',
    acceptTerms: false
  });
  const [loading, setLoading] = useState(false);
  const [jurisdictions] = useState([
    'California, USA',
    'New York, USA',
    'Texas, USA',
    'Florida, USA',
    'Illinois, USA',
    'Ontario, Canada',
    'British Columbia, Canada',
    'United Kingdom',
    'Germany',
    'France',
    'Australia',
    'Other'
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!formData.acceptTerms) {
      alert('Please accept the terms and conditions');
      return;
    }

    setLoading(true);

    // Simulate registration
    setTimeout(() => {
      const userData = {
        id: 1,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        token: 'new-user-token-' + Date.now(),
        jurisdiction: formData.jurisdiction,
        biometricEnabled: false
      };
      onLogin(userData);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">NE</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h2>
          <p className="text-gray-600">Start securing your digital legacy today</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jurisdiction
              </label>
              <select
                required
                value={formData.jurisdiction}
                onChange={(e) => setFormData({...formData, jurisdiction: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="">Select your jurisdiction</option>
                {jurisdictions.map((jurisdiction) => (
                  <option key={jurisdiction} value={jurisdiction}>
                    {jurisdiction}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Create a strong password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Confirm your password"
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                required
                checked={formData.acceptTerms}
                onChange={(e) => setFormData({...formData, acceptTerms: e.target.checked})}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
              />
              <label className="ml-2 text-sm text-gray-700">
                I accept the{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Component
export const Dashboard = ({ user }) => {
  const [stats, setStats] = useState({
    documentsStored: 0,
    willCompletion: 0,
    heirsConfigured: 0,
    lastBackup: null
  });
  const [notifications, setNotifications] = useState([]);
  const [complianceStatus, setComplianceStatus] = useState('checking');

  useEffect(() => {
    // Simulate loading dashboard data
    setTimeout(() => {
      setStats({
        documentsStored: 23,
        willCompletion: 75,
        heirsConfigured: 3,
        lastBackup: new Date().toISOString().split('T')[0]
      });
      
      setNotifications([
        {
          id: 1,
          type: 'warning',
          title: 'Will Update Required',
          message: 'California estate laws have changed. Review your will.',
          timestamp: '2 hours ago'
        },
        {
          id: 2,
          type: 'success',
          title: 'Backup Complete',
          message: 'All documents successfully backed up to secure cloud.',
          timestamp: '1 day ago'
        },
        {
          id: 3,
          type: 'info',
          title: 'New Feature Available',
          message: 'AI Grief Companion is now available for your heirs.',
          timestamp: '3 days ago'
        }
      ]);

      setComplianceStatus('compliant');
    }, 1000);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name?.split(' ')[0]}
          </h1>
          <p className="text-gray-600 mt-2">
            Here's an overview of your estate planning progress
          </p>
        </div>

        {/* Compliance Status Banner */}
        <div className={`mb-8 p-4 rounded-lg border-l-4 ${
          complianceStatus === 'compliant' ? 'bg-green-50 border-green-400' :
          complianceStatus === 'warning' ? 'bg-yellow-50 border-yellow-400' :
          'bg-blue-50 border-blue-400'
        }`}>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {complianceStatus === 'compliant' ? '✅' : 
               complianceStatus === 'warning' ? '⚠️' : '🔄'}
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-800">
                {complianceStatus === 'compliant' ? 'Fully Compliant' :
                 complianceStatus === 'warning' ? 'Compliance Update Required' :
                 'Checking Compliance...'}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {complianceStatus === 'compliant' 
                  ? `Your estate plan complies with current ${user?.jurisdiction} laws.`
                  : complianceStatus === 'warning'
                  ? 'Some documents may need updates due to recent law changes.'
                  : 'AI is validating your documents against current regulations...'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Documents Stored"
            value={stats.documentsStored}
            icon="📄"
            color="blue"
            onClick={() => navigate('/vault')}
          />
          <StatCard
            title="Will Completion"
            value={`${stats.willCompletion}%`}
            icon="📝"
            color="green"
            onClick={() => navigate('/will-builder')}
          />
          <StatCard
            title="Heirs Configured"
            value={stats.heirsConfigured}
            icon="👥"
            color="purple"
            onClick={() => navigate('/heirs')}
          />
          <StatCard
            title="Last Backup"
            value={stats.lastBackup}
            icon="☁️"
            color="indigo"
            onClick={() => navigate('/profile')}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <QuickActionCard
                  icon="🤖"
                  title="Continue Will Builder"
                  description="Resume building your AI-powered will"
                  action="Continue"
                  onClick={() => navigate('/will-builder')}
                />
                <QuickActionCard
                  icon="📤"
                  title="Upload Documents"
                  description="Add important documents to your vault"
                  action="Upload"
                  onClick={() => navigate('/vault')}
                />
                <QuickActionCard
                  icon="👥"
                  title="Manage Heirs"
                  description="Configure beneficiaries and roles"
                  action="Manage"
                  onClick={() => navigate('/heirs')}
                />
                <QuickActionCard
                  icon="⚙️"
                  title="Death Trigger Setup"
                  description="Configure automated triggers"
                  action="Setup"
                  onClick={() => navigate('/death-trigger')}
                />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                <ActivityItem
                  action="Document uploaded"
                  description="Life Insurance Policy (Policy_2025.pdf)"
                  time="2 hours ago"
                  icon="📄"
                />
                <ActivityItem
                  action="Will updated"
                  description="Beneficiary information modified"
                  time="1 day ago"
                  icon="📝"
                />
                <ActivityItem
                  action="Heir added"
                  description="Sarah Doe added as secondary beneficiary"
                  time="3 days ago"
                  icon="👥"
                />
                <ActivityItem
                  action="Compliance check"
                  description="Estate plan validated against California laws"
                  time="1 week ago"
                  icon="✅"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className="border-l-4 border-blue-400 pl-4 py-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {notification.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Assistant */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Assistant</h3>
              <div className="text-center">
                <div className="text-4xl mb-3">🤖</div>
                <p className="text-sm text-gray-600 mb-4">
                  Need help with your estate planning? Our AI assistant is here to guide you.
                </p>
                <button
                  onClick={() => navigate('/grief-companion')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Chat with AI
                </button>
              </div>
            </div>

            {/* Security Status */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Status</h3>
              <div className="space-y-3">
                <SecurityStatusItem
                  label="Encryption"
                  status="Active"
                  icon="🔐"
                  isGood={true}
                />
                <SecurityStatusItem
                  label="Biometric Auth"
                  status={user?.biometricEnabled ? "Enabled" : "Setup Required"}
                  icon="🧬"
                  isGood={user?.biometricEnabled}
                />
                <SecurityStatusItem
                  label="Backup Status"
                  status="Current"
                  icon="☁️"
                  isGood={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const StatCard = ({ title, value, icon, color, onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-white rounded-xl shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow duration-200 border-l-4 border-${color}-500`}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
      <div className="text-2xl">{icon}</div>
    </div>
  </div>
);

const QuickActionCard = ({ icon, title, description, action, onClick }) => (
  <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all duration-200">
    <div className="flex items-start space-x-3">
      <div className="text-2xl">{icon}</div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <button
          onClick={onClick}
          className="text-blue-600 text-sm font-medium mt-2 hover:text-blue-700"
        >
          {action} →
        </button>
      </div>
    </div>
  </div>
);

const ActivityItem = ({ action, description, time, icon }) => (
  <div className="flex items-start space-x-3 py-2">
    <div className="text-lg">{icon}</div>
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-900">{action}</p>
      <p className="text-xs text-gray-600">{description}</p>
      <p className="text-xs text-gray-400 mt-1">{time}</p>
    </div>
  </div>
);

const SecurityStatusItem = ({ label, status, icon, isGood }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <span className="text-sm">{icon}</span>
      <span className="text-sm text-gray-700">{label}</span>
    </div>
    <span className={`text-xs px-2 py-1 rounded-full ${
      isGood ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
    }`}>
      {status}
    </span>
  </div>
);

// Smart Will Builder Component
export const SmartWillBuilder = ({ user }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const steps = [
    { id: 1, title: 'Personal Info', icon: '👤' },
    { id: 2, title: 'Assets', icon: '🏠' },
    { id: 3, title: 'Beneficiaries', icon: '👥' },
    { id: 4, title: 'Review', icon: '✅' }
  ];

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Smart Will Builder</h1>
          <p className="text-gray-600">Create a legally compliant will for {user?.jurisdiction}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold mb-2 ${
                    currentStep >= step.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step.icon}
                  </div>
                  <span className="text-xs text-gray-600">{step.title}</span>
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

          {/* Step Content */}
          <div className="min-h-64 mb-8">
            {currentStep === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="border rounded-lg px-3 py-2" />
                  <input type="date" placeholder="Date of Birth" className="border rounded-lg px-3 py-2" />
                  <select className="border rounded-lg px-3 py-2">
                    <option>Marital Status</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>
                  </select>
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Assets & Property</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Real Estate</h3>
                    <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">+ Add Property</button>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Bank Accounts</h3>
                    <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">+ Add Account</button>
                  </div>
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Beneficiaries</h2>
                <div className="border rounded-lg p-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">+ Add Beneficiary</button>
                </div>
              </div>
            )}
            {currentStep === 4 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Review Your Will</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800">✅ Your will is ready to be generated</p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="px-6 py-2 border border-gray-300 rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            
            {currentStep === steps.length ? (
              <button
                onClick={generateWill}
                disabled={loading}
                className="px-8 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
              >
                {loading ? 'Generating...' : 'Generate Will'}
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Document Vault Component
export const DocumentVault = ({ user }) => {
  const [documents] = useState([
    { id: 1, name: 'Will.pdf', type: 'PDF', size: '2.4 MB', date: '2025-01-15' },
    { id: 2, name: 'Insurance.pdf', type: 'PDF', size: '1.8 MB', date: '2025-01-10' }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Secure Document Vault</h1>
            <p className="text-gray-600">AES-256 encrypted storage</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            📤 Upload Documents
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Your Documents</h3>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 text-xs font-semibold">{doc.type}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{doc.name}</h4>
                    <p className="text-sm text-gray-500">{doc.size} • {doc.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded">🔒 Encrypted</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Death Trigger Configuration Component
export const DeathTriggerConfig = ({ user }) => {
  const [activeTab, setActiveTab] = useState('manual');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Death Trigger Configuration</h1>
          <p className="text-gray-600">Configure automated estate activation systems</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'manual', name: 'Manual Triggers', icon: '👥' },
                { id: 'automatic', name: 'Automatic Triggers', icon: '🤖' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500'
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
              <div>
                <h3 className="text-lg font-semibold mb-4">Manual Trigger Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h4 className="font-medium mb-2">👥 Trusted Contacts</h4>
                    <p className="text-sm text-gray-600 mb-4">Designated family members can activate your estate plan</p>
                    <button className="text-blue-600 text-sm">Manage Contacts →</button>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h4 className="font-medium mb-2">🔑 Emergency Code</h4>
                    <p className="text-sm text-gray-600 mb-4">Secure code for immediate activation</p>
                    <button className="text-blue-600 text-sm">Generate Code →</button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'automatic' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Automatic Trigger Systems</h3>
                <div className="border rounded-lg p-6">
                  <h4 className="font-medium mb-2">⏰ Inactivity Timer</h4>
                  <p className="text-sm text-gray-600 mb-4">Triggers after extended periods of no activity</p>
                  <select className="border rounded px-3 py-2">
                    <option>90 days</option>
                    <option>180 days</option>
                    <option>1 year</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Heir Management Component
export const HeirManagement = ({ user }) => {
  const [heirs] = useState([
    { id: 1, name: 'Sarah Doe', relationship: 'Sister', email: 'sarah@example.com', percentage: 60, status: 'verified' },
    { id: 2, name: 'Michael Doe', relationship: 'Son', email: 'michael@example.com', percentage: 30, status: 'pending' },
    { id: 3, name: 'Children\'s Hospital', relationship: 'Charity', email: 'donations@hospital.org', percentage: 10, status: 'verified' }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Heir Management</h1>
            <p className="text-gray-600">Manage beneficiaries and estate distribution</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            👥 Add Heir
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Beneficiaries & Heirs</h3>
          </div>
          
          <div className="divide-y divide-gray-200">
            {heirs.map((heir) => (
              <div key={heir.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {heir.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold">{heir.name}</h4>
                      <p className="text-sm text-gray-600">{heir.relationship}</p>
                      <p className="text-sm text-gray-500">{heir.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-lg font-bold">{heir.percentage}%</div>
                      <div className="text-xs text-gray-500">of estate</div>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded ${
                      heir.status === 'verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {heir.status === 'verified' ? '✅ Verified' : '⏳ Pending'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile Settings Component
export const ProfileSettings = ({ user }) => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile & Settings</h1>
          <p className="text-gray-600">Manage your account and security preferences</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'profile', name: 'Profile', icon: '👤' },
                { id: 'security', name: 'Security', icon: '🔒' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500'
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
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" defaultValue={user?.name?.split(' ')[0] || ''} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" defaultValue={user?.name?.split(' ')[1] || ''} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" defaultValue={user?.email || ''} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Jurisdiction</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option>California, USA</option>
                      <option>New York, USA</option>
                      <option>Texas, USA</option>
                    </select>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Save Changes</button>
              </div>
            )}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Security Settings</h3>
                <div className="border rounded-lg p-6">
                  <h4 className="font-medium mb-2">🧬 Biometric Authentication</h4>
                  <p className="text-sm text-gray-600 mb-4">Use fingerprint or face recognition</p>
                  <button className="text-blue-600 text-sm">Configure Settings →</button>
                </div>
                <div className="border rounded-lg p-6">
                  <h4 className="font-medium mb-4">🔐 Encryption Status</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Document Encryption</span>
                      <span className="text-green-600 text-sm">AES-256 ✅</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Data Transmission</span>
                      <span className="text-green-600 text-sm">TLS 1.3 ✅</span>
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
    { id: 1, type: 'ai', content: 'Hello, I\'m here to provide support during this difficult time. How are you feeling today?', timestamp: new Date() }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = { id: messages.length + 1, type: 'user', content: inputMessage, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = { id: messages.length + 2, type: 'ai', content: 'I understand this is challenging. Would you like to share what\'s on your mind?', timestamp: new Date() };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">AI Grief Companion</h1>
          <p className="text-gray-600">Compassionate support with memory playback and guidance</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm h-96 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">💜</div>
              <div>
                <h3 className="font-medium">Compassionate AI</h3>
                <p className="text-sm text-gray-500">Here to listen and support you</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
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
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Share your thoughts or feelings..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
export const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">NE</span>
            </div>
            <span className="text-xl font-bold">NextEra Estate</span>
          </div>
          <p className="text-gray-400 text-sm">
            Securing digital legacies with AI-powered estate planning and military-grade encryption.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Platform</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Will Builder</a></li>
            <li><a href="#" className="hover:text-white">Document Vault</a></li>
            <li><a href="#" className="hover:text-white">Heir Management</a></li>
            <li><a href="#" className="hover:text-white">AI Companion</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Security</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Encryption</a></li>
            <li><a href="#" className="hover:text-white">Biometric Auth</a></li>
            <li><a href="#" className="hover:text-white">Compliance</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Legal Resources</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 NextEra Estate. All rights reserved. | Jurisdictional compliance powered by AI
        </p>
      </div>
    </div>
  </footer>
);