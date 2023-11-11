import styles from "@app/components/style"
import { CommunityData } from "@app/constants"
import Image from "next/image"

const Community = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4">
          {CommunityData.map((item) => (
            <div key={item.id} className="mb-12 text-center">
              <div className="flex items-center flex-col justify-center">
                <Image src={item.imgSrc} alt="" /></div>
              <h3 className="font-bold text-lg text-[#0F2137] mt-4">{item.title}</h3>
              <p className="text-[#343D48] leading-8 mt-2 xs:px-12 sm:px-0 md:max-w-[280px] mx-auto">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Community