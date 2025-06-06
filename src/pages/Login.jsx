import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
    if(email && password){
      navigate('/account')
    } else {
      alert('Email and Password required')
    }
  };

  return (
    <div className='min-h-screen'>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Signin to your PopX account</h1>
        <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-violet-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-popx-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-violet-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-popx-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="pt-4">
            <button
              onClick={handleLogin}
              className="w-full bg-gray-300 hover:bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-opacity-90 transition"
            >
              Login
            </button>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link to="/" className="text-gray-500 hover:text-primary">Back to Welcome</Link>
        </div>
      </div>
    </div>
  );
}