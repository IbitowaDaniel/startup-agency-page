"use client"

import styles from "@app/components/style"
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import NextPrevButton from "@app/components/NextPrevButton";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Pricing = () => {
  let [categories] = useState({
    Monthly: [
      {
        id: 1,
        name: 'Free Plan',
        description: 'For Small teams or office',
        buttonText: 'Start free trail',
        priceWithUnit: '$0',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'Drag & Drop Builder',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "1,000's of Templates",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Blog Support Tools',
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCloseCircle />,
            text: 'eCommerce Store ',
            isAvailable: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Business king',
        description: 'For Enterprise business',
        priceWithUnit: '$15',
        buttonText: 'Create account',
        anotherOption: 'Or Start 14 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'Drag & Drop Builder',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "1,000's of Templates",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Blog Support Tools',
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: 'eCommerce Store ',
            isAvailable: true,
          },
        ],
      },
      {
        id: 3,
        header: 'Suggested',
        headerStyles: 'absolute -top-5 bg-primary text-white py-2 px-3 rounded-lg max-w-[100px]',
        headerIcon: <IoIosCheckmarkCircle />,
        name: 'Pro Master',
        description: 'For pro level developers',
        priceWithUnit: '$24',
        buttonText: 'Create account',
        anotherOption: 'Or Start 14 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'Drag & Drop Builder',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "1,000's of Templates",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Blog Support Tools',
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: 'eCommerce Store ',
            isAvailable: true,
          },
        ],
      },
    ],
    Annual: [
      {
        id: 1,
        name: 'Free Plan',
        description: 'For Small teams or office',
        buttonText: 'Start free trail',
        priceWithUnit: '$0',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: "1,000's of Templates",
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: 'Drag & Drop Builder',
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Blog Support Tools',
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCloseCircle />,
            text: 'eCommerce Store ',
            isAvailable: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Business king',
        description: 'For Enterprise business',
        priceWithUnit: '$25',
        buttonText: 'Create account',
        anotherOption: 'Or Start 10 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'eCommerce Store',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: 'Blog Support Tools',
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: "1,000's of Templates",
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: 'Drag & Drop Builder ',
            isAvailable: true,
          },
        ],
      },
      {
        id: 3,
        header: 'Suggested',
        headerStyles: 'absolute -top-5 bg-primary text-white py-2 px-3 rounded-lg max-w-[100px]',
        headerIcon: <IoIosCheckmarkCircle />,
        name: 'Pro Master',
        description: 'For pro level developers',
        priceWithUnit: '$39',
        buttonText: 'Create account',
        anotherOption: 'Or Start 10 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'eCommerce Store',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: 'Blog Support Tools',
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: "1,000's of Templates",
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: 'Drag & Drop Builder ',
            isAvailable: true,
          },
        ],
      },
    ],
  })

  return (
    <section className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <div name="pricing" className="boxWidth paddingX paddingY">
          <div className="text-center mt-24">
            <p className="uppercase text-red text-xs font-bold mb-3 tracking-widest">Pricing plan</p>
            <h3 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-gray-900">Choose your pricing policy</h3>
          </div>

          <div className='max-w-full mx-auto mt-10'>
            <Tab.Group>
              <Tab.List className='flex space-x-1 rounded bg-[#F7F8FB] p-1.5 max-w-[280px] mx-auto text-black'>
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded py-3 text-base font-[500] leading-5',
                        'focus:outline-none',
                        selected
                          ? 'bg-white transition duration-300 ease-in-out shadow-md'
                          : 'text-black'
                      )
                    }
                  >
                    {category} Plan
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels className="mt-12">
                {Object.values(categories).map((c, i) => (
                  <Tab.Panel
                    key={i}
                    className={({ open }) =>
                      classNames(
                        '',
                        'focus:outline-0',
                        open ? '' : ''
                      )}
                  >
                    <div className=''>
                      <Carousel
                        additionalTransfrom={0}
                        arrows={false}
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass=""
                        customButtonGroup={<NextPrevButton hidden={`lg:hidden`} />}
                        dotListClass="test"
                        draggable={true}
                        focusOnSelect={false}
                        infinite={false}
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside
                        renderDotsOutside={false}
                        responsive={responsive}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                      >
                        {c.map((item) => (
                          <div key={item.id} className='relative rounded-2xl border mt-6 mb-8 px-6 pt-10 pb-14 sm:pl-8 mx-auto max-w-sm xs:mx-auto xs:max-w-sm md:max-w-xs lg:max-w-[300px] xl:max-w-[350px]'>
                            <p className={`${item.headerStyles}`}>{item.header}</p>
                            <h3 className='font-bold text-[22px] xs:text-2xl text-black animate-header'>{item.name}</h3>
                            <p className='mb-5 animate-header text-base text-text'>{item.description}</p>
                            {item.points.map((c, i) => (
                              <div key={i}>
                                <ul className='list-none -ml-2 flex gap-x-2'><button className="animate-button w-6 h-12 text-red -ml-[1px] text-2xl flex-shrink-0" aria-label="list icon">{c.icon}</button>
                                  <li className='py-3 animate-listText text-base text-black'>{c.text}</li></ul>
                              </div>
                            ))}
                            <div className='flex flex-col justify-center items-center'>
                              <p className='mt-3 animate-price text-black text-xl text-bold'>{item.priceWithUnit}<span className='text-text text-base'>/Monthly</span></p>
                              <button className='bg-red py-4 px-6 text-white transition duration-500 ease-in-out text-sm font-semibold mt-4 rounded-[45px] animate-button border'>{item.buttonText}</button>
                              <p className='text-sm font-bold text-[#2563FF] opacity-80 mt-3 animate-button'>{item.anotherOption}</p>
                            </div>
                          </div>
                        ))}
                      </Carousel>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing