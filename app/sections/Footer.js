import { templatelogo } from "../assets"
import Image from "next/image";
import styles from "@app/components/style";
import Link from "next/link";


const FooterNav = [
  { name: 'Home', href: "/" },
  { name: 'Advertise', href: '/' },
  { name: 'Supports', href: '/' },
  { name: 'Marketing', href: '/' },
  { name: 'Contact', href: '/' },
];

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>

        <hr />
        <div className="mt-12">
          <div className="flex items-center justify-center h-4 pb-4">
            <Image src={templatelogo} className="w-28 xs:w-48" />
          </div>

          <ul className="flex justify-center gap-x-4 sm:gap-x-10 list-none mt-4 flex-wrap leading-10">
            {FooterNav.map((item) => (
              <li key={item.name} className="text-[#343D48]">
                <Link href={item.href}>{item.name}</Link></li>
            ))}
          </ul>

          <div className="text-center text-[#343D48] mt-4 !-mb-12"> Copyright by {new Date().getFullYear()} Daniel Ibitowa, Inc</div>

        </div>
      </div>
    </footer>
  )
}

export default Footer