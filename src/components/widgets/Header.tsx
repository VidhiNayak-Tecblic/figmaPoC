import Image from 'next/image';
import React from 'react';
import logo from '~/assets/images/logo.svg';

function Header() {
  return (
    <div className="flex justify-center  md:justify-start">
      <Image src={logo} alt="logo" className="w-32 sm:32 md:36 lg:w-40 xl:w-44" />
    </div>
  );
}

export default Header;
 