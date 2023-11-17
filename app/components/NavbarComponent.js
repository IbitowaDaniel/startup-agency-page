"use client"

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { templatelogo } from "../assets"
import { navigation } from "../constants";
import { FaFacebookF, FaTwitter, FaGithubAlt, FaDribbble, } from 'react-icons/fa';
import Image from 'next/image'
import { Link } from 'react-scroll'


const SocialLinks = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaTwitter />,
  },
  {
    path: '/',
    icon: <FaGithubAlt />,
  },
  {
    path: '/',
    icon: <FaDribbble />,
  },
];

export default function NavbarComponent({ headerId, headerStyles }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 max-h-screen flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex max-w-xs flex-col overflow-y-hidden bg-white min-h-screen max-h-screen pb-12 px-4 shadow-xl w-80">
                <div className="flex px-4 pb-2 pt-5 justify-end">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center rounded-md outline-none p-2 text-black justify-center"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <div className="space-y-6 px-4 py-6">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        activeClass='active'
                        spy={true}
                        key={item.name}
                        to={item.href}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={`block py-3 text-base font-semibold leading-7 text-[#343D48] active:text-red hover:text-red border-b`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Social Links */}
                <div className='absolute w-[18rem] bottom-0'>
                  <div className='flex items-center justify-center gap-x-4 mb-[20vh]'>
                    {SocialLinks.map((item, id) => (
                      <div key={id} className='text-[#343D48] cursor-pointer hover:text-blue'>
                        <Link to={item.path}>{item.icon}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header id={`${headerId}`} name="home" className={`w-full absolute top-0 ${headerStyles}`}>
        <nav className="mx-auto max-w-7xl md:py-1 px-4 xs:px-7 md:px-10 lg:px-14">

          <div className="flex h-16 py-9 items-center">
            {/* Logo */}
            <div className="ml-0 flex lg:ml-0">
              <a
                href="https://daniel-ibitowa.vercel.app"
                target='_blank'>
                <span className="sr-only">Agency Page Logo</span>
                <Image
                  className="w-28 xs:w-36 md:w-40 xl:w-48"
                  src={templatelogo}
                  alt="logo"
                />
              </a>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:gap-x-12 lg:justify-center">
              {navigation.map((item) => (
                <Link
                  activeClass='active'
                  spy={true}
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-base font-semibold leading-6 text-gray-600  active:text-red hover:text-red">
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="ml-auto flex items-center">
              <div className="lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link to="/" className="transition duration-300 ease-out text-sm lg:text-lg font-medium text-red hover:text-white hover:bg-red active:bg-red rounded-full border-2 border-red px-4 py-2.5 mr-5 xs:px-5 sm:px-8 sm:py-3.5 md:text-base lg:-mr-5">
                  Get Started
                </Link>
              </div>

              <div className="flex lg:ml-6">
                <button
                  type="button"
                  className="rounded-md p-2 lg:hidden -m-2.5  outline-none text-gray-900"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};