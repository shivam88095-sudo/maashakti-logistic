
import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] max-w-4xl mx-auto px-4 py-12">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Public Profile</h1>
        <p className="text-gray-600">A short bio about the user or company.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 flex flex-col items-center">
          <img src="./assets/tutu.jpg" alt="avatar" className="w-40 h-40 rounded-full object-cover shadow-md mb-4" />
          <h2 className="text-xl font-semibold">Tutu Raj</h2>
          <p className="text-sm text-gray-500">Founder</p>
        </div>

        <div className="col-span-2 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-3">About</h3>
          <p className="text-gray-700 leading-relaxed">
            This is a placeholder profile built with Tailwind utilities. Replace this content with real profile data, links, and social media.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-600">Contact</h4>
              <p className="text-gray-700">+91 8709669804</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600">Location</h4>
              <p className="text-gray-700">Dak Sthan Gonawa, Nawada, Bihar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
