import pricingImage from '../assets/pricing-img.png'; 
import ocost from '../assets/ocost.png';
import cost from '../assets/1cost.png';
import mtf from '../assets/mtf.png';
import broking from '../assets/broking.png';

const pricingCells = [
  {
    icon: broking,
    text: "Broking charges of up to Rs 20 max"
  },
  {
    icon: ocost,
    text: "0 cost account opening and AMC"
  },
  {
    icon: cost,
    text: "0 cost investment in direct mutual funds, IPO and ETFs."
  },
  {
    icon: mtf,
    text: "MTF charges as low as 12.49% PA"
  }
];

export default function PricingSection() {
  return (
    <section className="w-full bg-[#f6f6fa]">
      {/* Top Section */}
            <div className="w-full max-w-full mx-auto px-6 sm:px-10 lg:px-[87px] pt-12 mb-14 pb-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                {/* Left: Heading */}
                <div className="flex-1 flex flex-col items-start md:items-start">
                    <p className="text-gray-500 text-[20px] font-normal mb-3">Pricing</p>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:-ml-1 text-left">
                    Transparent and low<br />cost pricing
                    </h2>
                </div>
                {/* Right: Button */}
                <div className="flex md:items-center md:mr-9 md:justify-end md:mt-0">
                    <button className="bg-[#2355f6] hover:bg-[#113fa3] text-white font-normal  px-8 py-2 transition flex items-center gap-2 whitespace-nowrap mt-4 md:mt-11">
                    Learn More
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-300 mt-7 mb-0" />

      {/* Pricing Details Row (Desktop) */}
{/* Desktop View */}
<div className="hidden md:flex w-full max-w-full mx-auto px-0">
  {/* Table/Cells Area */}
  <div className="md:w-[55%] h-[450px] flex flex-col ml-[86px] border-l border-gray-300 bg-white">
    {pricingCells.map((cell, i) => (
      <div
        key={cell.text}
        className={`
          flex items-center
          px-7 lg:px-[44px]                                
          border-b border-gray-300
          text-left
          tracking-normal
          last:border-b-0
          ${i === 0 ? '' : 'border-t-0'}
          py-11
        `}
      >
        <img src={cell.icon} alt="" className="w-6 h-6 mr-5" />
        <span className="text-base sm:text-lg text-gray-900 font-semibold">{cell.text}</span>
      </div>
    ))}
  </div>

  {/* Image Area */}
  <div className="md:w-[25%] h-[450px] border-l border-gray-300 bg-white flex items-center justify-center">
    <img
      src={pricingImage}
      alt="Pricing visual"
      className="h-full w-full object-fill"
    />
  </div>
</div>



      {/* Mobile View: Stack image cells and grid (image on top) */}
      <div className="md:hidden w-full px-6 sm:px-10">
        {/* Image first */}
        <img
          src={pricingImage}
          alt="Pricing visual"
          className="w-full object-cover  mb-0"
        />
        {/* Table */}
        <div className="flex flex-col   border-2 border-gray-300 mt-0">
          {pricingCells.map((cell, i) => (
            <div
              key={cell.text}
              className={`
                flex items-center
                px-7 py-7
                text-left
                border-b border-gray-300
                ${i === pricingCells.length - 1 ? 'border-b-0 ' : ''}
                
              `}
            >
              <img src={cell.icon} alt="" className="w-6 h-6 mr-4" />
              <span className="text-base text-gray-900 font-semibold">{cell.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-full border-t border-gray-300 mt-0 mb-0" />
    </section>
  );
}
