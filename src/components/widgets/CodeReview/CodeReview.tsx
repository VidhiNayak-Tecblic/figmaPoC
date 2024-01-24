'use client';
import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Image from 'next/image';
import eye from '~/assets/images/eye.svg';
import code from '~/assets/images/code.svg'; 
import codeContent from '~/assets/images/codeContent.svg';
import download from '~/assets/images/download.svg';
import service1 from '~/assets/images/service1.svg';
import service2 from '~/assets/images/service2.svg';
import CoolCodeBlock from '~/components/CodeBlock/CoolCodeBlock';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
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
  const [codeImageUrl, setCodeImageUrl] = useState('');
  // useEffect(() => {
  //   // Assuming that your project is hosted at the root URL '/'
  //   const baseUrl = window.location.origin;
  //   const relativePath = '/_next/image?url=' + encodeURIComponent(code);
  //   const fullUrl = baseUrl + relativePath;
  //   setCodeImageUrl(fullUrl);
  // }, []);

  // const downloadImage = () => {
  //   if (codeImageUrl) {
  //     const link = document.createElement('a');
  //     link.href = codeImageUrl;
  //     link.download = 'code_image.jpg'; // Change the filename as needed
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   }
  // };

  const codeContent: any = `
  'use client';

  import { Card } from 'flowbite-react';

  function Component() {
    return (
      <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
    );
  }
`;

  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast();
  }

  function downloadCode(text, fileName) {
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const showToast = () => {
    toast.success('Copied to clipboard!', {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      style: {
        backgroundColor: '#0F9918',
        color: '#ffffff',
      },
    });
  };

  return (
    <>
      <ToastContainer />
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
                <button
                  onClick={() => downloadCode(codeContent, 'code.js')}
                  className="bg-primary  flex justify-center gap-2 text-white rounded-xl px-2 py-2 "
                >
                  {/* onClick={downloadImage} */}
                  <Image src={download} alt={download} />
                  <p>Download</p>
                </button>
              </div>
            </div>
            <div className="mt-4">
              {activeTab === 'preview' && (
                <div>
                  <div className="w-full flex flex-col items-center justify-center">
                    <span className="bg-[#4EAF4E] my-5 text-white text-lg font-medium px-4 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      Service
                    </span>
                    <div className="md:w-2/3 text-center">
                      <p className="text-xl md:text-4xl mb-4">
                        Get Control Over Your Business. I take your finance to the next level.
                      </p>{' '}
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
                <div className="relative ">
                  <div
                    onClick={() => copyToClipboard(codeContent)}
                    className="absolute top-2 cursor-pointer text-center flex flex-col p-4 justify-center items-center  right-2 bg-white text-black-100 w-12 h-12 rounded-lg"
                  >
                    <div>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.401 14.7129C13.401 15.289 13.1721 15.8414 12.7648 16.2488C12.3575 16.6561 11.805 16.885 11.2289 16.885H3.62666C3.05059 16.885 2.49812 16.6561 2.09077 16.2488C1.68343 15.8414 1.45459 15.289 1.45459 14.7129V7.11065C1.45459 6.53459 1.68343 5.98211 2.09077 5.57477C2.49812 5.16743 3.05059 4.93858 3.62666 4.93858V6.02462C3.33863 6.02462 3.06239 6.13904 2.85872 6.34271C2.65505 6.54638 2.54063 6.82262 2.54063 7.11065V14.7129C2.54063 15.0009 2.65505 15.2772 2.85872 15.4808C3.06239 15.6845 3.33863 15.7989 3.62666 15.7989H11.2289C11.5169 15.7989 11.7932 15.6845 11.9969 15.4808C12.2005 15.2772 12.3149 15.0009 12.3149 14.7129H13.401Z"
                          fill="#4A3AFF"
                        />
                        <path
                          d="M6.88496 2.7665C6.59693 2.7665 6.32069 2.88093 6.11702 3.0846C5.91335 3.28827 5.79893 3.56451 5.79893 3.85254V11.4548C5.79893 11.7428 5.91335 12.0191 6.11702 12.2227C6.32069 12.4264 6.59693 12.5408 6.88496 12.5408H14.4872C14.7752 12.5408 15.0515 12.4264 15.2552 12.2227C15.4588 12.0191 15.5732 11.7428 15.5732 11.4548V3.85254C15.5732 3.56451 15.4588 3.28827 15.2552 3.0846C15.0515 2.88093 14.7752 2.7665 14.4872 2.7665H6.88496ZM6.88496 1.68047H14.4872C15.0633 1.68047 15.6158 1.90931 16.0231 2.31665C16.4304 2.724 16.6593 3.27647 16.6593 3.85254V11.4548C16.6593 12.0309 16.4304 12.5833 16.0231 12.9907C15.6158 13.398 15.0633 13.6269 14.4872 13.6269H6.88496C6.30889 13.6269 5.75642 13.398 5.34908 12.9907C4.94173 12.5833 4.71289 12.0309 4.71289 11.4548V3.85254C4.71289 3.27647 4.94173 2.724 5.34908 2.31665C5.75642 1.90931 6.30889 1.68047 6.88496 1.68047Z"
                          fill="#4A3AFF"
                        />
                      </svg>
                    </div>
                    <div className="text-sm">Copy</div>
                  </div>
                  <CoolCodeBlock codeContent={codeContent} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
