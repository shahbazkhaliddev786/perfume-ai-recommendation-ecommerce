
const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction</h2>
            <p>
              Welcome to <span className="font-bold">Perfume Elegance</span>. Your privacy is of utmost importance to us.
              This Privacy Policy outlines how we collect, use, and protect your information when you interact with our
              website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Information We Collect</h2>
            <p>
              We may collect the following types of information when you use our services:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-bold">Personal Information:</span> Name, email address, phone number, and shipping address.</li>
              <li><span className="font-bold">Usage Data:</span> Details about how you interact with our website, including IP address, browser type, and device information.</li>
              <li><span className="font-bold">Cookies:</span> Data stored on your device to enhance your browsing experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">How We Use Your Information</h2>
            <p>
              The information we collect is used to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide, maintain, and improve our services.</li>
              <li>Personalize your experience and recommend products.</li>
              <li>Communicate with you regarding updates, promotions, and support.</li>
              <li>Ensure the security of our platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sharing Your Information</h2>
            <p>
              We do not sell or rent your personal information. However, we may share your information with trusted third
              parties to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Process payments and deliver orders.</li>
              <li>Comply with legal obligations or enforce our policies.</li>
              <li>Provide analytics to improve our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt-out of marketing communications.</li>
              <li>Disable cookies through your browser settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data Security</h2>
            <p>
              We take appropriate measures to protect your information from unauthorized access, alteration, disclosure,
              or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
              revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="font-bold">support@perfumeelegance.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
