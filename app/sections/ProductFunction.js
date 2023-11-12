import styles from "@app/components/style"
import { ProductFunctions } from "@app/constants"
import Image from "next/image"


const ProductFunction = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>

        <div name="features">
          <div className="text-center">
            <p className="uppercase text-red text-xs font-bold mb-3 tracking-widest">Whats the function</p>
            <h3 className="font-semibold text-2xl md:text-3xl text-gray-900">Meet the feature of product</h3>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 text-center sm:grid-cols-2 lg:grid-cols-4">
            {ProductFunctions.map((productfunction) => (
              <div key={productfunction.id} className={`${styles.flexCenter} sm:items-start mx-auto max-w-xs xs:max-w-sm flex-col gap-y-3`}>
                <Image
                  className="w-20 -mb-7 sm:-ml-2 md:w-24 md:-ml-4"
                  src={productfunction.img}
                  alt=""
                />
                <h4 className="font-semibold text-lg text-gray-900">{productfunction.title}</h4>
                <p className="text-gray-600 px-5 sm:leading-7 sm:px-0 sm:text-left">{productfunction.text}</p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default ProductFunction