import styles from "@app/components/style"


const Subscribe = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <div className='bg-red text-center rounded-xl px-[10px] xs:px-6 sm:px-12 py-16 sm:py-20'>
          <div className='sm:max-w-lg mx-auto'>
            <h3 className='text-white text-2xl md:text-3xl font-bold mb-3'>Subscribe to our Blog</h3>
            <p className='text-white opacity-90 leading-7 mx-auto md:max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor incididunt labore dolore.</p>


            <div className='mt-8'>
              <form action="#" method="POST">
                <div className='xs:flex xs:bg-white xs:rounded-[2rem] xs:p-[0.3rem]'>
                  <label htmlFor="email" className="sr-only">Email Address</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder='Enter your email address'
                    required
                    className='bg-white text-center xs:text-left mb-3 xs:mb-0 xs:ml-5 md:ml-7 py-4 xs:py-0 sm:py-4 w-full rounded-[2rem] focus:outline-none placeholder:text-red placeholder:text-sm sm:placeholder:text-[1rem] placeholder:text-center xs:placeholder:text-left placeholder:font-semibold placeholder:opacity-100'
                  />

                  <button
                    type="submit"
                    className='text-white text-sm font-semibold bg-[#343D48] xs:bg-red rounded-[2rem] py-4 w-full xs:w-[40%]'
                    aria-label="Subscribe">
                    Subscribe</button>

                </div>

              </form>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe