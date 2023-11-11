import styles from "@app/components/style"
import Image from "next/image"
import { patternBG } from "@app/assets"
import { NumberedFunctions } from "@app/constants"


const NumberedFunction = () => {
  return (
    <section className={`${styles.flexCenter}  ${styles.paddingX} relative isolate bg-red`}>
      <Image
        src={patternBG}
        alt=""
        className={`${styles.bgCover}`}
      />

      <div className={`${styles.boxWidth}`}>
        <div>
          <div className='text-center mt-24'>
            <p className="uppercase text-white opacity-70 text-xs md:text-base font-bold mb-3 tracking-widest">Whats the function</p>
            <h3 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-white">Let's see how it works</h3>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 text-center sm:grid-cols-2 lg:grid-cols-4">
            {NumberedFunctions.map((numberedfunction) => (
              <div key={numberedfunction.id} className={`${styles.flexCenter} sm:items-start mx-auto max-w-xs xs:max-w-sm flex-col gap-y-3`}>

                <div className="lg:flex lg:gap-x-2">
                  <h3 className="text-grey bg-white font-bold rounded-[15px] sm:rounded-[25px] p-3 md:p-4 sm:text-left text-2xl lg:text-3xl">{`0${numberedfunction.no}`}</h3>
                  <div className="hidden lg:flex">
                    <Image
                      src={numberedfunction.img}
                      alt=""
                      classname=""
                    />
                  </div>
                </div>

                <h4 className="font-semibold text-lg sm:text-xl text-white sm:text-left">{numberedfunction.title}</h4>
                <p className="text-white opacity-70 px-5 sm:leading-7 sm:px-0 sm:text-left">{numberedfunction.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NumberedFunction