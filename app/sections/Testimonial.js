"use client"

import styles from "@app/components/style"
import { TestimonialData } from "@app/constants";
import Rating from "@app/components/Rating";
import NextPrevButton from "@app/components/NextPrevButton";
import Image from "next/image";
import Carousel from "react-multi-carousel";
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

const Testimonial = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <div name="testimonial" className="boxWidth paddingX paddingY">
          {TestimonialData.map((item, index) => (
            <div key={index} className=''>
              <div className="text-center">
                <p className="uppercase text-red text-xs font-bold mb-3 tracking-widest">Testimonial</p>
                <h3 className="font-semibold text-2xl sm:text-3xl text-gray-900">Meet client satisfaction</h3>
              </div>

              <div className=''>
                <Carousel
                  additionalTransfrom={0}
                  arrows={false}
                  autoPlaySpeed={3000}
                  centerMode={false}
                  className="-mx-3 -z-10"
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
                  {item.features.map((c, i) => (
                    <div key={i} className='border-[1px] hover:shadow-xl rounded-lg py-10 px-6 mt-10 mb-12 mx-4 xs:mx-auto max-w-full xs:max-w-sm sm:max-w-[300px] md:max-w-[320px]'>
                      <Rating rating={c.review} />
                      <h3 className='font-bold text-text mb-3'>{c.title}</h3>
                      <p className='text-text leading-7 text-[15px]'>{c.description}</p>

                      <div className='flex gap-x-4 mt-8'>
                        <div>
                          <Image
                            src={c.avatar} /> </div>
                        <div>
                          <h4 className='font-bold text-text'>{c.name}</h4>
                          <p className='text-red font-semibold'>{c.designation}</p>
                        </div>
                      </div>

                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Testimonial