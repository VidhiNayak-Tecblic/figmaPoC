'use client';
import React, { useState } from 'react';
import Header from '../Header';
import Image from 'next/image';
import eye from '~/assets/images/eye.svg';
import code from '~/assets/images/code.svg';
import codeContent from '~/assets/images/codeContent.svg';
import download from '~/assets/images/download.svg';
import service1 from '~/assets/images/service1.svg';
import service2 from '~/assets/images/service2.svg';
export default function CodeReview() {
  const [activeTab, setActiveTab] = useState('preview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const services = [
    {
      image: service1,
      title: 'Need a help in Claim?',
      description:
        'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.',
    },
    {
      image: service2,
      title: 'Need a help in Claim?',
      description:
        'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.',
    },
    {
      image: service1,
      title: 'Need a help in Claim?',
      description:
        'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.',
    },
    {
      image: service1,
      title: 'Need a help in Claim?',
      description:
        'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.',
    },
    {
      image: service1,
      title: 'Need a help in Claim?',
      description:
        'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.',
    },
    {
      image: service1,
      title: 'Need a help in Claim?',
      description:
        'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.',
    },
    // Add more service objects as needed
  ];

  const ServiceCard = ({ service }) => {
    return (
      <div className="group p-6 bg-[#EBEBEB] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-300 hover:bg-[#181818] group-hover:text-white">
        <Image src={service.image} alt={service.title} />

        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white ">
          {service.title}
        </h5>

        <p className="mb-3 font-normal text-gray-500 group-hover:text-white">{service.description}</p>
      </div>
    );
  };

  const ServiceGrid = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-10 lg:px-20">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="mx-0 my-0 md:mx-12 lg:mx-16 md:my-6 lg:my-10 h-vh">
        <Header />
        <div className="relative">
          <div className="absolute top-0 left-0 h-10 w-full bg-[url('../../assets/images/bgCode.svg')] bg-cover bg-center bg-white dark:bg-gray-800 "></div>
          <div className="relative text-white pl-10 font-bold py-2">Code Review</div>
        </div>
        <div className="shadow-lg my-5">
          <div className="p-4">
            <div className="flex border justify-between ">
              <div className="flex">
                {' '}
                <div
                  className={`cursor-pointer p-2 border ${activeTab === 'preview' ? 'bg-white' : 'bg-gray-200'}`}
                  onClick={() => handleTabClick('preview')}
                >
                  <div className="flex gap-2 items-center">
                    <Image src={eye} alt={eye} />
                    <p>preview</p>
                  </div>
                </div>
                <div
                  className={`cursor-pointer p-2 border ${activeTab === 'code' ? 'bg-white' : 'bg-gray-200'}`}
                  onClick={() => handleTabClick('code')}
                >
                  <div className="flex gap-2 items-center">
                    <Image src={code} alt={code} />
                    <p>code</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-primary  flex justify-center gap-2 text-white rounded-xl px-2 py-2">
                  <Image src={download} alt={download} />
                  <p>Download</p>
                </button>
              </div>
            </div>
            <div className="mt-4">
              {activeTab === 'preview' && (
                <div>
                  <div className="w-full flex flex-col items-center justify-center">
                    <span className="bg-[#4EAF4E] text-white text-lg font-medium px-4 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      Service
                    </span>
                    <div className="md:w-2/3 text-center">
                      <p className="text-xl md:text-4xl mb-2">
                        Get Control Over Your Business. I take your finance to the next level.
                      </p>
                    </div>
                  </div>

                  {/* these is for the card code */}
                  <div className="my-2">
                    {/* Add your other components or content here */}
                    <ServiceGrid />
                  </div>
                </div>
              )}
              {activeTab === 'code' && (
                <div>
                  <Image src={codeContent} alt={codeContent} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
