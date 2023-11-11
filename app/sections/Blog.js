"use client"
import styles from "@app/components/style"

import { BlogData } from "@app/constants";
import NextPrevButton from "@app/components/NextPrevButton";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";
import Link from "next/link";


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
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Blog = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <div className={`bg-gray mt-20`}>

          <div className="boxWidth paddingX paddingY pb-20">
            <div className="lg:pb-20">

              <div className="text-center max-w-full mx-auto sm:max-w-xl lg:max-w-lg">
                <p className="uppercase text-red text-xs md:text-sm font-bold mb-3 tracking-widest">Our Blog</p>
                <h3 className="font-semibold text-2xl sm:text-3xl text-gray-900">Explore our products for your business solution</h3>
              </div>

              <div className='mt-6'>
                <Carousel
                  additionalTransfrom={0}
                  arrows={false}
                  autoPlaySpeed={3000}
                  centerMode={false}
                  className="-mx-3"
                  containerClass=""
                  customButtonGroup={<NextPrevButton />}
                  dotListClass="test"
                  draggable={true}
                  focusOnSelect={false}
                  infinite={true}
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
                  {BlogData.map((item) => (
                    <div key={item.id} className="rounded-lg shadow-md mt-5 mb-8 mx-4 xs:mx-auto max-w-full xs:max-w-sm sm:max-w-[300px] md:max-w-[340px] lg:max-w-[300px] xl:max-w-[340px]">
                      <div className="rounded-t-lg overflow-hidden flex">
                        <Image src={item.imgSrc} className="w-full" />
                      </div>

                      <div className="flex flex-col justify-between px-5 py-3.5 xs:py-6 xs:px-8">
                        <div>
                          <Link href={item.postLink} alt={item.altText}>
                            <h3 className="font-semibold text-lg text-gray-800 mb-3">{item.title}</h3></Link></div>

                        <div className="flex w-full justify-between">
                          <p className="text-red font-semibold text-sm">{item.authorName}</p>
                          <p className="text-gray-600 text-sm font-[400]">{item.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Blog