'use client'

import { useState } from 'react';
import Link from 'next/link';

const sidebarLinks = [
  { href: '/moderators/products', label: 'Products' },
  { href: '/moderators/orders', label: 'Orders' },
];

export default function ModeratorLayout({children}:{children:React.ReactNode}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      <div className={`border-r-2 text-black h-screen p-5 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-64`}>
        <button
          onClick={toggleSidebar}
          className="md:hidden text-black mb-5"
        >
          {isOpen ? 'Close' : 'Open'} Sidebar
        </button>
        <ul className="space-y-6">
          {sidebarLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:bg-gray-700 hover:text-white p-2 rounded">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
}
