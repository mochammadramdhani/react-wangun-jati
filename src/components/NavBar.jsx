import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import ToggleDarkImage from "../assets/images/ToggleDark.png";
import ToggleLightImage from "../assets/images/ToggleLight.png";

const Navbar = () => {
  const [theme, setTheme] = useState("garden");

  const toggleMode = () => {
    const newTheme = theme === "dracula" ? "garden" : "dracula";
    document.documentElement.setAttribute("data-theme", newTheme);
    Cookies.set("theme", newTheme);
    setTheme(newTheme); // Set the theme after updating the cookie
  };

  useEffect(() => {
    const savedTheme = Cookies.get("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
      setTheme(savedTheme);
    }
  }, []); // Only run this effect once when the component mounts

  // useEffect(() => {
  //   document.getElementById("toggleModeIcon").src = theme === "dracula" ? ToggleLightImage : ToggleDarkImage;
  //   document.getElementById("logo").src = theme === "dracula" ? whiteLogo : blackLogo;
  // }, [theme]);
  return (
    <div className="flex items-center px-2 h-fit duration-300 z-[999] navbar bg-base-100 sticky top-0 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-fit">
            <li>
              <a href="/">Beranda</a>
            </li>

            <li>
              <a href="/tentang">Tentang Kami</a>
            </li>

            <li>
              <a href="/layanan">Layanan Kami</a>
            </li>
            <li>
              <a href="/portofolio">Portofolio Kami</a>
            </li>
            <li>
              <a href="/kontak">Kontak Kami</a>
            </li>
          </ul>
        </div>
        <a href="/">
          <h1 className="text-lg font-bold ml-5">{theme === "dracula" ? "CV Wangun Jati Konstruksi" : "CV Wangun Jati Konstruksi"}</h1>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Beranda</a>
          </li>

          <li>
            <a href="/tentang">Tentang Kami</a>
          </li>
          <li className="dropdown dropdown-hover" tabindex="0">
            <a href="/layanan">Layanan Kami</a>
          </li>

          <li>
            <a href="/portofolio">Portofolio Kami</a>
          </li>
          <li>
            <a href="/kontak">Kontak Kami</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <a href="https://wa.me/6285867565682" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
          Hubungi via WhatsApp
        </a>
        <button id="toggleMode" onClick={toggleMode} className="btn btn-primary">
          <img id="toggleModeIcon" src={theme === "dracula" ? ToggleLightImage : ToggleDarkImage} alt="moon" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
