import { template1_img, shapeleft, shaperight } from "../assets"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="mb-20 mt-16">
      <div className="pt-14 px-4 xs:px-14 sm:px-20 md:px-32 lg:px-8">
        <div className="mx-auto max-w-2xl  sm:py-10 py-4 sm:max-w-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold xs:text-4xl lg:font-bold text-gray-900 sm:text-[2.5rem] sm:leading-[3.4rem] lg:text-[2.8rem] xl:text-[3.2rem] xs:leading-10">
              Top Quality Digital Products To Explore
            </h1>
            <p className="mt-6 sm:mt-8 leading-8 text-gray-900 text-base sm:text-lg sm:leading-8">
              Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.
            </p>
            <div className="mt-6 flex items-center justify-center">
              <Link
                href="/"
                className="rounded-full bg-red px-6 py-2.5 sm:px-8 sm:py-3 text-sm md:text-base font-semibold text-white"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <div className="relative px-6 xs:px-8 py-1 flex max-w-full mx-auto items-center justify-center">
          <Image
            src={shapeleft}
            className="absolute left-0 bottom-5 w-auto h-[80%] xs:bottom-6 sm:bottom-8 md:bottom-10 lg:h-full"
          />
          <Image
            src={template1_img}
            className="max-w-full z-10 md:max-w-[720px] lg:max-w-4xl"
            alt="banner"
          />
          <Image
          src={shaperight}
          className="absolute right-0 bottom-8 w-auto h-[60%] xs:bottom-10 sm:bottom-12 md:h-[80%] lg:h-[full]"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero