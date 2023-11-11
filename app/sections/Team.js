import styles from "@app/components/style"
import { TeamSection } from "@app/constants"
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from "next/image";


const Team = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <div>
          <div className="text-center">
            <p className="uppercase text-red text-xs font-bold mb-3 tracking-widest">Our Team</p>
            <h3 className="font-semibold text-2xl sm:text-3xl sm:max-w-md mx-auto text-gray-900">The most qualified and talented individuals</h3>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 sm:gap-y-12 lg:gap-y-24 text-center lg:grid-cols-3">
            {TeamSection.map((item, index) => (
              <div key={index} className={`relative ${styles.flexCenter} p-3 lg:p-6 sm:shadow flex-col gap-y-1`}>
                <div className="rounded-full border-2 border-red">
                  <Image
                    src={item.imgSrc}
                    alt={item.altText}
                    className="w-16 sm:w-24 md:w-24 lg:w-32"
                  /> </div>
                <h3 className="font-semibold sm:text-lg text-red">{item.title}</h3>
                <h4 className="text-sm pb-1 text-gray-600 hover:text-red">{item.designation}</h4>
                <div className="sm:absolute top-[50%] left-[90%] lg:top-[60%] grid grid-cols-3 gap-x-2 sm:block text-gray-600">
                  <div className="sm:my-2 hover:text-red transition-all duration-300 ease-in-out"><FaFacebookF /></div>
                  <div className="sm:my-2 hover:text-red transition-all duration-300 ease-in-out"><FaTwitter /></div>
                  <div className="sm:my-2 hover:text-red transition-all duration-300 ease-in-out"><FaInstagram /></div>
                  {/*
               {item.socialProfile.map((c, i) => (
                <div key={i} className="">
                  <a href={item.path}>
                  <img 
                  src={c.icon}
                  alt=""
                  className="w-4 sm:my-2" /> </a>
                </div>
               ))}  */}
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team