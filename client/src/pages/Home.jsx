// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar.jsx';

// const Home = () => {
//     const navigate = useNavigate();
//     const user = JSON.parse(localStorage.getItem('user') || 'null');

//     useEffect(() => {
//         if (!user) {
//             navigate('/login');
//         }
//     }, [user, navigate]);

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//         navigate('/login');
//     };

//     if (!user) {
//         return null;
//     }

//     return (
//         <div className="min-h-screen bg-base-100">
//             <Navbar />
            
//             <div className="container mx-auto p-4">
//                 {/* Welcome Card */}
//                 <div className="card bg-base-200 shadow-xl mb-6">
//                     <div className="card-body">
//                         <div className="flex items-center gap-4">
//                             <div className="avatar">
//                                 <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
//                                     <span className="text-2xl font-bold text-white">
//                                         {user.name?.charAt(0).toUpperCase()}
//                                     </span>
//                                 </div>
//                             </div>
//                             <div>
//                                 <h2 className="card-title text-2xl">
//                                     Welcome back, {user.name}!
//                                 </h2>
//                                 <p className="text-base-content/70">{user.email}</p>
//                                 <div className="badge badge-success mt-2">
//                                     {user.isOnline ? 'Online' : 'Offline'}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Quick Stats */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                     <div className="card bg-primary text-primary-content">
//                         <div className="card-body">
//                             <h3 className="card-title">Online Friends</h3>
//                             <p className="text-3xl font-bold">0</p>
//                         </div>
//                     </div>
                    
//                     <div className="card bg-secondary text-secondary-content">
//                         <div className="card-body">
//                             <h3 className="card-title">Total Chats</h3>
//                             <p className="text-3xl font-bold">0</p>
//                         </div>
//                     </div>
                    
//                     <div className="card bg-accent text-accent-content">
//                         <div className="card-body">
//                             <h3 className="card-title">Unread Messages</h3>
//                             <p className="text-3xl font-bold">0</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Quick Actions */}
//                 <div className="card bg-base-200 shadow-xl">
//                     <div className="card-body">
//                         <h3 className="card-title mb-4">Quick Actions</h3>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//                             <button className="btn btn-primary">
//                                 <span>💬</span> New Chat
//                             </button>
//                             <button className="btn btn-secondary">
//                                 <span>👥</span> Create Group
//                             </button>
//                             <button className="btn btn-accent">
//                                 <span>⚙️</span> Settings
//                             </button>
//                             <button className="btn btn-error" onClick={handleLogout}>
//                                 <span>🚪</span> Logout
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Recent Chats */}
//                 <div className="card bg-base-200 shadow-xl mt-6">
//                     <div className="card-body">
//                         <h3 className="card-title mb-4">Recent Chats</h3>
//                         <div className="text-center py-8">
//                             <p className="text-base-content/70">No chats yet. Start a new conversation!</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;

import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home