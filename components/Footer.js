const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-sm py-6 mt-10">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="mb-2 sm:mb-0">&copy; {new Date().getFullYear()} SkillRoots. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/privacy" className="hover:underline">Privacy</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  