import securityIcon from '../assets/data.png'; 

export default function DataSection() {
  return (
    <section className="w-full bg-[#18181c] py-10 lg:mt-[70px] mt-6 md:py-16 px-4 sm:px-12 lg:px-0">
      {/* Container for larger screens */}
      <div className="max-w-full mx-auto">
        {/* Top Label */}
        <div className="text-center md:text-center lg:text-center mb-7 md:mb-8">
          <span className="uppercase text-gray-400 text-base md:text-lg tracking-wide font-medium block md:mb-0 mb-4 text-left md:text-center lg:text-center">
            DATA
          </span>
        </div>

        {/* Main Heading */}
        <h1 className={`
            font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug md:leading-[1.13]
            text-white text-left md:text-center lg:text-center mb-7 md:mb-9
            w-full max-w-5xl md:max-w-7xl mx-auto tracking-wide 
          `}
        >
          Your money is safe at{" "}
          <span className="text-[#182BFF]">FYERS.</span>
          <br />ISO–Certified Security<br className="hidden md:block" />for Peace of Mind.
        </h1>

        {/* Small Description */}
        <div className="text-gray-300 text-base md:text-lg text-left md:text-center lg:text-center mx-auto mb-8 md:mb-14 w-full max-w-3xl tracking-wide">
          <div className="mb-1">We take your data and trades seriously.</div>
          FYERS is ISO 27001:2013 certified with 2FA, encrypted data handling, session monitoring, & a dedicated fraud-prevention team.
        </div>

        {/* Button */}
        <div className="flex md:justify-center justify-start lg:justify-center md:w-full">
          <button className="bg-[#182BFF] hover:bg-[#163387] text-white px-8 py-3  font-medium flex items-center gap-2 shadow-lg transition focus:outline-none text-base md:text-lg w-fit">
            Learn More About Security
            <img src={securityIcon} alt="security" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
