import { Link } from 'react-router-dom';
import { FaCamera } from "react-icons/fa";
export default function AccountSettings() {

  const user = {
    name: "Marry Doe",
    email: "Marry@Gmail.Com",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"
  };

  return (
      <div className="min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 px-8 pt-4">Account Settings</h1>
        <div className='bg-gray-100 min-h-screen w-full p-4'>
          <div className="flex items-center mb-6">
            {/* Profile Picture */}
            <div className="relative mr-4">
              <img 
                src={user.avatar} 
                alt="Profile" 
                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
              />
              {/* Edit icon overlay (optional) */}
              <button className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1">
                <FaCamera size={10}/>
              </button>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">
            {user.bio}
          </p>
          <div className='border border-dashed text-gray-300'>
          </div>
          <div className="mt-6 text-center">
            <Link to="/" className="text-gray-500 hover:text-primary">Back to Welcome</Link>
          </div>

        </div>
      </div>
   
  );
}