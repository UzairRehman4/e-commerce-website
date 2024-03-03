import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');

  return (
    <div className=" flex justify-around p-3 shadow-md ">
      <div className="flex items-center gap-3">
        <Link to="/">  <img src={logo} alt="site-logo" className="h-12" /></Link>
        <p className="text-2xl  text-slate-900 font-semibold">E-com</p>
      </div>
      <ul className="nav-menu flex items-center list-none gap-12 text-slate-800 text-xl font-medium">
        <li
          onClick={() => {
            setMenu('shop');
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/">Shop</Link> {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('mens');
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/mens">Men</Link>
          {menu === 'mens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('women');
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/women">women</Link>
          {menu === 'women' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('kids');
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>
          {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="flex items-center gap-10">
        <Link to="/login">
          <button className="w-28 h-10 outline-none border border-red-400 rounded-full bg-white font-medium text-md active:bg-red-300 cursor-pointer bg-gradient-to-r from-red-300 md:from-red-200">
            Login
          </button>
        </Link>
        <Link to="/cart">
          {' '}
          <img src={cart_icon} alt="" className="h-8" />
        </Link>
        <div className="w-6 h-6 flex justify-center items-center mt-[-35px] ml-[-55px] rounded-xl text-md bg-red-600 text-white cursor-pointer">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
