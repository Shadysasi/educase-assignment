import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className='min-h-screen flex justify-center items-end'>
      <div className="p-8 text-center w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to PopX</h1>
        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet,</p>
        <p className="text-gray-600 mb-8">consectetur adipiscing elit.</p>
        
        <div className="space-y-4">
          <Link to="/signup" className="block w-full bg-primary text-white py-3 px-4 rounded-lg font-bold hover:bg-opacity-90 transition">
            Create Account
          </Link>
          <Link to="/login" className="block w-full bg-tahiti text-gray-800 py-3 px-4 rounded-lg font-bold hover:bg-gray-300 transition">
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
}