import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Signing up with:', formData);
    navigate('/account')
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create your PopX account</h1>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Full Name*</label>
          <input
            name="fullName"
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone number*</label>
          <input
            name="phoneNumber"
            type="tel"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email address*</label>
          <input
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-1">Password*</label>
          <input
            name="password"
            type="password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-1">Company name</label>
          <input
            name="companyName"
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Are you an Agency?*</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                name="isAgency"
                type="radio"
                className="text-primary focus:ring-primary"
                checked={formData.isAgency === true}
                onChange={() => setFormData({...formData, isAgency: true})}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                name="isAgency"
                type="radio"
                className="text-primary focus:ring-primary"
                checked={formData.isAgency === false}
                onChange={() => setFormData({...formData, isAgency: false})}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        
        <button
          onClick={handleSubmit}
          className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-opacity-90 transition mt-6"
        >
          Create Account
        </button>
      </div>
      
      <div className="mt-6 text-center">
        <Link to="/" className="text-gray-500 hover:text-primary">Back to Welcome</Link>
      </div>
    </div>
  );
}