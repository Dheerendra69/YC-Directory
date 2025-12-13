const Footer = () => {
  return (
    <footer className="w-full border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        <p>© {2024} YC-Directory. All rights reserved.</p>

        <div className="mt-4 sm:mt-0 flex gap-6">
          <a href="/" className="hover:text-gray-900 transition">
            Home
          </a>
          {/* <a href="/" className="hover:text-gray-900 transition">
            Privacy
          </a>
          <a href="/" className="hover:text-gray-900 transition">
            Terms
          </a>
          <a href="/" className="hover:text-gray-900 transition">
            Contact
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
