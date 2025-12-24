import * as React from "react";

const MainHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="w-full bg-[#2a2a2a] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-[#c41e3a]">W&W</span>
            <span className="text-gray-800">GLASS</span>
          </h1>
        </div>

        {/* Contact Us Button */}
        <button className="hidden md:block bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
          Contact Us
        </button>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
          aria-label="Toggle menu"
        >
          <span className="w-8 h-0.5 bg-[#c41e3a] block"></span>
          <span className="w-8 h-0.5 bg-[#c41e3a] block"></span>
          <span className="w-8 h-0.5 bg-[#c41e3a] block"></span>
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
