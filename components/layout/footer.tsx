import Link from 'next/link';

const footerData = {
  brand: {
    name: "Perfume AI",
    link: "/",
  },
  links: [
    { name: "About", href: "/about" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Shop Now", href: "/shop-now" },
    { name: "Contact", href: "/contact" },
    { name: "Community", href: "/community" },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-white p-6">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href={footerData.brand.link} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">
              {footerData.brand.name}
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {footerData.links.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:underline me-4 md:me-6">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 {footerData.brand.name}. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

