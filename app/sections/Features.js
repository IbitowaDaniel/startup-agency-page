import styles from "@app/components/style"
import { ProductFeatures } from "@app/constants"
import { template1_img3, shapepattern2 } from "@app/assets"
import Image from "next/image"
import Link from "next/link"

const Features = () => {
  return (
    <section className={`relative overflow-x-hidden`}>
      <div className={`${styles.flexCenter} ${styles.paddingX} overflow-x-hidden`}>
        <div className={`${styles.boxWidth}`}>

          <div className="text-center">
            <p className="uppercase text-red text-xs font-bold mb-3 tracking-widest">Quality Features</p>
            <h3 className="font-semibold text-3xl text-gray-900">Amazing useful features</h3>
          </div>

          <div className="mb-20 mt-6 max-w-md sm:max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {ProductFeatures.map((productfeatures) => (
              <div key={productfeatures.id} className={`mt-8 flex gap-x-2`}>
                <Image
                  className="w-20 h-20 lg:w-28 lg:h-24"
                  src={productfeatures.img}
                  alt="" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">{productfeatures.title}</h4>
                  <p className="text-gray-600 mt-2 leading-7">{productfeatures.text}</p>
                </div>
              </div>
            ))}
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <div className="text-center md:text-left max-w-sm mx-auto sm:max-w-md md:max-w-xs lg:max-w-md my-auto lg:mx-0">
              <p className="uppercase text-red text-xs md:text-base font-bold mb-3 tracking-widest">Core Features</p>
              <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-5 text-gray-900">Smart Jackpots that you may love this anytime & anywhere</h3>
              <p className="text-gray-800 mb-8 xl:text-lg leading-7">Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>
              <div className="mb-14">
                <Link
                  href="/"
                  className="rounded-full bg-red px-6 py-2.5 sm:px-8 sm:py-3 text-sm md:text-base font-semibold text-white">
                  Get Started
                </Link></div>
            </div>

            <div className="py-3 lg:py-0 max-w-full mx-auto items-center justify-center">
              <Image
                src={template1_img3}
                alt=""
                className="max-w-full mx-auto h-full z-10"
              />

            </div>

          </div>

        </div>
      </div>

      <div className="absolute hidden lg:block bottom-10 -right-14 -z-10">
        <Image
          src={shapepattern2}
          className=""
        />
      </div>
    </section>
  )
}

export default Features