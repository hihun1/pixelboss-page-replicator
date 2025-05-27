import { useState, FormEvent } from 'react';
import Navigation from '../components/shop/Navigation';
import Footer from '../components/shop/Footer';

const Members = () => {
  const [activeSection, setActiveSection] = useState('');
  const [email, setEmail] = useState('jane@example.com');
  const [password, setPassword] = useState('password');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demo purposes, always show success
    alert('Successfully logged in!');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top notification bar */}
      <div className="bg-black text-white text-center py-3 w-full font-medium text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-grow">
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
          <div className="bg-white rounded-lg w-full max-w-md p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Welcome Back</h3>
              <p className="text-sm text-gray-600">Sign in to access exclusive campaign features</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/5" 
                  id="email" 
                  placeholder="Enter your email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium" htmlFor="password">Password</label>
                  <a href="#" className="text-sm text-black hover:text-gray-600">Forgot password?</a>
                </div>
                <input 
                  type="password" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/5" 
                  id="password" 
                  placeholder="Enter your password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-sm text-gray-500 space-y-1">
                <p>For demo purposes, use:</p>
                <p>Email: jane@example.com</p>
                <p>Password: password</p>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white py-2.5 rounded-md hover:bg-gray-800 transition-colors font-medium text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>

              <p className="text-center text-sm text-gray-600">
                Don't have an account? <a href="#" className="text-black hover:text-gray-600 font-medium">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Members; 