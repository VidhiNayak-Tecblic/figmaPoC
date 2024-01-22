'use client';
import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header';
import uploadMan from '~/assets/images/uploadMan.svg';
import Image from 'next/image';
import right from '~/assets/images/right.svg';
import { useRouter } from 'next/navigation';

export default function AnimationPutDownSuccess() {
  const router = useRouter();

  const showToast = () => {
    toast.success('This is a success alert.', {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      style: {
        backgroundColor: '#0F9918',
        color: '#ffffff',
      },
    });

    setTimeout(() => {
      router.push('/code-review');
    }, 2000);
  };

  return (
    <div className="mx-0 my-0 md:mx-12 lg:mx-16 md:my-6 lg:my-10 h-vh">
      <Header />
      <div className="flex flex-col md:flex-row ">
        <div className="w-full">
          <Image src={uploadMan} alt={uploadMan} />
        </div>
        <div className="w-full flex flex-col justify-center px-3 md:px-0">
          <div className="flex justify-between mx-20">
            <p className="">Technical Jargon 1</p> <Image src={right} alt={right} />
          </div>
          <hr className="mt-2" />
          <div className="flex justify-between mx-20 mt-4">
            <p className="">Technical Jargon 1</p> <Image src={right} alt={right} />
          </div>
          <hr className="mt-2" />
          <div className="flex justify-between mx-20 mt-4">
            <p className="">Technical Jargon 1</p> <Image src={right} alt={right} />
          </div>
          <hr className="mt-2" />
          <div className="flex justify-between mx-20 mt-4">
            <p className="">Technical Jargon 1</p> <Image src={right} alt={right} />
          </div>
          <hr className="mt-2" />
          <div className="flex justify-between mx-20 mt-4">
            <p className="">Technical Jargon 1</p> <Image src={right} alt={right} />
          </div>
          <button className="bg-primary w-full text-white rounded-xl my-10 py-2" onClick={showToast}>
            View Code
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
