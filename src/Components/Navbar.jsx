import { Link } from "react-router-dom";

// const Navbar = () => {
//     return (
//        <>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//             <Link to="/Products">Products</Link>

//        </>
//     );
// }

// export default Navbar;




import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-blue-600">🛒 MyStore</h1>

        {/* Desktop Menu */}
       <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//             <Link to="/Products">Products</Link>
         

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
