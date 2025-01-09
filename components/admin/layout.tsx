'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const sidebarLinks = [
  { href: '/admin/products', label: 'Products' },
  { href: '/admin/orders', label: 'Orders' },
  { href: '/admin/moderators', label: 'Moderators' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-20 bg-white h-screen w-[250px] p-5 border-r shadow-lg transition-transform duration-300 transform 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:h-auto md:shadow-none`}
      >
        {/* Sidebar Links */}
        <ul className="space-y-6 mt-[6rem]">
          {sidebarLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block hover:bg-gray-100 hover:text-gray-900 p-2 rounded"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div
        className={`flex-1 p-8 transition-all ${
          isOpen ? 'ml-0' : 'ml-0'
        }`}
      >
        {/* Sidebar Toggle Icon */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-[1.5rem] z-30 md:hidden"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-black" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-black" />
          )}
        </button>

        {/* Children Content */}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}