// import { Link } from "react-router-dom";

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
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Home, Info, Package, ShoppingCart } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { 
            name: 'Home', 
            path: '/', 
            icon: Home,
            description: 'Welcome to our homepage'
        },
        { 
            name: 'About', 
            path: '/about', 
            icon: Info,
            description: 'Learn more about us'
        },
        { 
            name: 'Products', 
            path: '/products', 
            icon: Package,
            description: 'Browse our products',
            hasDropdown: true,
            dropdownItems: [
                { name: 'All Products', path: '/products' },
                { name: 'Featured', path: '/products/featured' },
                { name: 'New Arrivals', path: '/products/new' },
                { name: 'Sale', path: '/products/sale' }
            ]
        }
    ];

    const isActiveLink = (path) => {
        return location.pathname === path || 
               (path !== '/' && location.pathname.startsWith(path));
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
                : 'bg-white/80 backdrop-blur-sm'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                                <ShoppingCart className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                YourBrand
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {navItems.map((item) => {
                                const IconComponent = item.icon;
                                const isActive = isActiveLink(item.path);
                                
                                if (item.hasDropdown) {
                                    return (
                                        <div key={item.name} className="relative">
                                            <button
                                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                                className={`group flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                                                    isActive
                                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                                                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                                }`}
                                            >
                                                <IconComponent className="w-4 h-4 mr-2" />
                                                {item.name}
                                                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                                                    dropdownOpen ? 'rotate-180' : ''
                                                }`} />
                                            </button>
                                            
                                            {dropdownOpen && (
                                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200/50 py-2 animate-in slide-in-from-top-2 duration-200">
                                                    {item.dropdownItems.map((dropItem) => (
                                                        <Link
                                                            key={dropItem.name}
                                                            to={dropItem.path}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-150"
                                                            onClick={() => setDropdownOpen(false)}
                                                        >
                                                            {dropItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                                
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`group flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                                            isActive
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                                                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                        }`}
                                    >
                                        <IconComponent className="w-4 h-4 mr-2" />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50">
                    <div className="px-4 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => {
                            const IconComponent = item.icon;
                            const isActive = isActiveLink(item.path);
                            
                            return (
                                <div key={item.name}>
                                    <Link
                                        to={item.path}
                                        className={`group flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                                            isActive
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                                                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <IconComponent className="w-5 h-5 mr-3" />
                                        <div>
                                            <div>{item.name}</div>
                                            <div className={`text-xs opacity-75 ${
                                                isActive ? 'text-white' : 'text-gray-500'
                                            }`}>
                                                {item.description}
                                            </div>
                                        </div>
                                    </Link>
                                    
                                    {item.hasDropdown && (
                                        <div className="ml-8 mt-1 space-y-1">
                                            {item.dropdownItems.map((dropItem) => (
                                                <Link
                                                    key={dropItem.name}
                                                    to={dropItem.path}
                                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-150"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {dropItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        
                        <div className="pt-4 border-t border-gray-200">
                            <button 
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;