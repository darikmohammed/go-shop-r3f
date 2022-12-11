import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
          <li>
            <SearchIcon />
          </li>
          <li>
            <ShoppingCartIcon />
          </li>
          <li className=" bg-sky-500 text-white rounded px-4 py-2">
            Get Started
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
