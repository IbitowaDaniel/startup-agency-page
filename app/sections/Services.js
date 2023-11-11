import styles from "@app/components/style"
import { ProductServices } from "@app/constants"
import { iframe_image, shapepattern1 } from "@app/assets"
import Image from "next/image"


const Services = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16">
          <div className="md:order-last">
            <div className="text-center md:text-left">
              <p className="uppercase text-red text-xs md:text-base font-bold mb-3 tracking-widest">Our services</p>
              <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-gray-900">Business Goals Achieved With Design</h3>
            </div>

            <div className="mb-14 mx-auto lg:mx-0 xs:max-w-md xs:pl-8 md:pl-0">
              {ProductServices.map((productservices) => (
                <div key={productservices.id} className={`mt-8 flex items-center gap-x-1`}>
                  <Image
                    className="w-14 -mt-12 lg:w-20"
                    src={productservices.img}
                    alt="" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">{productservices.title}</h4>
                    <p className="text-gray-600 mt-2 leading-7">{productservices.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.flexCenter} relative md:py-8 lg:py-0`}>
            <Image
              src={iframe_image}
              alt="iframe image"
              className="max-w-full h-full z-10"
            />
            <Image
              src={shapepattern1}
              className="hidden lg:inline-block absolute -bottom-14 -left-40"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Services