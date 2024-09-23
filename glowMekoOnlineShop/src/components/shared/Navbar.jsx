//import React from 'react';

const Navbar = () => {
    return (
        <section className="bg-gray-200 p-4">
            <div className="container mx-auto">
                <header className='flex items-center justify-between'>
                    <img src="https://i.ibb.co/LSg6pnJ/logo.png" alt="Homepage Logo"  className="w-10"/>
                    <nav className="space-x-4">
                        <span>Home</span>
                        <span>Products</span>
                        <span>Brands</span>
                    </nav>
                </header>
            </div>
        </section>
    );
};

export default Navbar;