import Image from 'next/image';
import React from 'react';
import laptopImg from '~/assets/images/laptopMainPage.svg';
import Header from '../Header';

export default function FigmaLink() {
  return ( 
    // maindiv
    <div className=" mx-0 my-0 md:mx-12 lg:mx-16 md:my-6 lg:my-10 h-vh">
      {/* logodiv */}
     <Header/>
      {/*All contentdiv */}
      <div className="flex justify-between lg:flex-row flex-col ">
        {/* content */}
        <div className=" w-[40%]">
          <h4 className="text-5xl mt-10 text-black-100 font-semibold">Design with us to unlock your creativity</h4>
          <p className="mt-5 text-xl text-gray-100">
            Access to thousands of design resources to generate into HTML Code
          </p>

          <div className="flex flex-col w-80 mt-6">
            <label className="text-gray-100">Paste Figma Link Here</label>
            <input className="border border-primary-600 mt-2 rounded-lg py-2 text-gray-100" />
          </div>
          <button className="mt-4 border border-primary-600 w-80 rounded-lg py-2 text-white bg-primary font-semibold">
            Generate Code
          </button>
        </div>
        {/* image */}
        <div className="flex justify-center w-[60%]">
          <Image src={laptopImg} alt="laptopImg" width={520} className="hidden sm:block" />
        </div>
      </div>
    </div>
  );
}
