
import MainLayout from '@/components/layout/layout';
import UserLayout from '@/components/user/layout';
import Image from 'next/image';

export default function UserProfile() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Web developer passionate about creating stunning and functional websites.",
    location: "San Francisco, CA",
    joined: "January 2023",
    profileImage: "/p.jpeg",
  };

  return (
    <MainLayout>
      <UserLayout>
      <div className=" flex flex-col items-center justify-center min-h-screen py-10 px-4">
      <div className="border w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center flex-col">
          <div className="relative w-32 h-32">
            <Image
              src={user.profileImage}
              alt="Profile Picture"
              className="rounded-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">About</h2>
          <p className="mt-2 text-gray-600">{user.bio}</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-600">Location</h3>
            <p className="text-gray-800">{user.location}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600">Joined</h3>
            <p className="text-gray-800">{user.joined}</p>
          </div>
        </div>

        <div className="mt-6">
          <button className="px-6 py-2  rounded-md text-white bg-gradient-to-r from-purple-500 to-red-500 shadow-md hover:from-purple-600 hover:to-red-600 focus:outline-none focus:ring-4 focus:ring-purple-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
      </UserLayout>
    </MainLayout>
  );
};


