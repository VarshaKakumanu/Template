import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Test</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
