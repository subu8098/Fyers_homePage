import heroImage from '../assets/Header G1.png'; // Background, optional
// import personImage from '../assets/person.png'; // Use your real focal image here

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#131319] overflow-hidden h-[890px] mt-[72px]">
      {/* Background graphic, lower z-index */}
      <img
        src={heroImage}
        alt="Hero image background"
        className=" select-none absolute   -ml-3 inset-0 w-full h-full object-cover  opacity-80"
        style={{ zIndex: 1 }}
        
      />

      {/* Layout container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center h-full px-4 sm:px-12 lg:px-28">

        {/* Copy block */}
        <div className="
            w-full 
            flex flex-col
            items-start 
            text-left
            pt-11
            sm:-ml-14
            md:mt-14
            md:items-center md:text-center md:pt-0
            
            ">
          <p className="text-sm md:text-xl  font-medium text-white/60 tracking-widest mb-3 md:mb-4">
            WELCOME TO FYERS
          </p>
          <h1 className="font-extrabold mr-5 md:ml-11 text-[3rem] leading-[1.2] md:text-[90px] md:leading-[1.05] text-white mb-3 md:mb-6 w-full">
            Built for those who<br className="hidden md:block" /> are Born to Trade
          </h1>
          <p className="mb-5 text-sm mr-5 md:text-xl text-white/85 font-normal max-w-2xl lg:leading-relaxed">
            Advanced tools to help you unlock the next level of precision, insight and performance. One platform to rule the markets.
            
          </p>
          <button className="bg-[#182BFF] flex font-normal  px-6 py-2 text-white text-[16px] md:text-lg shadow hover:bg-[#1028af] transition mb-2 mt-2">
            Sign up now
            <span className='ml-2 flex items-end'>
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ transform: 'rotate(-30deg) translateY(-1px)', display: 'block' }}
            >
              <path d="M5 12h10" />
              <path d="M12 5l7 7-7 7" />
            </svg>
            </span>
          </button>
          <div className="text-xs mt-2">
            <span className="text-white/60">Already have an account?</span>{" "}
            <a className="text-[#F5FF0A] hover:underline" href="#">Login</a>
          </div>
        </div>

        
      </div>
    </section>
  );
}
