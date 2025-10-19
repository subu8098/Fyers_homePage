import tradeAnyImage from '../assets/trade-anywhere-img.png'; 

export default function TradeAnywhereSection() {
  return (
    <section className="w-full bg-white pt-0 pb-0 -mt-8">
      {/* Top: Dark section with text and button */}
      <div className="w-full  md:h-[430px] bg-[#18181c]">
        <div className="max-w-full flex flex-col md:flex-row items-start md:items-center justify-between px-6 sm:px-10 lg:px-[92px] py-14 md:py-14">

          {/* Text Block */}
          <div className="flex-1 flex flex-col items-start md:items-start">
            <p className="text-gray-400 text-xs md:text-lg font-normal mb-3 mt-1">
              Cross-Device Trading That Follows You
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl text-left font-extrabold text-white leading-relaxed mb-4 md:mb-6">
              Trade Anywhere.<br/>Stay Synced Everywhere.
            </h2>
            <p className="text-gray-300 mr-6 text-base text-left md:text-lg font-normal mb-5 max-w-2xl md:mb-0">
              Cross-device functionality of the FYERS platform makes trading seamless and integrated. Seamlessly switch from phone to desktop to web without missing a beat.
            </p>
          </div>


          {/* Button */}
          <div className="flex md:flex-col items-start md:items-end md:w-1/3 md:mt-44">
            <button className="bg-[#2152f5] hover:bg-[#132b73] text-white font-medium text-base md:text-base px-8 py-2  transition flex items-end mt-3 md:mt-0">
              FYERS Web & App
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Image section: responsive, always covers width, maintains device aspect */}
      <div className="w-full relative bg-[#e8eaf2]">
        <div className="w-full h-[350px] xs:h-[350px] sm:h-[450px] md:h-[560px] lg:h-[950px] flex justify-center items-end">
          <img
            src={tradeAnyImage}
            alt="Trade on any device"
            className="object-fill h-full w-full max-w-full select-none"
            style={{ objectPosition: "center bottom" }}
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
