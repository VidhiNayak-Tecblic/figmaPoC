import React from 'react';
import Header from '../Header';
import uploadMan from '~/assets/images/uploadMan.svg';
import Image from 'next/image';
import right from '~/assets/images/right.svg';

export default function AnimationPutDownSuccess() {
  return (
    <div className="mx-0 my-0 md:mx-12 lg:mx-16 md:my-6 lg:my-10 h-vh">
      <Header />
      {/*AnimationPutDownSuccess all content */}
      <div className="flex flex-col md:flex-row ">
        <div className="w-full">
          <Image src={uploadMan} alt={uploadMan} />
        </div>
        {/* animation put here */}
        <div className="w-full flex flex-col justify-center  px-3 md:px-0">
          {' '}
          <div className="flex justify-between mx-20 ">
            <p className="">Technical Jargon 1</p> <Image src={right} alt={right} />
          </div>
          <hr className="mt-2" />
          <div className="flex justify-between mx-20 mt-4 ">
            <p className="">Technical Jargon 1</p> <Image src={right} alt={right} />
          </div>
          <hr className="mt-2" />
          <div className="flex justify-between mx-20 mt-4 ">
            <p className="">Technical Jargon 1</p> <Image src={right} alt={right} />
          </div>
          <hr className="mt-2" />
          <div className="flex justify-between mx-20 mt-4 ">
            <p className="">Technical Jargon 1</p> <Image src={right} alt={right} />
          </div>
          <hr className="mt-2" />
          <div className="flex justify-between mx-20 mt-4 ">
            <p className="">Technical Jargon 1</p> <Image src={right} alt={right} />
          </div>
          <button className="bg-primary w-full text-white rounded-xl my-10 py-2">View Code</button>
        </div>

        {/* files section  */}

        {/* button */}
      </div>
    </div>
  );
}
