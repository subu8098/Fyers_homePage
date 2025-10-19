import fiaImage from '../assets/fia-image.png'; // Use your actual main image (phone/illustration/fia)

export default function MeetFIASection() {
  return (
    <section className="w-full mt-14 bg-[#131319] pt-16 md:pt-24 pb-0 md:min-h-[1000px] lg:min-h-[1300px] relative overflow-hidden">
      {/* Top wording block */}
      <div className="w-full max-w-full  px-6 sm:px-10 lg:px-[87px]">
        <div class="text-left"> 
            <span className="text-gray-400 text-sm ml-2 md:text-base font-medium  ">AI</span>
            <h2 className="text-white text-3xl sm:text-5xl mt-4 md:text-7xl font-bold mb-3 md:mb-4 text-left tracking-wide">
              Meet FIA – FYERS Intelligent Assistant
            </h2>
        </div>
        <div className="flex  flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Wording area */}
          <div className="flex-1 flex flex-col items-start md:items-start">
            
            
            <div className="text-white mr-6 text-base md:text-lg text-left font-medium mb-2">
              Real-Time Market Intelligence. From India’s First AI Trading Analyst.
            </div>
            <p className="text-gray-300 mt-2 text-left mr-6 text-base md:text-lg font-normal mb-7 md:max-w-[85%] lg:mb-0">
              FIA is a complete AI-powered assistant. It monitors markets in real time, spots patterns, analyzes news and builds tailored screeners for stocks, F&O, and commodities. FIA also analyses your portfolio with precision. Go beyond surface-level data with powerful insights built for pro-traders and investors, just like you.
            </p>
          </div>

          {/* Button block: right on desktop, below text on mobile */}
          <div className="flex md:w-1/4 md:mt-14 items-start md:justify-end mr-11">
            <button className="bg-[#1753f3] hover:bg-[#2334af] text-white font-medium text-base px-8 py-2  transition flex items-center mt-2 md:mt-0">
              See How FIA Works
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* FIA illustration/Image area, perfectly centered and full width */}
      <div className="w-full flex justify-center items-end pt-12 md:pt-24">
        <img
          src={fiaImage}
          alt="FIA Mobile Sample"
          className="w-full max-w-full h-[350px] sm:h-[400px] md:h-[600px] lg:h-[1000px] object-fill mx-auto drop-shadow-2xl pointer-events-none select-none"
          draggable={false}
        />
      </div>

      
    </section>
  );
}
