import React from 'react';

function Nav() {
  return (
    <div className="flex justify-between items-center py-8">
      <h3 className=" text-2xl font-semibold">
        <span className=" text-orange-500">Go</span> Shop
      </h3>
      <div className="flex items-center">
        <ul className="flex items-center gap-4 text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Product</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center gap-4">
          <li>Search</li>
          <li>Cart</li>
          <li>Get Started</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
