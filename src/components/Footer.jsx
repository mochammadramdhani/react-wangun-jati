import React from "react";
import IAF from "../assets/images/Logos/IAF.png";
import IAS from "../assets/images/Logos/IAS.png";
import ISO from "../assets/images/Logos/ISO.png";

const Footer = () => {
  return (
    <footer className="bg-base-300">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li className="btn btn-ghost">
            <a href="/">Beranda</a>
          </li>

          <li className="btn btn-ghost">
            <a href="/tentang">Tentang Kami</a>
          </li>

          <li className="btn btn-ghost">
            <a href="/layanan">Layanan Kami</a>
          </li>

          <li className="btn btn-ghost">
            <a href="/portofolio">Portofolio Kami</a>
          </li>

          <li className="btn btn-ghost">
            <a href="/kontak">Kontak Kami</a>
          </li>
        </ul>

        <p className="mx-auto mt-6 max-w-md text-center text-[#000]">
          <a className="content-center">
            © CV Wangun Jati Konstruksi 2025 All rights reserved. <br /> Terms · Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
